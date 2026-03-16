# Environment Variables Setup

## Consultation form → your inbox

**All consultation/contact form submissions** (from the Consultation page and the Contact page) are sent to **info@revivalcare.co.uk** via one setting.

You only need to set **one** environment variable: `WEB3FORMS_ACCESS_KEY`. No other code or config is required.

---

## Quick Setup

1. **Create a `.env.local` file** in the project root (same folder as `package.json`).

2. **Add your Web3Forms access key**:

```env
WEB3FORMS_ACCESS_KEY=your-access-key-here
```

## Getting Your Web3Forms Access Key

1. Visit: https://web3forms.com/
2. Enter the email where you want to receive forms: **info@revivalcare.co.uk**
3. Click **Get Access Key**
4. Copy the access key and add it to `.env.local` (and to Vercel for production)

## File Location

Create the file at:
```
C:\Users\sylvi\OneDrive\Desktop\Revival Care\.env.local
```

## Example .env.local File

```env
# Required: so consultation/contact form submissions are emailed to you
WEB3FORMS_ACCESS_KEY=your-key-from-web3forms

# Optional: change where form emails are sent (default: info@revivalcare.co.uk)
# CONSULTATION_EMAIL=info@revivalcare.co.uk
```

## Important Notes

- ✅ `.env.local` is already in `.gitignore` - it won't be committed to GitHub
- ✅ Never commit your actual access key to GitHub
- ✅ You need to add the same key in Vercel (or your hosting platform) for production

## Setting Up in Vercel (Production)

1. Go to your Vercel project dashboard.
2. **Settings** → **Environment Variables**.
3. Add:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: Your access key from Web3Forms (use the same email: info@revivalcare.co.uk)
   - **Environments**: Production (and Preview/Development if you use them)
4. **Save**, then **Redeploy** the project so the new variable is applied.

## Testing

After adding the key:

1. Restart the dev server: `npm run dev`
2. Submit a test form from **Consultation** (`/consultation`) or **Contact** (`/contact`)
3. Check **info@revivalcare.co.uk** for the email

## If You Don’t Set the Key

- Submissions will be validated but **no email will be sent**
- The user will see an error asking them to contact you directly at info@revivalcare.co.uk or 01324868987
- Set `WEB3FORMS_ACCESS_KEY` (and redeploy on Vercel) to start receiving form submissions
