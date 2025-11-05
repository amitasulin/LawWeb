"use client";

import { useState, FormEvent } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha() || { executeRecaptcha: null };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      let recaptchaToken = "";
      if (executeRecaptcha && typeof executeRecaptcha === "function") {
        try {
          recaptchaToken = await executeRecaptcha("contact_form");
        } catch (error) {
          // If reCAPTCHA fails, continue without it (for development)
          console.warn("reCAPTCHA error:", error);
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">יצירת קשר</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">שלחו לנו הודעה</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  אימייל *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  נושא *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  הודעה *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
                  ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
                  שגיאה בשליחת ההודעה. נסו שוב מאוחר יותר או צרו קשר בטלפון.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "שולח..." : "שלח הודעה"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">פרטי יצירת קשר</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">כתובת המשרד</h3>
                <p className="text-gray-700">חנקין 17, קרית אתא</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">טלפון</h3>
                <a href="tel:0525701166" className="text-accent hover:text-accent-dark">
                  052-5701166
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">אימייל</h3>
                <a href="mailto:OMERASULIN1@GMAIL.COM" className="text-accent hover:text-accent-dark">
                  OMERASULIN1@GMAIL.COM
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">שעות פעילות</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>ראשון - חמישי: 09:00 - 18:00</li>
                  <li>שישי: 09:00 - 13:00</li>
                  <li>שבת: סגור</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">קישורים מהירים</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/972525701166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-green-500 hover:bg-green-600"
                  >
                    וואטסאפ
                  </a>
                  <a
                    href="/booking"
                    className="btn-secondary"
                  >
                    קבעו פגישה
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-semibold mb-3">מיקום המשרד</h3>
                <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-300 shadow-md">
                  <iframe
                    src="https://www.google.com/maps?q=32.8025,35.1033&hl=he&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="מיקום המשרד - חנקין 17, קרית אתא"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=32.8025,35.1033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark inline-flex items-center gap-1"
                  >
                    פתח ב-Google Maps →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
