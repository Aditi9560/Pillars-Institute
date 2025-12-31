import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  console.log("SMTP_USER:", process.env.SMTP_USER ? "Set" : "Not set");
  console.log("SMTP_PASS:", process.env.SMTP_PASS ? "Set" : "Not set");
  console.log("SMTP_HOST:", process.env.SMTP_HOST || "smtp.gmail.com");
  console.log("SMTP_PORT:", process.env.SMTP_PORT || "587");

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP not configured - email not sent");
    return false;
  }

  try {
    console.log("Attempting to send email to:", params.to);
    console.log("From:", params.from);
    console.log("Subject:", params.subject);

    const result = await transporter.sendMail({
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text || undefined,
      html: params.html || undefined,
    });

    console.log("Email sent successfully:", result.messageId);
    return true;
  } catch (error) {
    console.error("Nodemailer email error:", error);
    return false;
  }
}

export function formatContactInquiryEmail(data: any): EmailParams {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a8a;">New Contact Inquiry - THE PILLARS</h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Student Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        ${data.school ? `<p><strong>School:</strong> ${data.school}</p>` : ""}
        ${
          data.standard
            ? `<p><strong>Standard:</strong> ${data.standard}</p>`
            : ""
        }
        ${data.stream ? `<p><strong>Stream:</strong> ${data.stream}</p>` : ""}
        ${
          data.course
            ? `<p><strong>Course Interested:</strong> ${data.course}</p>`
            : ""
        }
        <p><strong>Contact Number:</strong> ${data.contact}</p>
        ${
          data.address ? `<p><strong>Address:</strong> ${data.address}</p>` : ""
        }
      </div>
      
      <p style="color: #6b7280;">This inquiry was submitted through THE PILLARS website contact form.</p>
      <p style="color: #6b7280;">Submitted on: ${new Date().toLocaleString()}</p>
    </div>
  `;

  const textContent = `
    New Contact Inquiry - THE PILLARS
    
    Student Information:
    Name: ${data.name}
    ${data.school ? `School: ${data.school}` : ""}
    ${data.standard ? `Standard: ${data.standard}` : ""}
    ${data.stream ? `Stream: ${data.stream}` : ""}
    ${data.course ? `Course Interested: ${data.course}` : ""}
    Contact Number: ${data.contact}
    ${data.address ? `Address: ${data.address}` : ""}
    
    Submitted on: ${new Date().toLocaleString()}
  `;

  return {
    to: process.env.CONTACT_EMAIL || "karanbandekar0813@gmail.com",
    from:
      process.env.SMTP_FROM ||
      process.env.SMTP_USER ||
      "noreply@thepillars.edu",
    subject: `New Inquiry from ${data.name} - THE PILLARS`,
    text: textContent,
    html: htmlContent,
  };
}
