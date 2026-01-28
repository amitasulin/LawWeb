import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "כל השדות המסומנים ב-* הם חובה" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "כתובת אימייל לא תקינה" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const { recaptchaToken } = body;
    if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
      try {
        const recaptchaResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify`,
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
          }
        );
        const recaptchaData = await recaptchaResponse.json();
        if (!recaptchaData.success || recaptchaData.score < 0.5) {
          return NextResponse.json(
            { error: "אימות אבטחה נכשל. נסו שוב." },
            { status: 400 }
          );
        }
      } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        // In production, you might want to block the request
        // For now, we'll continue but log the error
      }
    }
    // Send email
    try {
      await sendContactEmail({
        name,
        email,
        phone: phone || "",
        subject,
        message,
      });
      console.log("Contact form submission sent to OMERASULIN1@GMAIL.COM:", {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
    } catch (emailError) {
      console.error("Failed to send contact email:", emailError);
      // Still return success to user, but log the error
    }

    return NextResponse.json(
      { message: "ההודעה התקבלה בהצלחה" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "שגיאה בשליחת ההודעה. נסו שוב מאוחר יותר." },
      { status: 500 }
    );
  }
}
