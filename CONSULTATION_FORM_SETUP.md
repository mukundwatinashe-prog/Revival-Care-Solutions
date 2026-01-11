# Consultation Form Setup Guide

## Overview

Your Revival Care website has **two forms**:

1. **Consultation Form** (`/consultation` page) - ✅ **Fully Functional**
2. **Contact Form** (`/contact` page) - ⚠️ **Currently Simulated Only**

---

## Consultation Form (`/consultation` page)

### Where Submissions Go

The consultation form submits to: **`/api/consultation`** (API Route)

### How It Works

1. **Frontend**: User fills out the form on `/consultation` page
2. **Submission**: Form data is sent to `POST /api/consultation`
3. **API Route**: `src/app/api/consultation/route.ts` processes the submission
4. **Email Service**: Uses **Web3Forms** to send emails to `milton@revivalcare.co.uk`

### Email Configuration

The form uses **Web3Forms** (a free form backend service) to send emails.

**To configure:**

1. Get a free Web3Forms access key from: https://web3forms.com/
2. Add to your `.env.local` file:
   ```env
   WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
3. On Vercel (or your hosting platform), add the same environment variable in your project settings

### Form Features

- ✅ Input validation and sanitization
- ✅ Spam protection (honeypot field)
- ✅ Email format validation
- ✅ Phone number validation (UK format)
- ✅ Consent checkbox validation
- ✅ Error handling
- ✅ Success/error messages

### What Gets Emailed

When someone submits the consultation form, an email is sent to `milton@revivalcare.co.uk` with:
- Contact information (name, email, phone, area)
- Care details (type of care, relationship, urgency)
- Message/notes
- Submission timestamp
- IP address (for security)

---

## Contact Form (`/contact` page)

### Current Status

✅ **The contact form is now fully functional** - it submits to the same API as the consultation form.

### How It Works

1. **Frontend**: User fills out the form on `/contact` page
2. **Submission**: Form data is sent to `POST /api/consultation` (same endpoint)
3. **API Route**: Uses the same validation and email service
4. **Email Service**: Uses **Web3Forms** to send emails to `milton@revivalcare.co.uk`

### Form Features

- ✅ Input validation and sanitization
- ✅ Spam protection (honeypot field)
- ✅ Email format validation
- ✅ Phone number validation (UK format)
- ✅ Consent checkbox validation
- ✅ Error handling
- ✅ Success/error messages
- ✅ Form reset after successful submission

---

## API Route Details

**File**: `src/app/api/consultation/route.ts`

**Endpoint**: `POST /api/consultation`

**Features**:
- Input sanitization (prevents XSS attacks)
- Email validation
- Phone validation
- Honeypot spam protection
- Web3Forms integration
- Graceful fallback if email service fails

**Without Web3Forms Key**:
- Form still works (returns success)
- Data is logged to console
- No email is sent
- You'd need to check server logs manually

**With Web3Forms Key**:
- Form works normally
- Email is sent to `milton@revivalcare.co.uk`
- You receive submissions via email

---

## Setup Instructions

### Step 1: Get Web3Forms Access Key

1. Visit https://web3forms.com/
2. Enter your email: `milton@revivalcare.co.uk`
3. Get your free access key

### Step 2: Add Environment Variable (Local Development)

Create or update `.env.local` in the project root:

```env
WEB3FORMS_ACCESS_KEY=your-access-key-here
```

### Step 3: Add Environment Variable (Production - Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: Your access key
   - **Environment**: Production, Preview, Development (check all)
4. Save and redeploy

---

## Testing

### Test the Consultation Form

1. Visit: `http://localhost:3000/consultation`
2. Fill out the form
3. Submit
4. Check:
   - Success message appears
   - Email arrives at `milton@revivalcare.co.uk` (if Web3Forms key is configured)

### Test Without Email Service

If you don't have Web3Forms key yet:
- Form still works
- Success message shows
- Check browser console/server logs for the form data

---

## Form Fields

### Consultation Form Fields

1. **Contact Information**:
   - First Name (required)
   - Last Name (required)
   - Email (required)
   - Phone (required)
   - Area/Town (required)

2. **Care Details**:
   - Type of Care (required)
   - Relationship to Care Recipient (required)
   - Care Recipient's Name (optional)
   - How Soon Do You Need Care? (required)

3. **Additional Information**:
   - Message/Notes (optional)

4. **Consent**:
   - Privacy Policy consent checkbox (required)

---

## Troubleshooting

### Emails Not Arriving

1. Check that `WEB3FORMS_ACCESS_KEY` is set correctly
2. Verify the email address in the API route (`milton@revivalcare.co.uk`)
3. Check spam/junk folder
4. Review server logs for errors

### Form Not Submitting

1. Check browser console for errors
2. Verify network requests in browser DevTools
3. Check server logs for API errors

### Questions?

The form setup is located in:
- **Frontend**: `src/app/consultation/page.tsx`
- **Backend API**: `src/app/api/consultation/route.ts`
