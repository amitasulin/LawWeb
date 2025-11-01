"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function CalendlyWidget({ url }: { url: string }) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.Calendly && url) {
      const element = document.getElementById("calendly-inline-widget");
      if (element) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: element,
        });
      }
    }
  }, [url]);

  if (!url) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <p className="text-gray-600 mb-4">
          אנא הגדירו את כתובת ה-Calendly ב-NEXT_PUBLIC_CALENDLY_URL
        </p>
        <p className="text-sm text-gray-500">
          לדוגמה: https://calendly.com/your-username/meeting
        </p>
      </div>
    );
  }

  return (
    <div className="calendly-inline-widget-container">
      <div
        id="calendly-inline-widget"
        style={{ minWidth: "320px", height: "630px" }}
        className="calendly-inline-widget"
      />
    </div>
  );
}
