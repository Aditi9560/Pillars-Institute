const fs = require("fs");
const path = require("path");

const envContent = `# SMTP Configuration for Contact Form Emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@thepillars.edu

# Contact Email (where inquiries will be sent)
CONTACT_EMAIL=karanbandekar0813@gmail.com

# Custom Key (if needed)
CUSTOM_KEY=your-custom-key
`;

const envPath = path.join(__dirname, ".env.local");

try {
  fs.writeFileSync(envPath, envContent);
  console.log("✅ .env.local file created successfully!");
  console.log("\n📧 Email Configuration:");
  console.log(
    "- Contact inquiries will be sent to: karanbandekar0813@gmail.com"
  );
  console.log("\n🔧 Next Steps:");
  console.log("1. Update SMTP_USER with your Gmail address");
  console.log("2. Update SMTP_PASS with your Gmail App Password");
  console.log("3. Update SMTP_FROM with your preferred sender email");
  console.log("\n📝 Gmail App Password Setup:");
  console.log("1. Go to Google Account settings");
  console.log("2. Enable 2-Factor Authentication");
  console.log('3. Generate an App Password for "Mail"');
  console.log("4. Use that App Password as SMTP_PASS");
} catch (error) {
  console.error("❌ Error creating .env.local:", error.message);
}
