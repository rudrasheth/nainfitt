# Deploy to Netlify - Step by Step

## ✅ Code Already Pushed to GitHub
Repository: https://github.com/rudrasheth/nainfitt

## Now Deploy on Netlify (2 Minutes)

### Step 1: Go to Netlify
Open: https://app.netlify.com/

### Step 2: Add New Site
1. Click **"Add new site"** button (top right)
2. Select **"Import an existing project"**

### Step 3: Connect GitHub
1. Click **"Deploy with GitHub"**
2. If asked, authorize Netlify to access your GitHub
3. Search for and select: **rudrasheth/nainfitt**

### Step 4: Configure Build Settings
Netlify should auto-detect these settings:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

If not auto-detected, enter them manually.

### Step 5: Deploy!
1. Click **"Deploy site"** button
2. Wait 1-2 minutes for build to complete

### Step 6: Get Your URL
After deployment, you'll see:
- **Site URL**: Something like `https://random-name-123.netlify.app`

### Step 7: Customize Site Name (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Change site name"**
3. Set it to: `nainfit-health-twin` or `health-twin-demo`
4. Your URL becomes: `https://nainfit-health-twin.netlify.app`

### Step 8: Update Main MediLingo Site
Once you have the Netlify URL:

1. Edit `MediLingo/frontend/src/components/layout/GlassNav.tsx`
2. Find line ~337:
   ```tsx
   onClick={() => window.open('https://health-twin-demo.netlify.app', '_blank')}
   ```
3. Replace with your actual Netlify URL
4. Commit and push to update main site

## Done! 🎉

You now have:
- ✅ Main MediLingo: https://medi-lingoooooo.vercel.app
- ✅ Health Twin Demo: https://YOUR-NETLIFY-URL.netlify.app
- ✅ Link between them

## Test It
1. Go to main MediLingo site
2. Click purple **"Health Twin Demo"** button in navbar
3. Should open your Netlify demo in new tab
4. Watch vitals update every 5 seconds

## Troubleshooting

**If build fails on Netlify:**
- Check build logs
- Make sure Node version is 18+ (set in Site settings → Build & deploy → Environment)

**If site loads but looks broken:**
- Check browser console for errors
- Verify all files were pushed to GitHub

**Need help?**
- Netlify docs: https://docs.netlify.com/
- Or just show me the error!
