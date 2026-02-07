import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 md:py-32 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80 z-10"></div>
          <div className="absolute inset-0 opacity-40">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="גורדי שחקים מודרניים"
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient">עומר אסולין</span>
                <br />
                <span className="text-white">משרד עורכי דין</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                חוזים, מקרקעין, תכנון ובנייה, משפט אזרחי
                <br />
                <span className="text-accent font-medium">ליווי משפטי מקצועי ומיומן</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  יצירת קשר
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
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "עסקאות מכר ורכישה",
                description: "ליווי משפטי מלא בעסקאות רכישה ומכירה של נכסים",
                href: "/practice-areas/transactions",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "ליווי פרויקטים",
                description: "ייעוץ משפטי מקיף ליזמים וקבלנים בפרויקטים מורכבים",
                href: "/practice-areas/projects",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "חוזי שכירות",
                description: "ניסוח ובדיקת חוזי שכירות למשכירים ושוכרים",
                href: "/practice-areas/leasing",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "מיסוי מקרקעין",
                description: "ייעוץ מס מקיף ותכנון מס עבור עסקאות נדל״ן",
                href: "/practice-areas/tax",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "ליטיגציה נדל״נית",
                description: "ייצוג בבתי משפט ובתי דין בענייני נדל״ן",
                href: "/practice-areas/litigation",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
              {
                title: "פינוי בינוי",
                description: "ליווי משפטי בפרויקטי פינוי בינוי ותמ״א 38",
                href: "/practice-areas/renewal",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="card-hover border border-gray-200 rounded-xl p-8 bg-white shadow-md hover:border-accent/30"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-4 text-accent">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-accent hover:text-accent-light font-semibold inline-flex items-center gap-2 group"
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
                name: "מיכאל רוזן",
                role: "יזם נדל״ן, תל אביב",
                text: "עומר ליווה אותנו בפרויקט פינוי בינוי. הוא היה מקצועי וזמין, ועזר לנו להתמודד עם האתגרים המשפטיים שעלו במהלך הפרויקט. התרשמתי מהגישה המסודרת והמקצועית שלו.",
              },
              {
                name: "רחל מזרחי",
                role: "רוכשת דירה, קרית אתא",
                text: "קניתי דירה ראשונה והליווי המשפטי של עומר עזר לי מאוד. הוא הסביר לי את התהליך, בדק את המסמכים, והעסקה עברה בצורה תקינה. הרגשתי שיש לי מישהו שאפשר לסמוך עליו.",
              },
              {
                name: "יוסי אברהם",
                role: "משקיע נדל״ן, חיפה",
                text: "עבדתי עם עומר על מספר עסקאות. הוא עזר לי להבין את ההיבטים המשפטיים והמסיים של העסקאות, וזה עזר לי לקבל החלטות מושכלות. מקצועי וזמין.",
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
                <p className="text-gray-700 mb-6 leading-relaxed text-base">&quot;{testimonial.text}&quot;</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent-light/90"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl md:text-2xl text-primary mb-10 font-medium">
            יצירת קשר לייעוץ ראשוני ללא התחייבות
          </p>
          <Link href="/contact" className="btn-secondary inline-block text-lg px-8 py-4">
            יצירת קשר עכשיו
          </Link>
        </div>
      </section>
    </main>
  );
}