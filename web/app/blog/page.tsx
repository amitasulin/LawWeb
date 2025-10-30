import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מאמרים וחדשות | משרד עורכי דין נדל״ן",
  description: "מאמרים מקצועיים ועדכונים משפטיים בתחום הנדל״ן",
};

const blogPosts = [
  {
    slug: "real-estate-tax-guide",
    title: "מדריך מקיף למס רכישה ומס שבח",
    excerpt: "כל מה שצריך לדעת על חישוב מס רכישה ומס שבח בעסקאות נדל״ן",
    date: "2024-01-15",
    category: "מיסוי",
  },
  {
    slug: "pre-purchase-checks",
    title: "בדיקות חשובות לפני רכישת נכס",
    excerpt: "רשימת בדיקות חיוניות שכל רוכש נכס צריך לבצע לפני החתימה על החוזה",
    date: "2024-01-10",
    category: "עסקאות",
  },
  {
    slug: "lease-agreement-essentials",
    title: "מה חשוב לכלול בחוזה שכירות?",
    excerpt: "פירוט הסעיפים החשובים ביותר בכל חוזה שכירות",
    date: "2024-01-05",
    category: "שכירות",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen py-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">מאמרים וחדשות</h1>
        <p className="text-xl text-gray-600 mb-12">
          עדכונים ומאמרים מקצועיים בתחום הנדל״ן והמשפט
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-accent font-medium">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-accent hover:text-accent-dark font-medium"
                >
                  קרא עוד →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
