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
    
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY not configured');
      // Log the submission for manual processing
      console.log('Form submission (email service not configured):', {
        ...sanitizedData,
        submittedAt: new Date().toISOString(),
      });
      
      return NextResponse.json({ 
        success: true, 
        message: 'Consultation request received! We will contact you shortly.' 
      });
    }

    // Send email using Web3Forms
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
      return NextResponse.json({ 
        success: true, 
        message: 'Consultation request submitted successfully!' 
      });
    } else {
      console.error('Email sending failed:', emailResult);
      
      // Still return success to user, log for manual follow-up
      console.log('Failed email - Form data for manual processing:', {
        ...sanitizedData,
        submittedAt: new Date().toISOString(),
      });
      
      return NextResponse.json({ 
        success: true, 
        message: 'Consultation request received! We will contact you shortly.' 
      });
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
