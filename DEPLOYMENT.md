# Vercel Deployment Guide

This project is configured for automatic deployment to Vercel via GitHub Actions.

## Quick Setup Steps

### 1. Create Vercel Project
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Import this repository: `riverpark-catalyst-project`
5. **Framework Preset**: Next.js (auto-detected)
6. **Build Command**: `pnpm run build`
7. **Install Command**: `pnpm install`

### 2. Configure Environment Variables in Vercel
Go to **Project Settings → Environment Variables** and add:

```env
BIGCOMMERCE_STORE_HASH=nzocnvfw4r
BIGCOMMERCE_STOREFRONT_TOKEN=[YOUR_JWT_TOKEN_HERE]
BIGCOMMERCE_CHANNEL_ID=1
NEXTAUTH_SECRET=gmbgiaimA0rzOwjOMl+D2rvPrqtkkIdgJr+2M89hpsU=
NEXTAUTH_URL=https://your-project.vercel.app
```

### 3. GitHub Actions Setup (Optional - for CI/CD)
To enable GitHub Actions deployment, add these secrets in GitHub:
**Repository Settings → Secrets and Variables → Actions**

- `VERCEL_TOKEN` - Get from Vercel Account Settings
- `VERCEL_ORG_ID` - Found in Vercel project settings
- `VERCEL_PROJECT_ID` - Found in Vercel project settings
- `BIGCOMMERCE_STORE_HASH`
- `BIGCOMMERCE_STOREFRONT_TOKEN`
- `BIGCOMMERCE_CHANNEL_ID`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL_PRODUCTION`

## Deployment Methods

### Method 1: Vercel Dashboard (Easiest)
- Push to GitHub → Vercel auto-deploys
- Preview deployments for pull requests
- Production deployments for main branch

### Method 2: Vercel CLI
```bash
npx vercel --prod
```

### Method 3: GitHub Actions
- Automatic on push/PR (already configured)
- Requires GitHub secrets setup

## Production Checklist
- [ ] Valid BigCommerce Storefront API token (JWT format)
- [ ] NEXTAUTH_URL updated to production domain
- [ ] Environment variables configured in Vercel
- [ ] Custom domain configured (optional)

## Performance Optimizations
The project includes:
- ✅ Next.js App Router
- ✅ Automatic image optimization
- ✅ Edge functions for API routes
- ✅ CDN caching via Vercel
- ✅ Core Web Vitals optimization