const fs = require("fs");
const path = require("path");

const envContent = `# SMTP Configuration for Nodemailer
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
`;

const envPath = path.join(__dirname, ".env.local");

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log("✅ Created .env.local file with default configuration");
  console.log("📝 Please update the SMTP credentials in .env.local");
} else {
  console.log("⚠️  .env.local already exists, skipping creation");
}
