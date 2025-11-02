import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaptchaProvider from "@/components/CaptchaProvider";
import SchemaMarkup from "@/components/SchemaMarkup";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "עורך דין נדל״ן | משרד עורכי דין מקצועי",
  description: "משרד עורכי דין המתמחה בדיני נדל״ן - ליווי עסקאות, פרויקטים, חוזי שכירות ומיסוי מקרקעין",
  viewport: "width=device-width, initial-scale=1",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-hebrew antialiased bg-white text-primary">
        <SchemaMarkup />
        <Analytics />
        <CaptchaProvider>
          <Header />
          {children}
          <Footer />
        </CaptchaProvider>
      </body>
    </html>
  );
}
