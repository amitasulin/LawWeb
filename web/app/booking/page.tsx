import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "קביעת פגישה | עומר אסולין משרד עורכי דין",
  description: "קבעו פגישת ייעוץ עם עומר אסולין",
};

export default function Booking() {
  return (
    <main className="min-h-screen py-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">קביעת פגישה</h1>
        <p className="text-xl text-gray-600 mb-12">
          מלאו את הטופס ונחזור אליכם לאישור הפגישה
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Booking Form */}
          <div className="mb-8">
            <BookingForm />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">מידע נוסף</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ פגישות זמינות בימים ראשון-חמישי, 09:00-18:00</li>
              <li>✅ משך הפגישה: 30-45 דקות (לפי בחירתכם)</li>
              <li>✅ פגישות זמינות במשרד, שיחת טלפון או אונליין</li>
              <li>✅ נחזור אליכם תוך 24 שעות לאישור הפגישה</li>
              <li>✅ תזכורת תישלח יום לפני הפגישה</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              יש בעיה עם המערכת? צרו קשר ישירות:
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:0525701166" className="btn-primary">
                התקשרו: 052-5701166
              </a>
              <a href="mailto:OMERASULIN1@GMAIL.COM" className="btn-secondary">
                שלחו אימייל
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
