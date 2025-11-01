# אתר עורך דין נדל״ן

אתר אינטרנט מקצועי לעורך דין המתמחה בדיני נדל״ן.

## התקנה

```bash
npm install
```

## הגדרת משתני סביבה

צרו קובץ `.env.local` והעתיקו את התוכן מ-`.env.example`:

```bash
cp .env.example .env.local
```

עדכנו את הערכים הבאים:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - מפתח אתר של Google reCAPTCHA
- `RECAPTCHA_SECRET_KEY` - מפתח סודי של Google reCAPTCHA
- `NEXT_PUBLIC_CALENDLY_URL` - כתובת ה-Calendly שלכם
- `NEXT_PUBLIC_GA_ID` - מזהה Google Analytics (אופציונלי)
- `NEXT_PUBLIC_GTM_ID` - מזהה Google Tag Manager (אופציונלי)
- `NEXT_PUBLIC_SITE_URL` - כתובת האתר המלאה

## הרצה

```bash
npm run dev
```

פתח [http://localhost:3000](http://localhost:3000) בדפדפן.

## בנייה לפרודקשן

```bash
npm run build
npm start
```

## תכונות

- ✅ עיצוב Responsive מלא (מובייל, טאבלט, דסקטופ)
- ✅ תמיכה ב-RTL לעברית
- ✅ טופס יצירת קשר עם reCAPTCHA
- ✅ אינטגרציה עם Calendly לקביעת פגישות
- ✅ SEO - Schema.org, sitemap.xml, robots.txt
- ✅ Google Analytics ו-Google Tag Manager
- ✅ נגישות AA

## עמודים

- `/` - עמוד בית
- `/about` - אודות
- `/practice-areas` - תחומי התמחות
- `/blog` - מאמרים וחדשות
- `/contact` - יצירת קשר
- `/booking` - קביעת פגישה
- `/privacy-policy` - מדיניות פרטיות
- `/terms` - תנאי שימוש

## שליחת אימיילים

כדי לשלוח אימיילים מטופס יצירת הקשר, יש להגדיר שירות אימייל:

### אפשרות 1: Resend
1. הירשמו ל-Resend.com
2. הוסיפו `RESEND_API_KEY` ו-`CONTACT_EMAIL` ל-`.env.local`
3. עדכנו את `/app/api/contact/route.ts` לשליחת אימיילים

### אפשרות 2: SendGrid
1. הירשמו ל-SendGrid.com
2. הוסיפו `SENDGRID_API_KEY` ו-`CONTACT_EMAIL` ל-`.env.local`
3. עדכנו את `/app/api/contact/route.ts` לשליחת אימיילים

## Deployment

האתר מותאם ל-Vercel:

```bash
npm install -g vercel
vercel
```

או פשוט חברו את ה-repository ל-Vercel דרך הממשק הגרפי.

## רישיון

כל הזכויות שמורות למשרד עורכי הדין.