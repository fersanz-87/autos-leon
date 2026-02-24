import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

/* ─── Fonts ─── */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

/* ─── Metadata ─── */
export const metadata: Metadata = {
  title: "AutosLeón | Venta de Autos Usados en León, Guanajuato",
  description:
    "Encuentra tu auto usado ideal en León, Gto. Más de 200 vehículos verificados con garantía y financiamiento. Nissan, Toyota, Volkswagen, Mazda y más.",
  keywords:
    "autos usados león, carros seminuevos guanajuato, agencia de autos león, autos usados guanajuato, comprar auto usado león",
  openGraph: {
    title: "AutosLeón | Venta de Autos Usados en León, Guanajuato",
    description:
      "Encuentra tu auto usado ideal en León, Gto. Más de 200 vehículos verificados con garantía y financiamiento.",
    url: "https://autosleon.vercel.app",
    siteName: "AutosLeón",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "AutosLeón - Venta de Autos Usados en León, Guanajuato",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutosLeón | Autos Usados en León, Gto.",
    description:
      "Más de 200 vehículos verificados con garantía y financiamiento disponible.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── JSON-LD Structured Data ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "AutosLeón",
  description:
    "Venta de autos usados verificados con garantía en León, Guanajuato.",
  url: "https://autosleon.vercel.app",
  telephone: "+52 477 123 4567",
  email: "ventas@autosleon.mx",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blvd. Adolfo López Mateos 1234, Col. Centro",
    addressLocality: "León",
    addressRegion: "Guanajuato",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.125,
    longitude: -101.6859,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: [
    "https://facebook.com/autosleon",
    "https://instagram.com/autosleon",
    "https://tiktok.com/@autosleon",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sora.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[family-name:var(--font-dm-sans)] antialiased">
        {children}
      </body>
    </html>
  );
}
