import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "תחומי התמחות | משרד עורכי דין נדל״ן",
  description: "פירוט תחומי ההתמחות והשירותים המשפטיים של המשרד",
};

const practiceAreas = [
  {
    slug: "transactions",
    title: "עסקאות מכר ורכישה",
    description: "ליווי משפטי מלא בכל שלבי עסקת הרכישה או המכירה",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    services: [
      "בדיקת זכויות בנכס",
      "ניסוח חוזי מכר והתאמתם",
      "ליווי בהתמקחות ובמשא ומתן",
      "בדיקת נאותות (Due Diligence)",
      "התנהלות מול גורמים מקצועיים",
      "רישום בטאבו ומעבר זכויות",
    ],
  },
  {
    slug: "projects",
    title: "ליווי פרויקטים",
    description: "ייעוץ משפטי מקיף ליזמים וקבלנים בפרויקטי נדל״ן",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    services: [
      "הכנת מסמכי מכירות ורכישה",
      "ניהול משא ומתן עם קונים",
      "הכנת הסכמי שיתוף",
      "ניהול משפטי של הפרויקט",
      "טיפול בהתנגדויות והיתרים",
    ],
  },
  {
    slug: "leasing",
    title: "חוזי שכירות",
    description: "ניסוח ובדיקת חוזי שכירות למשכירים ושוכרים",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    services: [
      "ניסוח חוזי שכירות מקצועיים",
      "בדיקת חוזים קיימים",
      "ייעוץ בסכסוכי שכירות",
      "טיפול בפינוי שוכרים",
      "התנהלות עם ועדות בית",
    ],
  },
  {
    slug: "tax",
    title: "מיסוי מקרקעין",
    description: "ייעוץ מס ותכנון מס עבור עסקאות נדל״ן",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    services: [
      "חישוב מס שבח ומס רכישה",
      "תכנון מס מיטבי",
      "טיפול בפטורים והקלות",
      "ייצוג מול רשויות המס",
      "ייעוץ בעסקאות מורכבות",
    ],
  },
  {
    slug: "litigation",
    title: "ליטיגציה נדל״נית",
    description: "ייצוג בבתי משפט ובתי דין בענייני נדל״ן",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    services: [
      "ייצוג בסכסוכי נדל״ן",
      "תביעות פינוי",
      "סכסוכים בין שכנים",
      "תביעות נזיקין",
      "ערעורים בבתי משפט",
    ],
  },
  {
    slug: "renewal",
    title: "פינוי בינוי ותמ״א 38",
    description: "ליווי משפטי בפרויקטי פינוי בינוי ותמ״א 38",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    services: [
      "ליווי ועדות בית",
      "הכנת הסכמי שיתוף",
      "ניהול משא ומתן עם יזמים",
      "בדיקת נאותות",
      "התנהלות מול רשויות",
    ],
  },
];

export default function PracticeAreas() {
  return (
    <main className="min-h-screen py-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">תחומי התמחות</h1>
        <p className="text-xl text-gray-600 mb-12">
          המשרד מספק שירותים משפטיים מקיפים בכל תחומי הנדל״ן
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.slug}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-accent flex-shrink-0">
                  {area.icon}
                </div>
                <h2 className="text-2xl font-semibold">{area.title}</h2>
              </div>
              <p className="text-gray-700 mb-4">{area.description}</p>
              <ul className="space-y-2 mb-6">
                {area.services.map((service, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-accent ml-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="text-accent hover:text-accent-dark font-medium"
              >
                קרא עוד →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
