import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              עורך דין נדל״ן מקצועי
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              ליווי משפטי מקצועי ומיומן בעסקאות נדל״ן, פרויקטים ומיסוי מקרקעין
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="btn-primary bg-accent hover:bg-accent-light text-primary-dark">
                קבעו פגישה
              </Link>
              <Link href="/practice-areas" className="btn-secondary bg-transparent border-2 border-white hover:bg-white/10">
                תחומי התמחות
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">תחומי התמחות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "עסקאות מכר ורכישה",
                description: "ליווי משפטי מלא בעסקאות רכישה ומכירה של נכסים",
                href: "/practice-areas/transactions",
              },
              {
                title: "ליווי פרויקטים",
                description: "ייעוץ משפטי מקיף ליזמים וקבלנים בפרויקטים מורכבים",
                href: "/practice-areas/projects",
              },
              {
                title: "חוזי שכירות",
                description: "ניסוח ובדיקת חוזי שכירות למשכירים ושוכרים",
                href: "/practice-areas/leasing",
              },
              {
                title: "מיסוי מקרקעין",
                description: "ייעוץ מס מקיף ותכנון מס עבור עסקאות נדל״ן",
                href: "/practice-areas/tax",
              },
              {
                title: "ליטיגציה נדל״נית",
                description: "ייצוג בבתי משפט ובתי דין בענייני נדל״ן",
                href: "/practice-areas/litigation",
              },
              {
                title: "פינוי בינוי",
                description: "ליווי משפטי בפרויקטי פינוי בינוי ותמ״א 38",
                href: "/practice-areas/renewal",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-accent hover:text-accent-dark font-medium"
                >
                  קרא עוד →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">מה הלקוחות אומרים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "ישראל ישראלי",
                role: "יזם",
                text: "ליווי מקצועי ומסור שהוביל את הפרויקט להצלחה מלאה.",
              },
              {
                name: "שרה כהן",
                role: "רוכשת דירה",
                text: "הליווי המשפטי היה מקצועי מאוד והעסקה עברה בצורה חלקה.",
              },
              {
                name: "דוד לוי",
                role: "משקיע",
                text: "ייעוץ מס מעולה שחסך לנו כסף רב ומנע בעיות משפטיות.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl text-primary-dark mb-8">
            קבעו פגישת ייעוץ ללא התחייבות
          </p>
          <Link href="/booking" className="btn-primary bg-primary text-white hover:bg-primary-light">
            קבעו פגישה עכשיו
          </Link>
        </div>
      </section>
    </main>
  );
}