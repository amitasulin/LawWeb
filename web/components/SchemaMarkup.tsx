export default function SchemaMarkup() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lawfirm.co.il";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "משרד עורכי דין נדל״ן",
    description: "משרד עורכי דין המתמחה בדיני נדל״ן - ליווי עסקאות, פרויקטים, חוזי שכירות ומיסוי מקרקעין",
    url: baseUrl,
    telephone: "03-1234567",
    email: "info@lawfirm.co.il",
    address: {
      "@type": "PostalAddress",
      streetAddress: "רחוב הדוגמה 10",
      addressLocality: "תל אביב",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.0853",
      longitude: "34.7818",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    serviceType: [
      "עסקאות נדל״ן",
      "ליווי פרויקטים",
      "חוזי שכירות",
      "מיסוי מקרקעין",
      "ליטיגציה נדל״נית",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
