import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תנאי שימוש | משרד עורכי דין נדל״ן",
  description: "תנאי השימוש באתר",
};

export default function Terms() {
  return (
    <main className="min-h-screen py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">תנאי שימוש</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. כללי</h2>
            <p className="text-gray-700 leading-relaxed">
              השימוש באתר זה כפוף לתנאי שימוש אלה. שימוש באתר מהווה הסכמה מצדכם
              לתנאים אלה.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. שימוש באתר</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              מותר להשתמש באתר למטרות חוקיות בלבד. אסור:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>להשתמש באתר למטרות בלתי חוקיות</li>
              <li>להפר את זכויות הקניין הרוחני</li>
              <li>להזיק או לשבש את פעילות האתר</li>
              <li>להפיץ תוכן מזיק או לא הולם</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. אחריות</h2>
            <p className="text-gray-700 leading-relaxed">
              התוכן באתר מובא כמידע כללי בלבד ואינו מהווה ייעוץ משפטי.
              אין להסתמך על מידע זה מבלי להתייעץ עם עורך דין.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. זכויות יוצרים</h2>
            <p className="text-gray-700 leading-relaxed">
              כל הזכויות באתר, כולל תוכן, עיצוב, ולוגו, שמורות למשרד.
              אין להעתיק, להפיץ או להשתמש בתוכן ללא רשות.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. שינויים באתר</h2>
            <p className="text-gray-700 leading-relaxed">
              המשרד רשאי לשנות, לעדכן, או להפסיק כל חלק מהאתר בכל עת,
              ללא הודעה מוקדמת.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. דין שיפוטי</h2>
            <p className="text-gray-700 leading-relaxed">
              תנאים כפופים לדין הישראלי. כל סכסוך יידון בבתי המשפט המוסמכים בישראל.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
