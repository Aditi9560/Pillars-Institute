# Email Setup Guide for THE PILLARS

## Current Setup ✅

Your code is correct! The issue is with environment variables.

## Files That Are Working:

- ✅ `app/api/contact/route.ts` - API route is properly configured
- ✅ `lib/nodemailer.ts` - Nodemailer setup is correct
- ✅ `app/contact/page.tsx` - Contact form is properly configured

## Step 1: Gmail Setup

### 1.1 Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable "2-Step Verification" if not already enabled

### 1.2 Generate App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click "2-Step Verification"
3. Scroll down to "App passwords"
4. Click "App passwords"
5. Select "Mail" and "Other (Custom name)"
6. Enter "THE PILLARS Website"
7. Copy the generated 16-character password

## Step 2: Environment Variables

### For Local Development (.env.local):

Create/update `.env.local` file in your project root:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM=noreply@thepillars.edu
CONTACT_EMAIL=karanbandekar0813@gmail.com
```

### For Netlify Deployment:

1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site settings" > "Environment variables"
4. Add these variables:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `your-email@gmail.com`
   - `SMTP_PASS` = `your-16-character-app-password`
   - `SMTP_FROM` = `noreply@thepillars.edu`
   - `CONTACT_EMAIL` = `karanbandekar0813@gmail.com`

## Step 3: Test Locally

1. Update `test-email-local.js` with your credentials
2. Run: `node test-email-local.js`
3. Check if you receive the test email

## Step 4: Test Contact Form

1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000/contact`
3. Fill out the contact form
4. Submit and check the console logs
5. Check if you receive the email

## Common Issues & Solutions

### Issue 1: "Authentication failed"

- **Solution**: Use App Password, not your regular Gmail password
- **Check**: 2FA must be enabled

### Issue 2: "Connection timeout"

- **Solution**: Check firewall settings
- **Alternative**: Try different SMTP settings

### Issue 3: "Invalid login"

- **Solution**: Double-check the App Password
- **Check**: No spaces in the password

### Issue 4: "Less secure app access"

- **Solution**: Use App Passwords instead of enabling less secure apps

## Debugging

### Check Console Logs

Your code now includes detailed logging. Check:

- Browser console for frontend errors
- Terminal/Netlify logs for backend errors

### Test API Directly

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","contact":"1234567890"}'
```

## Your Current Configuration

- **API Route**: `/api/contact` ✅
- **Method**: POST ✅
- **Validation**: Zod schema ✅
- **Email Service**: Nodemailer with Gmail SMTP ✅
- **Error Handling**: Comprehensive ✅

The only thing missing is the environment variables! 🎯
