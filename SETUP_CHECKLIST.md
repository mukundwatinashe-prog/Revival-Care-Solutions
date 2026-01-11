# Setup Checklist - What You Need to Do

## ✅ Already Done
- [x] Web3Forms access key added to `.env.local`
- [x] Contact form connected to API
- [x] Consultation form connected to API
- [x] API route configured

## 🔄 Next Steps

### 1. Restart Development Server (IMPORTANT!)
If your dev server is running, you need to restart it for the `.env.local` changes to take effect:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

**Why?** Next.js only reads environment variables when the server starts.

### 2. Test the Forms
After restarting, test both forms:

1. **Contact Form**: Visit `http://localhost:3000/contact`
   - Fill out the form
   - Submit it
   - Check your email (`milton@revivalcare.co.uk`)

2. **Consultation Form**: Visit `http://localhost:3000/consultation`
   - Fill out the form
   - Submit it
   - Check your email

### 3. Configure for Production (Vercel)
For your live website, you need to add the environment variable in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: (same key from your `.env.local`)
   - **Environment**: Check all (Production, Preview, Development)
4. Click **Save**
5. **Redeploy** your site (or it will auto-deploy on next push)

### 4. Verify Email Address
The forms are configured to send emails to: **`milton@revivalcare.co.uk`**

If you need to change this, edit:
- File: `src/app/api/consultation/route.ts`
- Line: 185 (change the `to:` field)

## 🧪 Testing Checklist

- [ ] Restart dev server
- [ ] Test contact form submission
- [ ] Test consultation form submission
- [ ] Verify emails arrive in inbox
- [ ] Check spam folder if emails don't arrive
- [ ] Add environment variable in Vercel
- [ ] Test on production site

## ❓ Troubleshooting

**Emails not arriving?**
1. Check spam/junk folder
2. Verify the access key is correct
3. Check browser console for errors
4. Check server logs for API errors
5. Verify email address in API route matches your Web3Forms account email

**Form not submitting?**
1. Check browser console for errors
2. Verify network tab shows successful POST request
3. Check server logs

**Need help?**
- Check `CONSULTATION_FORM_SETUP.md` for detailed documentation
- Check `ENV_SETUP.md` for environment variable setup
