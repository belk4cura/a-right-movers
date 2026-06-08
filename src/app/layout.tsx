import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A Right Movers | Professional Moving Services in Atlanta & Southeast",
  description:
    "A Right Movers provides reliable local and long-distance moving services in Atlanta, Roswell, Alpharetta & the Southeast US. Get a free quote today. Licensed & insured. Call (770) 864-0955.",
  keywords:
    "moving company Atlanta, movers Roswell GA, long distance movers, local movers, packing services, commercial moving, Southeast movers",
  openGraph: {
    title: "A Right Movers | Professional Moving Services",
    description:
      "Reliable moving services in Atlanta & the Southeast. Free quotes, licensed & insured, no hidden fees.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org LocalBusiness markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "A Right Movers",
              legalName: "JBM Group dba A Right Movers",
              url: "https://arightmovers.com",
              telephone: "+17708640955",
              email: "jameshbelk@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10800 Ste 208-640 Alpharetta Hwy",
                addressLocality: "Roswell",
                addressRegion: "GA",
                postalCode: "30076",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 34.0234,
                  longitude: -84.3616,
                },
                geoRadius: "500 mi",
              },
              serviceType: [
                "Local Moving",
                "Long-Distance Moving",
                "Commercial Moving",
                "Packing Services",
                "Storage Solutions",
              ],
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "07:00",
                closes: "20:00",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
