export default function SchemaMarkup() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lawfirm.co.il";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "עומר אסולין משרד עורכי דין",
    alternateName: "OMER ASULIN LAW OFFICE",
    description: "עומר אסולין משרד עורכי דין - חוזים, מקרקעין, תכנון ובנייה, משפט אזרחי",
    url: baseUrl,
    telephone: "052-5701166",
    email: "OMERASULIN1@GMAIL.COM",
    address: {
      "@type": "PostalAddress",
      streetAddress: "חנקין 17",
      addressLocality: "קרית אתא",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.8025",
      longitude: "35.1033",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    serviceType: [
      "חוזים",
      "מקרקעין",
      "תכנון ובנייה",
      "משפט אזרחי",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
