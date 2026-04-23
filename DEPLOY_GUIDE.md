# Deploy Health Twin Demo to Netlify - 5 Minutes

## Step 1: Create GitHub Repo

```bash
cd health-twin-demo
git init
git add .
git commit -m "Initial commit: Health Twin Demo for NainFit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/health-twin-demo.git
git push -u origin main
```

## Step 2: Deploy on Netlify

1. Go to https://app.netlify.com/
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize
4. Select your `health-twin-demo` repository
5. Build settings (should auto-detect):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**

## Step 3: Get Your URL

After deployment (takes 1-2 minutes), you'll get a URL like:
`https://YOUR-SITE-NAME.netlify.app`

You can customize it:
- Go to **Site settings** → **Domain management**
- Click **"Change site name"**
- Set it to: `health-twin-demo` or `nainfit-demo`

## Step 4: Update Main Site Link

In your main MediLingo code, update the URL in `GlassNav.tsx`:

```tsx
onClick={() => window.open('https://YOUR-ACTUAL-URL.netlify.app', '_blank')}
```

Then commit and push to update your main site.

## Done! 🎉

Now you have:
- ✅ Main MediLingo app on Vercel
- ✅ Health Twin Demo on Netlify
- ✅ Link between them

## For Interview

Show them:
1. **Main site**: Full MediLingo features
2. **Click "Health Twin Demo"**: Opens NainFit-aligned features
3. **Explain**: "I separated this to show scalable architecture and avoid bundle size issues"
4. **Show code**: The HealthTwinDashboard.tsx file in main repo

This demonstrates:
- Problem-solving (deployment issues)
- Architecture decisions (microservices approach)
- Full-stack skills (multiple deployments)
- NainFit alignment (all their features working)
