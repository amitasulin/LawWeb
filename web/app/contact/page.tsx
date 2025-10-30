"use client";

import { useState, FormEvent } from "react";
import type { Metadata } from "next";

export default function Contact() {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
                <p className="text-gray-700">רחוב הדוגמה 10, תל אביב</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">טלפון</h3>
                <a href="tel:031234567" className="text-accent hover:text-accent-dark">
                  03-1234567
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">פקס</h3>
                <p className="text-gray-700">03-1234568</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">אימייל</h3>
                <a href="mailto:info@lawfirm.co.il" className="text-accent hover:text-accent-dark">
                  info@lawfirm.co.il
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
                    href="https://wa.me/972501234567"
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

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">מפה</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
