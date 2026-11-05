import type { Metadata, Viewport } from "next";
import { siteUrl, siteName, siteDescription } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} | The Smith Family Story`,
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Mary Smith" }],
  creator: "Mary Smith",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [{
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Three Stories, One Family — Presented by Mary Smith. Eileen, Mary and Christy.",
    }],
  },
};

export const viewport: Viewport = { themeColor: "#f8f6f1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-IE"><body>{children}</body></html>;
}
