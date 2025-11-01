import type { Metadata } from "next";
import CalendlyWidget from "@/components/CalendlyWidget";

export const metadata: Metadata = {
  title: "קביעת פגישה | משרד עורכי דין נדל״ן",
  description: "קבעו פגישת ייעוץ עם עורך הדין",
};

export default function Booking() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

  return (
    <main className="min-h-screen py-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">קביעת פגישה</h1>
        <p className="text-xl text-gray-600 mb-12">
          בחרו תאריך וזמן נוחים לפגישת הייעוץ
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Calendly Embed */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <CalendlyWidget url={calendlyUrl} />
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">מידע נוסף</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• פגישות זמינות בימים ראשון-חמישי, 09:00-18:00</li>
              <li>• משך הפגישה: 45 דקות</li>
              <li>• פגישות זמינות במשרד או אונליין</li>
              <li>• תזכורת תישלח יום לפני הפגישה</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              יש בעיה עם המערכת? צרו קשר ישירות:
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:031234567" className="btn-primary">
                התקשרו: 03-1234567
              </a>
              <a href="mailto:info@lawfirm.co.il" className="btn-secondary">
                שלחו אימייל
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
