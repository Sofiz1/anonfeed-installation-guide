# Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

Your project is ready to deploy! Follow these simple steps:

### Step 1: Push to GitHub (if not already)

1. Initialize git (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git remote add origin YOUR_GITHUB_REPO_URL
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Netlify

#### Option A: Via Netlify Dashboard (Recommended)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repository
5. Netlify will auto-detect Next.js with these settings:
   - **Build command:** `npm install --legacy-peer-deps && npm run build`
   - **Publish directory:** (auto-handled by Next.js plugin)
   - **Base directory:** (leave empty)

#### Option B: Via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Step 3: Add Environment Variables

In Netlify Dashboard:
1. Go to **Site settings** → **Environment variables**
2. Add these variables:
   - `NEXT_PUBLIC_APP_URL` = `https://anonfeed-2a2a1.web.app/`
   - `NEXT_PUBLIC_SUPPORT_PHONE` = `+251911418196`
   - `NEXT_PUBLIC_TELEGRAM_USERNAME` = `Sofizhag1`

3. Click **"Redeploy site"** after adding variables

### Step 4: Configure Custom Domain (Optional)

1. Go to **Domain settings**
2. Add your custom domain
3. Follow DNS configuration instructions

## ✅ Configuration Already Set

Your `netlify.toml` is already configured with:
- ✅ Next.js plugin enabled
- ✅ Correct build command
- ✅ Node.js version 20
- ✅ Legacy peer deps flag for React 19 compatibility

## 🔄 Continuous Deployment

Once connected to GitHub:
- ✅ Automatic deploys on every push to main branch
- ✅ Preview deploys for pull requests
- ✅ Build notifications via email

## 📝 Notes

- The `.env.local` file is in `.gitignore` and won't be committed
- Environment variables should be set in Netlify dashboard
- Your site will be available at `https://your-site-name.netlify.app`

## 🐛 Troubleshooting

If build fails:
1. Check build logs in Netlify dashboard
2. Ensure all environment variables are set
3. Verify Node.js version matches (20)
4. Make sure `--legacy-peer-deps` flag is used

## 📞 Support

If you encounter issues:
- Check Netlify build logs
- Review Next.js documentation
- Contact Netlify support

---

**Ready to deploy?** Go to [https://app.netlify.com](https://app.netlify.com) and get started! 🎉

