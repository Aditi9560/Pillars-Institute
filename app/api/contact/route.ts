import { NextRequest, NextResponse } from "next/server";
import { sendEmail, formatContactInquiryEmail } from "@/lib/nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contact: z.string().min(10, "Contact number must be at least 10 digits"),
  school: z.string().optional(),
  standard: z.string().optional(),
  stream: z.string().optional(),
  course: z.string().optional(),
  address: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    console.log("Contact API called");
    const body = await request.json();
    console.log("Request body:", body);

    // Validate the request body
    const validatedData = contactSchema.parse(body);
    console.log("Validated data:", validatedData);

    // Format and send email
    console.log("Formatting email...");
    const emailParams = formatContactInquiryEmail(validatedData);
    console.log("Email params:", emailParams);

    console.log("Sending email...");
    const emailSent = await sendEmail(emailParams);
    console.log("Email sent result:", emailSent);

    if (emailSent) {
      return NextResponse.json(
        { message: "Contact inquiry submitted successfully!" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
