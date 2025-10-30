import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const blogPosts: Record<string, { title: string; date: string; category: string; content: string }> = {
  "real-estate-tax-guide": {
    title: "מדריך מקיף למס רכישה ומס שבח",
    date: "2024-01-15",
    category: "מיסוי",
    content: `
      <p>מס רכישה ומס שבח הם שני מסים מרכזיים בעסקאות נדל״ן בישראל. במאמר זה נסביר מה כל מס כולל וכיצד הוא מחושב.</p>
      
      <h2>מס רכישה</h2>
      <p>מס רכישה מוטל על רוכש הנכס. שיעור המס תלוי בגובה העסקה ובמעמד הרוכש (בן זוג, רוכש ראשון וכו׳).</p>
      
      <h2>מס שבח</h2>
      <p>מס שבח מוטל על המוכר כאשר יש רווח הון מהמכירה. קיימים פטורים שונים למס שבח, כגון דירה אחת.</p>
      
      <h2>טיפים חשובים</h2>
      <ul>
        <li>מומלץ להתייעץ עם עורך דין לפני החתימה על החוזה</li>
        <li>יש לבדוק אם קיימים פטורים רלוונטיים</li>
        <li>תכנון מס נכון יכול לחסוך כסף רב</li>
      </ul>
    `,
  },
  "pre-purchase-checks": {
    title: "בדיקות חשובות לפני רכישת נכס",
    date: "2024-01-10",
    category: "עסקאות",
    content: `
      <p>רכישת נכס היא אחת ההשקעות הגדולות ביותר בחיים. לפני החתימה על החוזה, חשוב לבצע בדיקות מקיפות.</p>
      
      <h2>בדיקת זכויות</h2>
      <p>וודאו שהמוכר הוא הבעלים הרשום של הנכס ושאין שעבודים או הגבלות על הנכס.</p>
      
      <h2>בדיקת מצב פיזי</h2>
      <p>הזמינו מהנדס בניין לבדיקת מצב הנכס, זיהוי ליקויים ואבחון בעיות פוטנציאליות.</p>
      
      <h2>בדיקת תשלומים</h2>
      <p>וודאו שאין חובות ארנונה, מים, חשמל או תשלומים אחרים על הנכס.</p>
    `,
  },
  "lease-agreement-essentials": {
    title: "מה חשוב לכלול בחוזה שכירות?",
    date: "2024-01-05",
    category: "שכירות",
    content: `
      <p>חוזה שכירות מקצועי הוא הבסיס ליחסים תקינים בין משכיר לשוכר. במאמר זה נפרט את הסעיפים החשובים ביותר.</p>
      
      <h2>פרטי הצדדים</h2>
      <p>וודאו שכל הפרטים המלאים של שני הצדדים מופיעים בחוזה, כולל תעודת זהות וכתובת.</p>
      
      <h2>תקופת השכירות</h2>
      <p>פרטו את תאריך התחלה וסיום בצורה ברורה, ואת תנאי הארכה או ביטול.</p>
      
      <h2>דמי השכירות</h2>
      <p>ציינו את הסכום המדויק, תאריך התשלום, ואמצעי התשלום המקובלים.</p>
    `,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  if (!post) return { title: "מאמר לא נמצא" };
  
  return {
    title: `${post.title} | בלוג`,
    description: post.content.replace(/<[^>]*>/g, "").substring(0, 160),
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container-custom max-w-4xl">
        <Link href="/blog" className="text-accent hover:text-accent-dark mb-6 inline-block">
          ← חזרה למאמרים
        </Link>
        
        <article>
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-accent font-medium">{post.category}</span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}
