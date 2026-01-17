import { NextResponse } from 'next/server';

interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  area: string;
  careType: string;
  relationship: string;
  careRecipientName: string;
  urgency: string;
  message: string;
  consent: boolean;
  honeypot?: string; // Spam protection - should be empty
}

// Simple input sanitization to prevent XSS
function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 1000); // Limit length
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Validate phone format (UK format)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;
  return phoneRegex.test(phone);
}

export async function POST(request: Request) {
  try {
    // Check for rate limiting headers (Vercel handles this at edge)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const userAgent = request.headers.get('user-agent');
    
    // Basic bot detection
    if (!userAgent || userAgent.length < 10) {
      return NextResponse.json(
        { error: 'Invalid request.' },
        { status: 400 }
      );
    }

    const data: ConsultationFormData = await request.json();

    // Honeypot check - if filled, it's likely a bot
    if (data.honeypot && data.honeypot.length > 0) {
      // Silently accept but don't process (don't reveal it's a honeypot)
      return NextResponse.json({ 
        success: true, 
        message: 'Consultation request submitted successfully!' 
      });
    }

    // Sanitize all inputs
    const sanitizedData = {
      firstName: sanitizeInput(data.firstName),
      lastName: sanitizeInput(data.lastName),
      email: sanitizeInput(data.email).toLowerCase(),
      phone: sanitizeInput(data.phone),
      area: sanitizeInput(data.area),
      careType: sanitizeInput(data.careType),
      relationship: sanitizeInput(data.relationship),
      careRecipientName: sanitizeInput(data.careRecipientName),
      urgency: sanitizeInput(data.urgency),
      message: sanitizeInput(data.message),
      consent: Boolean(data.consent),
    };

    // Validate required fields
    if (!sanitizedData.firstName || !sanitizedData.lastName || !sanitizedData.email || 
        !sanitizedData.phone || !sanitizedData.area || !sanitizedData.careType || 
        !sanitizedData.urgency) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }
    
    // Relationship is optional for contact form, but set default if empty
    if (!sanitizedData.relationship) {
      sanitizedData.relationship = 'Not specified';
    }

    // Validate email format
    if (!isValidEmail(sanitizedData.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(sanitizedData.phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    // Validate consent
    if (!sanitizedData.consent) {
      return NextResponse.json(
        { error: 'Please provide consent to proceed.' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (sanitizedData.firstName.length < 2 || sanitizedData.lastName.length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid name.' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailSubject = `New Consultation Request from ${sanitizedData.firstName} ${sanitizedData.lastName}`;
    const emailBody = `
NEW CONSULTATION REQUEST
========================

CONTACT INFORMATION
-------------------
Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone}
Area: ${sanitizedData.area}

CARE DETAILS
------------
Type of Care: ${sanitizedData.careType}
Relationship: ${sanitizedData.relationship}
Care Recipient: ${sanitizedData.careRecipientName || 'Not specified'}
Urgency: ${sanitizedData.urgency}

MESSAGE
-------
${sanitizedData.message || 'No additional message provided.'}

========================
This request was submitted via the Revival Care website.
Submitted at: ${new Date().toISOString()}
IP: ${forwardedFor || 'Unknown'}
Please respond within 24 hours.
    `.trim();

    // Check for Web3Forms access key
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    // Debug logging to help troubleshoot
    console.log('🔍 Environment Variable Check:');
    console.log('WEB3FORMS_ACCESS_KEY exists:', !!accessKey);
    console.log('WEB3FORMS_ACCESS_KEY length:', accessKey ? accessKey.length : 0);
    console.log('All env vars starting with WEB:', Object.keys(process.env).filter(k => k.startsWith('WEB')));
    
    if (!accessKey) {
      console.error('❌ WEB3FORMS_ACCESS_KEY not configured in environment variables');
      console.error('📧 Form submission received but email service is not configured:');
      console.error('==========================================');
      console.error('Name:', `${sanitizedData.firstName} ${sanitizedData.lastName}`);
      console.error('Email:', sanitizedData.email);
      console.error('Phone:', sanitizedData.phone);
      console.error('Area:', sanitizedData.area);
      console.error('Care Type:', sanitizedData.careType);
      console.error('Message:', sanitizedData.message);
      console.error('Submitted At:', new Date().toISOString());
      console.error('==========================================');
      console.error('⚠️ ACTION REQUIRED: Set WEB3FORMS_ACCESS_KEY in Vercel environment variables');
      console.error('⚠️ Make sure to:');
      console.error('   1. Add variable in Vercel Settings → Environment Variables');
      console.error('   2. Enable for Production environment');
      console.error('   3. Redeploy the site after adding the variable');
      
      // Return error so user knows something went wrong
      return NextResponse.json({ 
        success: false,
        error: 'Email service is not configured. Please contact us directly at milton@revivalcare.co.uk or call 07544 152585.',
        message: 'There was an issue sending your request. Please contact us directly.' 
      }, { status: 500 });
    }

    // Send email using Web3Forms
    try {
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          to: 'milton@revivalcare.co.uk',
          from_name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
          subject: emailSubject,
          message: emailBody,
          reply_to: sanitizedData.email,
        }),
      });

      const emailResult = await emailResponse.json();

      if (emailResponse.ok && emailResult.success) {
        console.log('✅ Email sent successfully to milton@revivalcare.co.uk');
        return NextResponse.json({ 
          success: true, 
          message: 'Consultation request submitted successfully!' 
        });
      } else {
        console.error('❌ Email sending failed:');
        console.error('Response status:', emailResponse.status);
        console.error('Response body:', emailResult);
        console.error('📧 Form data for manual processing:');
        console.error('==========================================');
        console.error('Name:', `${sanitizedData.firstName} ${sanitizedData.lastName}`);
        console.error('Email:', sanitizedData.email);
        console.error('Phone:', sanitizedData.phone);
        console.error('Area:', sanitizedData.area);
        console.error('Care Type:', sanitizedData.careType);
        console.error('Message:', sanitizedData.message);
        console.error('Submitted At:', new Date().toISOString());
        console.error('==========================================');
        
        // Return error so user knows something went wrong
        return NextResponse.json({ 
          success: false,
          error: 'Failed to send email. Please contact us directly at milton@revivalcare.co.uk or call 07544 152585.',
          message: 'There was an issue sending your request. Please contact us directly.' 
        }, { status: 500 });
      }
    } catch (fetchError) {
      console.error('❌ Network error when sending email:', fetchError);
      console.error('📧 Form data for manual processing:');
      console.error('==========================================');
      console.error('Name:', `${sanitizedData.firstName} ${sanitizedData.lastName}`);
      console.error('Email:', sanitizedData.email);
      console.error('Phone:', sanitizedData.phone);
      console.error('Area:', sanitizedData.area);
      console.error('Care Type:', sanitizedData.careType);
      console.error('Message:', sanitizedData.message);
      console.error('Submitted At:', new Date().toISOString());
      console.error('==========================================');
      
      return NextResponse.json({ 
        success: false,
        error: 'Network error. Please contact us directly at milton@revivalcare.co.uk or call 07544 152585.',
        message: 'There was an issue sending your request. Please contact us directly.' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing consultation request:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}

// Only allow POST method
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
