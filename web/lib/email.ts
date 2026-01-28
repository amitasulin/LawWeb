import nodemailer from "nodemailer";

export async function sendBookingEmail({
  name,
  email,
  phone,
  preferredDate,
  preferredTime,
  meetingType,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  meetingType: string;
  message?: string;
}) {
  // Create transporter
  // For Gmail, you can use OAuth2 or App Password
  // For simplicity, we'll use SMTP with environment variables
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_FROM;
  const smtpPassword = process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD;

  if (!smtpUser || !smtpPassword) {
    console.error("SMTP credentials not configured. Please set SMTP_USER and SMTP_PASSWORD in .env.local");
    throw new Error("Email configuration missing");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  // Format date in Hebrew
  const date = new Date(preferredDate);
  const dateStr = date.toLocaleDateString("he-IL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format meeting type in Hebrew
  const meetingTypeHebrew: Record<string, string> = {
    "in-person": "פגישה במשרד",
    "phone": "שיחת טלפון",
    "video": "פגישה אונליין (Zoom/Teams)",
  };

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER || "noreply@lawfirm.co.il",
    to: process.env.BOOKING_EMAIL || "omerasulin1@gmail.com",
    subject: `בקשה חדשה לקביעת פגישה - ${name}`,
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a5f; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
          בקשה חדשה לקביעת פגישה
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">פרטי הלקוח:</h3>
          <p><strong>שם:</strong> ${name}</p>
          <p><strong>אימייל:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>טלפון:</strong> <a href="tel:${phone}">${phone}</a></p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">פרטי הפגישה:</h3>
          <p><strong>תאריך מועדף:</strong> ${dateStr}</p>
          <p><strong>שעה מועדפת:</strong> ${preferredTime}</p>
          <p><strong>סוג פגישה:</strong> ${meetingTypeHebrew[meetingType] || meetingType}</p>
          ${message ? `<p><strong>הודעה:</strong><br>${message.replace(/\n/g, "<br>")}</p>` : ""}
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>הבקשה התקבלה ב-${new Date().toLocaleString("he-IL")}</p>
        </div>
      </div>
    `,
    text: `
בקשה חדשה לקביעת פגישה

פרטי הלקוח:
שם: ${name}
אימייל: ${email}
טלפון: ${phone}

פרטי הפגישה:
תאריך מועדף: ${dateStr}
שעה מועדפת: ${preferredTime}
סוג פגישה: ${meetingTypeHebrew[meetingType] || meetingType}
${message ? `הודעה: ${message}` : ""}

הבקשה התקבלה ב-${new Date().toLocaleString("he-IL")}
    `.trim(),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export async function sendContactEmail({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  // Create transporter
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_FROM;
  const smtpPassword = process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD;

  if (!smtpUser || !smtpPassword) {
    console.error("SMTP credentials not configured. Please set SMTP_USER and SMTP_PASSWORD in .env.local");
    throw new Error("Email configuration missing");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER || "noreply@lawfirm.co.il",
    to: "OMERASULIN1@GMAIL.COM",
    subject: `הודעה חדשה מטופס יצירת קשר - ${subject}`,
    replyTo: email,
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a5f; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
          הודעה חדשה מטופס יצירת קשר
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">פרטי השולח:</h3>
          <p><strong>שם:</strong> ${name}</p>
          <p><strong>אימייל:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>טלפון:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
        </div>
        
        <div style="background-color: #fff; padding: 20px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">נושא:</h3>
          <p>${subject}</p>
          
          <h3 style="color: #1e3a5f; margin-top: 20px;">הודעה:</h3>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>ההודעה התקבלה ב-${new Date().toLocaleString("he-IL")}</p>
        </div>
      </div>
    `,
    text: `
הודעה חדשה מטופס יצירת קשר

פרטי השולח:
שם: ${name}
אימייל: ${email}
${phone ? `טלפון: ${phone}` : ""}

נושא: ${subject}

הודעה:
${message}

ההודעה התקבלה ב-${new Date().toLocaleString("he-IL")}
    `.trim(),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw error;
  }
}