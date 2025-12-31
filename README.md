# THE PILLARS - Next.js Education Platform

A modern education platform built with Next.js, featuring email functionality with Nodemailer.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI** components
- **React Hook Form** with Zod validation
- **Nodemailer** for email functionality
- **Responsive design** for all devices
- **Dark/Light theme** support

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create environment variables file:

```bash
cp .env.example .env.local
```

3. Configure your environment variables in `.env.local`:

```env
# SMTP Configuration for Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@thepillars.edu

# Contact Email
CONTACT_EMAIL=sejallgoyall@gmail.com

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

### Email Setup

For Gmail SMTP:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password as `SMTP_PASS` in your `.env.local`

### Running the Application

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint
```

The application will be available at `http://localhost:3000`

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── about/             # About page
│   ├── courses/           # Courses page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── Layout.tsx        # Page layout wrapper
├── lib/                  # Utility libraries
│   ├── nodemailer.ts     # Email configuration
│   ├── queryClient.ts    # React Query setup
│   └── utils.ts          # Utility functions
├── pages/                # Page components
│   ├── Home.tsx          # Home page content
│   ├── About.tsx         # About page content
│   ├── Courses.tsx       # Courses page content
│   └── Contact.tsx       # Contact page content
└── hooks/                # Custom React hooks
    └── use-toast.ts      # Toast notifications
```

## API Endpoints

### POST /api/contact

Submit a contact inquiry form.

**Request Body:**

```json
{
  "name": "string (required)",
  "school": "string (optional)",
  "standard": "string (optional)",
  "stream": "string (optional)",
  "course": "string (optional)",
  "contact": "string (required, min 10 digits)",
  "address": "string (optional)"
}
```

**Response:**

```json
{
  "message": "Contact inquiry submitted successfully!"
}
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Nodemailer** - Email sending
- **Lucide React** - Icons
- **Framer Motion** - Animations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
# EducationSite
# EducationSite
# Nodmailer-withnext
