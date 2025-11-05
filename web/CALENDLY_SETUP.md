# מדריך הגדרת Calendly - צעד אחר צעד

## שלב 1: הרשמה/התחברות ל-Calendly

1. לך ל-[https://calendly.com](https://calendly.com)
2. לחץ על **"Get started for free"** (או "Sign in" אם יש לך כבר חשבון)
3. הירשם עם Gmail שלך: `OMERASULIN1@GMAIL.COM`

## שלב 2: יצירת Event Type (סוג פגישה)

1. אחרי ההתחברות, לחץ על **"Event Types"** בתפריט השמאלי
2. לחץ על כפתור **"Create"** (בפינה הימנית העליונה)
3. בחר **"One-on-One"** (פגישה אחד על אחד)
4. מלא את הפרטים:
   - **Name**: "ייעוץ ראשוני" (או כל שם שתרצה)
   - **Duration**: בחר 30 דקות (או כמה שתרצה)
   - **Location**: בחר "Phone call" או "In-person meeting"
5. לחץ **"Next"** → **"Create"**

## שלב 3: קבלת כתובת ה-Embed

1. אחרי שיצרת את ה-Event Type, תועבר לעמוד שלו
2. לחץ על כפתור **"Share"** (בחלק העליון של העמוד)
3. בחר **"Add to website"**
4. בחר **"Inline embed"**
5. תראה טקסט שכתב בו: `https://calendly.com/your-username/event-name`
6. **העתק את הכתובת המלאה**

## שלב 4: הוספה לקובץ .env.local

1. פתח את הקובץ `web/.env.local` בעורך טקסט
2. מצא את השורה: `# NEXT_PUBLIC_CALENDLY_URL=`
3. הסר את ה-`#` מהתחלה
4. הדבק את הכתובת שהעתקת, כך:
   ```
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/event-name
   ```
5. שמור את הקובץ

## שלב 5: הפעלה מחדש

1. עצור את השרת (אם הוא רץ) - לחץ `Ctrl+C`
2. הפעל מחדש:
   ```bash
   cd web
   npm run dev
   ```
3. לך ל-[http://localhost:3000/booking](http://localhost:3000/booking)
4. אמור לראות את לוח ה-Calendly!

## בעיות? פתרונות:

### הכתובת לא עובדת?
- וודא שהסרת את ה-`#` מהתחלת השורה
- וודא שהכתובת מתחילה ב-`https://calendly.com/`
- וודא שאין רווחים מיותרים לפני או אחרי הכתובת

### לא רואה את ה-Calendly בעמוד?
- בדוק בקונסול של הדפדפן (F12) אם יש שגיאות
- וודא שהשרת הופעל מחדש אחרי שינוי .env.local
- נסה לרענן את הדף (Ctrl+R)

### צריך עזרה?
- צור קשר: 052-5701166
- או שלח אימייל: OMERASULIN1@GMAIL.COM

---

**טיפ**: אם אתה רוצה כמה סוגי פגישות (30 דקות, 60 דקות וכו'), צור Event Type נוסף לכל אחד והשתמש באותו תהליך.
