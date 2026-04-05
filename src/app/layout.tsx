import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meisterwerk-berlin.de"),
  title: {
    default: "Meisterwerk Berlin – Rollladen, Markisen & Sonnenschutz Meisterbetrieb",
    template: "%s | Meisterwerk Berlin",
  },
  description:
    "Ihr Meisterbetrieb für Rollläden, Holz-Rollläden, Markisen, Jalousien und Sonnenschutz in Berlin. Reparatur, Motorumbau und Montage – schnell, fair und mit eigenen Monteuren. Jetzt anrufen: 030 66 77 44 63",
  keywords: [
    "Rollladen Berlin",
    "Rollläden Berlin",
    "Holz-Rollläden Berlin",
    "Rollladen Reparatur Berlin",
    "Rollladen Motor tauschen Berlin",
    "Markisen Berlin",
    "Jalousien Berlin",
    "Sonnenschutz Berlin",
    "Rollladen Notdienst Berlin",
    "Rollladen Meisterbetrieb Berlin",
    "Handwerker Berlin Süd",
  ],
  authors: [{ name: "Meisterwerk Berlin" }],
  creator: "Meisterwerk Berlin",
  publisher: "Meisterwerk Berlin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://meisterwerk-berlin.de",
    siteName: "Meisterwerk Berlin",
    title: "Meisterwerk Berlin – Rollladen, Markisen & Sonnenschutz",
    description:
      "Meisterbetrieb für Rollläden, Markisen und Sonnenschutz in Berlin. Reparatur, Motorumbau, Montage. Eigene Monteure, faire Preise, oft noch am selben Tag vor Ort.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Meisterwerk Berlin – Rollladen Meisterbetrieb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meisterwerk Berlin – Rollladen, Markisen & Sonnenschutz",
    description:
      "Meisterbetrieb für Rollläden, Markisen und Sonnenschutz in Berlin. Schnell, fair, eigene Monteure.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://meisterwerk-berlin.de/#business",
  name: "Meisterwerk Berlin",
  image: "https://meisterwerk-berlin.de/logo.png",
  logo: "https://meisterwerk-berlin.de/logo.png",
  url: "https://meisterwerk-berlin.de",
  telephone: "+49-30-66774463",
  email: "service@meisterwerk-berlin.de",
  priceRange: "€€",
  description:
    "Meisterbetrieb für Rollläden, Holz-Rollläden, Markisen, Jalousien und Sonnenschutz in Berlin. Reparatur, Motorumbau und Montage mit eigenen Monteuren.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Britzer Damm 123",
    postalCode: "12347",
    addressLocality: "Berlin",
    addressRegion: "BE",
    addressCountry: "DE",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Berlin",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rollladen Reparatur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rollladen Motortausch & Umbau auf Elektroantrieb",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Holz-Rollläden Montage",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Markisen Montage und Reparatur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jalousien und Sonnenschutz",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${plusJakartaSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
