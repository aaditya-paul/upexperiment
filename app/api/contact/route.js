import EmailNotification from "@/components/emailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function GET() {
  return NextResponse.json("Not Permitted");
}
export async function POST(req) {
  const data = await req.json();

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json(
      { message: "Email not sent due to missing fields" },
      { status: 500, statusText: "failed" }
    );
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aadityapaul2006.programmer@gmail.com",
      subject: "Customer Message Notification",
      react: EmailNotification(data.name, data.email, data.message)
    });

    return NextResponse.json(
      { message: "Email Sent" },
      { status: 200, statusText: "email sent" }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500, statusText: "failed" }
    );
  }
}
