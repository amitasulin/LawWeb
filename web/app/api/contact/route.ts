import { NextRequest, NextResponse } from "next/server";

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

    // TODO: Add CAPTCHA verification here
    // TODO: Send email using email service (SendGrid, Resend, etc.)
    // TODO: Save to database if needed

    // For now, just log the submission
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate successful submission
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
