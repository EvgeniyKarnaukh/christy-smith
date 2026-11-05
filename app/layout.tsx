import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Three Stories, One Family | Eileen, Mary & Christy Smith",
  description: "Presented by Mary Smith. The stories of Eileen Smith, Mary Smith and Christopher (Christy) Smith, remembered through family photographs and Mary's account.",
  openGraph: {
    title: "Three Stories, One Family",
    description: "Presented by Mary Smith. Remembering Eileen, Mary and Christopher (Christy) Smith.",
    type: "website",
    locale: "en_IE",
  },
  twitter: { card: "summary_large_image", title: "Three Stories, One Family", description: "Presented by Mary Smith. Remembering Eileen, Mary and Christy Smith." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
