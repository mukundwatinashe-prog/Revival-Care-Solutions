# Environment Variables Setup

## Quick Setup

1. **Create a `.env.local` file** in the project root (same folder as `package.json`)

2. **Add your Web3Forms access key**:

```env
WEB3FORMS_ACCESS_KEY=your-access-key-here
```

## Getting Your Web3Forms Access Key

1. Visit: https://web3forms.com/
2. Enter your email: `milton@revivalcare.co.uk`
3. Click "Get Access Key"
4. Copy the access key
5. Add it to your `.env.local` file

## File Location

Create the file at:
```
C:\Users\sylvi\OneDrive\Desktop\Revival Care\.env.local
```

## Example .env.local File

```env
# Web3Forms Configuration
WEB3FORMS_ACCESS_KEY=abc123def456ghi789

# Optional: Site URL
# NEXT_PUBLIC_SITE_URL=https://revivalcare.co.uk
```

## Important Notes

- ✅ `.env.local` is already in `.gitignore` - it won't be committed to GitHub
- ✅ Never commit your actual access key to GitHub
- ✅ You need to add the same key in Vercel (or your hosting platform) for production

## Setting Up in Vercel (Production)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: Your access key from Web3Forms
   - **Environment**: Check all (Production, Preview, Development)
4. Click **Save**
5. Redeploy your site

## Testing

After adding the key:
1. Restart your development server (`npm run dev`)
2. Submit a test form on `/contact` or `/consultation`
3. Check your email (`milton@revivalcare.co.uk`) for the submission

## Without the Key

If you don't have the key yet:
- Forms will still work (show success message)
- No emails will be sent
- Form data will be logged to console/server logs
