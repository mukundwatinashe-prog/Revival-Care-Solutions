# Email Form Setup - Fix Instructions

## Issue Identified

The consultation and contact forms were not sending emails because the `WEB3FORMS_ACCESS_KEY` environment variable is either:
1. Not set in your environment
2. Set incorrectly
3. Not configured in your hosting platform (Vercel)

## What Was Fixed

1. **Improved Error Handling**: The API now properly detects when email service is not configured
2. **Better Error Messages**: Users now see clear error messages when email fails
3. **Enhanced Logging**: Server logs now show detailed information about form submissions and email failures
4. **Frontend Updates**: Forms now properly handle and display error responses

## How to Fix

### Step 1: Get Your Web3Forms Access Key

1. Visit: https://web3forms.com/
2. Enter your email: `milton@revivalcare.co.uk`
3. Click "Get Access Key"
4. Copy the access key (it will look like: `abc123-def456-ghi789`)

### Step 2: Set Up Local Development (if testing locally)

1. Create a file named `.env.local` in the project root (same folder as `package.json`)
2. Add this line:
   ```
   WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
3. Replace `your-access-key-here` with the key you got from Web3Forms
4. Restart your development server (`npm run dev`)

### Step 3: Set Up Production (Vercel or your hosting platform)

**For Vercel:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Click **Add New**
4. Add:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: Your access key from Web3Forms
   - **Environment**: Check all (Production, Preview, Development)
5. Click **Save**
6. **Redeploy your site** (go to Deployments and click "Redeploy")

**For other platforms:**
- Add the environment variable `WEB3FORMS_ACCESS_KEY` with your access key value
- Restart/redeploy your application

### Step 4: Verify It's Working

1. Submit a test form on `/contact` or `/consultation`
2. Check your email inbox at `milton@revivalcare.co.uk`
3. Check spam folder if you don't see it
4. Check server logs (Vercel logs or your hosting platform logs) for any errors

## Testing

After setting up the key:
- Forms should show "Consultation request submitted successfully!" on success
- You should receive emails at `milton@revivalcare.co.uk`
- Server logs should show "✅ Email sent successfully"

## Troubleshooting

### Getting "Email service is not configured" Error?

This means the `WEB3FORMS_ACCESS_KEY` environment variable is not being detected. Follow these steps:

#### Step 1: Verify in Vercel Dashboard
1. Go to your Vercel project: https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Look for `WEB3FORMS_ACCESS_KEY`
5. **Check that it's enabled for Production** (not just Development)

#### Step 2: Check Variable Name
- Must be exactly: `WEB3FORMS_ACCESS_KEY` (case-sensitive)
- No spaces before or after
- No quotes around the value

#### Step 3: Redeploy (CRITICAL!)
After adding/changing environment variables:
1. Go to **Deployments** tab
2. Click the **three dots** (⋯) on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete
5. **Environment variables only work after redeploy!**

#### Step 4: Test the Debug Endpoint
I've created a test endpoint. After redeploying, visit:
```
https://your-site.vercel.app/api/test-env
```
This will show if the environment variable is detected.

### Emails Still Not Arriving?

1. **Check Environment Variable**: Verify `WEB3FORMS_ACCESS_KEY` is set correctly
2. **Check Server Logs**: Look for error messages in your hosting platform logs
3. **Check Spam Folder**: Emails might be going to spam
4. **Verify Web3Forms Account**: Make sure the email `milton@revivalcare.co.uk` is verified in Web3Forms
5. **Check Rate Limits**: Web3Forms has rate limits - if you've sent too many, wait a bit
6. **Verify Redeploy**: Make sure you redeployed after adding the variable

### Error Messages

- **"Email service is not configured"**: The `WEB3FORMS_ACCESS_KEY` is missing
- **"Failed to send email"**: The key might be invalid or Web3Forms API is having issues
- **"Network error"**: Connection issue to Web3Forms API

## Important Notes

- ✅ `.env.local` is already in `.gitignore` - your key won't be committed to GitHub
- ✅ Never commit your actual access key to GitHub
- ✅ The key must be set in both local development AND production hosting
- ✅ After adding the key in Vercel, you MUST redeploy for it to take effect

## Alternative Solutions

If Web3Forms doesn't work for you, we can switch to:
- Resend (recommended for production)
- SendGrid
- Nodemailer with SMTP
- Other email services

Let me know if you need help setting up an alternative email service.
