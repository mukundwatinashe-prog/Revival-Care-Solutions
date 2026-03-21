import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1f7aa8' },
    { media: '(prefers-color-scheme: dark)', color: '#134a6b' },
  ],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
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
