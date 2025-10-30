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
              <h2 className="text-2xl font-semibold mb-3">{area.title}</h2>
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
