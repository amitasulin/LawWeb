import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, preferredDate, preferredTime, meetingType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !preferredDate || !preferredTime || !meetingType) {
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

    // Basic phone validation (Israeli format)
    const phoneRegex = /^0\d{1,2}-?\d{7}$/;
    if (!phoneRegex.test(phone.replace(/-/g, ""))) {
      return NextResponse.json(
        { error: "מספר טלפון לא תקין" },
        { status: 400 }
      );
    }

    // Format the meeting type in Hebrew
    const meetingTypeHebrew: Record<string, string> = {
      "in-person": "פגישה במשרד",
      "phone": "שיחת טלפון",
      "video": "פגישה אונליין",
    };

    // Log the booking request
    console.log("Booking request:", {
      name,
      email,
      phone,
      preferredDate,
      preferredTime,
      meetingType: meetingTypeHebrew[meetingType],
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification to the law office
    // TODO: Send confirmation email to the client
    // TODO: Save to database if needed
    // TODO: Add to calendar system

    // Format date in Hebrew
    const date = new Date(preferredDate);
    const dateStr = date.toLocaleDateString("he-IL", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // For now, just return success
    // In production, you would:
    // 1. Send email to office: OMERASULIN1@GMAIL.COM
    // 2. Send confirmation email to client
    // 3. Save to database
    // 4. Add calendar event (Google Calendar API, etc.)

    return NextResponse.json(
      {
        message: "הבקשה נשלחה בהצלחה",
        details: {
          date: dateStr,
          time: preferredTime,
          type: meetingTypeHebrew[meetingType],
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking request error:", error);
    return NextResponse.json(
      { error: "שגיאה בשליחת הבקשה. נסו שוב מאוחר יותר." },
      { status: 500 }
    );
  }
}
