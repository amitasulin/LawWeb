import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | משרד עורכי דין נדל״ן",
  description: "מדיניות הפרטיות של המשרד",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">מדיניות פרטיות</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. כללי</h2>
            <p className="text-gray-700 leading-relaxed">
              המשרד מכבד את פרטיות המשתמשים באתר ומתחייב להגן על המידע האישי הנאסף
              בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981, ולכל דין אחר החל בישראל.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. איסוף מידע</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              אנו אוספים מידע אישי רק כאשר הוא נדרש לספק את השירותים המבוקשים:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>שם, אימייל, טלפון בעת מילוי טופס יצירת קשר</li>
              <li>פרטי פגישה בעת קביעת פגישה</li>
              <li>נתוני גלישה באמצעות Google Analytics (אנונימיים)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. שימוש במידע</h2>
            <p className="text-gray-700 leading-relaxed">
              המידע הנאסף משמש למטרות הבאות: יצירת קשר עם הלקוח, מתן שירותים משפטיים,
              שיפור האתר, ומילוי חובות משפטיות.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. אבטחת מידע</h2>
            <p className="text-gray-700 leading-relaxed">
              המשרד נוקט באמצעי אבטחה מתקדמים להגנה על המידע האישי, כולל הצפנה,
              גיבויים, והגבלת גישה למידע.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. זכויות המשתמש</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              למשתמש יש זכות לבקש复兴 עיון, עדכון, מחיקה או תיקון של המידע האישי.
              ניתן לפנות אלינו בכתובת: info@lawfirm.co.il
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. עוגיות (Cookies)</h2>
            <p className="text-gray-700 leading-relaxed">
              האתר משתמש בעוגיות לשיפור החווייה, למדידת ביצועים ולצרכים אנליטיים.
              ניתן להגדיר את הדפדפן כך שלא יקבל עוגיות.
            </p>
          </section>

          <section>
            <p className="text-gray-600 text-sm mt-8">
              מדיניות זו עשויה להתעדכן מעת לעת. מועד עדכון אחרון: ינואר 2024
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
