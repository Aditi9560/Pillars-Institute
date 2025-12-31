# Netlify Deployment Guide for THE PILLARS

## ✅ Build Status: READY FOR DEPLOYMENT

Your build is complete and includes:

- ✅ All pages (Home, About, Contact, Courses)
- ✅ API route for contact form (`/api/contact`)
- ✅ Email functionality with Nodemailer
- ✅ All static assets and images

## Deployment Options

### Option 1: Manual Upload (Recommended for Quick Deploy)

1. **Go to [Netlify](https://netlify.com)**
2. **Log in to your account**
3. **Drag and drop the entire `.next` folder** to the deploy area
4. **Wait for deployment to complete**

### Option 2: Git Integration (Recommended for Updates)

1. **Push your code to GitHub/GitLab**
2. **Connect repository to Netlify**
3. **Set build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

## Environment Variables Setup

### Step 1: Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable "2-Step Verification" if not enabled
3. Go to "App passwords"
4. Generate password for "Mail"
5. Copy the 16-character password

### Step 2: Set Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site settings" → "Environment variables"
4. Add these variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM=noreply@thepillars.edu
CONTACT_EMAIL=karanbandekar0813@gmail.com
```

## Testing After Deployment

### 1. Test All Pages

- ✅ Home page loads
- ✅ About page loads
- ✅ Contact page loads
- ✅ Courses page loads

### 2. Test Contact Form

- Go to `/contact` page
- Fill out the form
- Submit and check for success message
- Verify email is received

### 3. Test API Directly

```bash
curl -X POST https://your-site.netlify.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","contact":"1234567890"}'
```

## Troubleshooting

### If Contact Form Doesn't Work:

1. Check Netlify function logs
2. Verify environment variables are set
3. Test with `test-email-local.js` locally first

### If Build Fails:

1. Check Node.js version (should be 18)
2. Verify all dependencies are installed
3. Check for TypeScript errors

## Files Ready for Deployment

- `.next/` - Complete build directory
- `netlify.toml` - Netlify configuration
- `package.json` - Dependencies
- All source files in `app/`, `components/`, `lib/`

## Next Steps

1. **Deploy to Netlify** using one of the methods above
2. **Set environment variables** for email functionality
3. **Test all features** on the deployed site
4. **Share your live URL** with users

Your site is ready to go live! 🚀
