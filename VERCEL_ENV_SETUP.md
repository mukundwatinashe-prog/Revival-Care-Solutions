# VERCEL Environment Variable Setup - Step by Step

## 🚨 CRITICAL: You MUST follow these exact steps

### Step 1: Get Your Web3Forms Access Key
1. Go to: https://web3forms.com/
2. Enter email: `milton@revivalcare.co.uk`
3. Click "Get Access Key"
4. **Copy the ENTIRE key** (it will look like: `abc123-def456-ghi789`)

### Step 2: Add to Vercel (VERY IMPORTANT - EXACT STEPS)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click on your project** (Revival Care Solutions or similar)
3. **Click "Settings"** in the top menu
4. **Click "Environment Variables"** in the left sidebar
5. **Click "Add New"** button
6. **Fill in exactly:**
   - **Key**: `WEB3FORMS_ACCESS_KEY` 
     - ❌ NOT `web3forms_access_key`
     - ❌ NOT `WEB3FORMS_ACCESS_KEY ` (no space after)
     - ✅ EXACTLY: `WEB3FORMS_ACCESS_KEY`
   - **Value**: Paste your access key from Web3Forms
     - ❌ NO quotes around it
     - ❌ NO spaces before/after
     - ✅ Just the key itself
   - **Environment**: 
     - ✅ CHECK "Production" (CRITICAL!)
     - ✅ CHECK "Preview" 
     - ✅ CHECK "Development"
7. **Click "Save"**

### Step 3: VERIFY It Was Added

After saving, you should see `WEB3FORMS_ACCESS_KEY` in the list. Check:
- ✅ Name matches exactly: `WEB3FORMS_ACCESS_KEY`
- ✅ Value shows (masked with dots)
- ✅ Production checkbox is checked

### Step 4: REDEPLOY (MANDATORY!)

**Environment variables ONLY work after redeployment!**

1. Still in Vercel, click **"Deployments"** tab
2. Find the **latest deployment** (top of the list)
3. Click the **three dots (⋯)** menu on the right
4. Click **"Redeploy"**
5. Wait for deployment to complete (can take 1-3 minutes)
6. ✅ **Only NOW will the environment variable work**

### Step 5: Test

1. Visit your live website
2. Go to `/contact` or `/consultation`
3. Fill out and submit the form
4. You should see: "Consultation request submitted successfully!"
5. Check your email at `milton@revivalcare.co.uk`

## 🔍 How to Verify It's Working

### Check Vercel Logs:

1. In Vercel, go to **Deployments** tab
2. Click on the **latest deployment**
3. Click **"Functions"** tab
4. Look for your `/api/consultation` function
5. Submit a test form
6. In the logs, look for:
   - ✅ "WEB3FORMS_ACCESS_KEY exists: true" = Working!
   - ❌ "WEB3FORMS_ACCESS_KEY exists: false" = Not set correctly

## ❌ Common Mistakes

1. **Variable name typo**: Must be exactly `WEB3FORMS_ACCESS_KEY`
2. **Not enabled for Production**: Only Development checked = won't work on live site
3. **Forgot to redeploy**: Variable added but site not redeployed = variable not available
4. **Quotes in value**: Don't put quotes around the access key value
5. **Extra spaces**: No spaces before/after the key or value

## 🆘 Still Not Working?

If you've done all the above and it's still not working:

1. **Double-check the variable name** in Vercel Settings → Environment Variables
2. **Verify it's enabled for Production**
3. **Redeploy again** (sometimes it takes 2 attempts)
4. **Check Vercel logs** to see what error message appears
5. **Contact me** with a screenshot of your Vercel Environment Variables page
