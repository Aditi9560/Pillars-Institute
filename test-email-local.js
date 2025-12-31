// Test email functionality locally
const nodemailer = require("nodemailer");

// Test configuration
const testConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-app-password", // Replace with your app password
  },
};

async function testEmail() {
  console.log("Testing email configuration...");

  // Create transporter
  const transporter = nodemailer.createTransporter(testConfig);

  // Verify connection
  try {
    console.log("Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection verified successfully!");
  } catch (error) {
    console.error("❌ SMTP connection failed:", error.message);
    return;
  }

  // Send test email
  try {
    console.log("Sending test email...");
    const result = await transporter.sendMail({
      from: "your-email@gmail.com", // Replace with your email
      to: "karanbandekar0813@gmail.com",
      subject: "Test Email from THE PILLARS",
      html: "<h2>Test Email</h2><p>This is a test email from THE PILLARS contact form.</p>",
      text: "Test Email\n\nThis is a test email from THE PILLARS contact form.",
    });

    console.log("✅ Test email sent successfully!");
    console.log("Message ID:", result.messageId);
  } catch (error) {
    console.error("❌ Failed to send test email:", error.message);
  }
}

testEmail();
