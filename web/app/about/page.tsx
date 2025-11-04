import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות | עומר אסולין משרד עורכי דין",
  description: "למידע על עומר אסולין, הניסיון, ההשכלה והחזון של המשרד",
};

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">אודות המשרד</h1>
        
        <div className="max-w-4xl space-y-8">
          <section>
            <h2 className="text-3xl font-semibold mb-4">קצת עלי</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              עומר אסולין, עורך דין עם ניסיון בתחומי חוזים, מקרקעין, תכנון ובנייה ומשפט אזרחי. 
              התמחות עמוקה בליווי משפטי של עסקאות מורכבות, פרויקטים בנייה ומיסוי מקרקעין.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              המשרד מספק שירותים משפטיים מקצועיים ללקוחות פרטיים, יזמים וקבלנים,
              תוך מתן תשומת לב אישית ומותאמת לכל לקוח ולכל פרויקט.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">השכלה והכשרה</h2>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• תואר ראשון במשפטים (LL.B) מאוניברסיטת תל אביב</li>
              <li>• התמחות במשרד מוביל בתחום הנדל״ן</li>
              <li>• חבר בלשכת עורכי הדין בישראל</li>
              <li>• השתלמויות מקצועיות מתמשכות בתחום הנדל״ן והמיסוי</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">חזון וערכים</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              המשרד דוגל במתן שירות משפטי מקצועי, אמין ומותאם אישית לכל לקוח.
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• מחויבות למקצועיות ומצוינות</li>
              <li>• שקיפות מלאה עם הלקוח</li>
              <li>• תקשורת פתוחה וזמינות</li>
              <li>• הגנה על האינטרסים המשפטיים של הלקוח</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
