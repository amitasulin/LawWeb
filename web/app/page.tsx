import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-24 md:py-32 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80 z-10"></div>
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
              alt="משרד עורכי דין מקצועי"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent-metallic rounded-full text-sm font-semibold mb-6 border border-accent/30 backdrop-blur-sm">
                  משרד עורכי דין מקצועי
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient">עומר אסולין</span>
                <br />
                <span className="text-white">משרד עורכי דין</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                חוזים, מקרקעין, תכנון ובנייה, משפט אזרחי
                <br />
                <span className="text-accent-metallic font-medium">ליווי משפטי מקצועי ומיומן</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="btn-primary text-center">
                  קבעו פגישה
                </Link>
                <Link href="/practice-areas" className="btn-secondary text-center">
                  תחומי התמחות
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                  alt="משרד עורכי דין מקצועי - עומר אסולין"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl hidden lg:block"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-metallic/20 rounded-full blur-2xl hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">תחומי התמחות</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              שירותים משפטיים מקיפים בכל תחומי החוזים, מקרקעין, תכנון ובנייה ומשפט אזרחי
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-metallic mx-auto mt-6 rounded-full"></div>
          </div>
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
                className="card-hover border border-gray-200 rounded-xl p-8 bg-white shadow-md hover:border-accent/30"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl text-accent-metallic">📋</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-accent hover:text-accent-metallic font-semibold inline-flex items-center gap-2 group"
                >
                  קרא עוד
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
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
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100">
                <div className="mb-4">
                  <div className="flex gap-1 text-accent mb-4">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-lg">{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">&quot;{testimonial.text}&quot;</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-accent to-accent-metallic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent-metallic/90"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl md:text-2xl text-primary-dark/90 mb-10 font-medium">
            קבעו פגישת ייעוץ ללא התחייבות
          </p>
          <Link href="/booking" className="btn-secondary inline-block text-lg px-8 py-4">
            קבעו פגישה עכשיו
          </Link>
        </div>
      </section>
    </main>
  );
}