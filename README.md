# Digital Health Twin Demo - NainFit Interview

This is a standalone demo of the Digital Health Twin Dashboard built for the NainFit internship interview.

## Features Demonstrated

1. **Digital Health Twin Dashboard** - AI-powered health insights
2. **Live Vital Signs** - Real-time wearable data simulation (updates every 5 seconds)
3. **Predictive Health Analysis** - Risk assessment based on health patterns
4. **Nutrition Intelligence** - Food-drug interaction warnings

## Quick Deploy to Netlify

1. Push this folder to a GitHub repo
2. Go to https://app.netlify.com/
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

## Local Development

```bash
npm install
npm run dev
```

## Tech Stack

- React 18
- Vite (fast build)
- Lucide React (icons)
- Pure CSS (no heavy dependencies)

## Why This Approach?

The main MediLingo app has 60+ dependencies causing build issues on Vercel. This lightweight demo:
- ✅ Only 3 dependencies
- ✅ Builds in seconds
- ✅ Shows all NainFit-aligned features
- ✅ Can be linked from main site

## Interview Talking Points

1. **0→1 Product Development**: Built complete health monitoring system
2. **AI Integration**: Simulates AI-powered health insights
3. **Wearable Data**: HealthKit/Fitbit compatible architecture
4. **Nutrition Intelligence**: Food-drug interaction logic
5. **Scalable Architecture**: Separated concerns for easy deployment
