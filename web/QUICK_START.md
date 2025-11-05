# 🚀 התחלה מהירה - Calendly

## הדרך המהירה ביותר:

### 1️⃣ הירשם ל-Calendly (2 דקות)
→ [לחץ כאן להירשם](https://calendly.com/signup)

### 2️⃣ צור Event Type (3 דקות)
1. לחץ על **"Event Types"** → **"Create"** → **"One-on-One"**
2. שם: `ייעוץ ראשוני`
3. משך: `30 דקות`
4. לחץ **"Create"**

### 3️⃣ קבל את הכתובת (1 דקה)
1. לחץ על **"Share"** → **"Add to website"** → **"Inline embed"**
2. **העתק את הכתובת** (נראית כך: `https://calendly.com/omer-asulin/30min`)

### 4️⃣ הוסף לקובץ (30 שניות)
1. פתח את `web/.env.local`
2. מצא: `# NEXT_PUBLIC_CALENDLY_URL=`
3. הסר את ה-`#` והדבק את הכתובת:
   ```
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/omer-asulin/30min
   ```

### 5️⃣ הפעל מחדש
```bash
# עצור את השרת (Ctrl+C)
npm run dev
```

### 6️⃣ בדוק
→ לך ל: [http://localhost:3000/booking](http://localhost:3000/booking)

---

**⏱️ זמן כולל: ~7 דקות**

---

למדריך מפורט יותר, ראה: `CALENDLY_SETUP.md`
