import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Revival Care Solutions | Compassionate Home Care Services",
    template: "%s | Revival Care Solutions"
  },
  description: "Providing compassionate, professional home care services for seniors. Personal care, companionship, medication management, and more. Available 24/7.",
  keywords: ["home care", "senior care", "elderly care", "personal care", "companionship", "caregiver services", "in-home care", "assisted living alternative"],
  authors: [{ name: "Revival Care Solutions" }],
  creator: "Revival Care Solutions",
  publisher: "Revival Care Solutions",
  metadataBase: new URL("https://revivalcare.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revivalcare.com",
    siteName: "Revival Care Solutions",
    title: "Revival Care Solutions | Compassionate Home Care Services",
    description: "Providing compassionate, professional home care services for seniors. Personal care, companionship, medication management, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Revival Care Solutions - Compassionate Home Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revival Care Solutions | Compassionate Home Care Services",
    description: "Providing compassionate, professional home care services for seniors.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
