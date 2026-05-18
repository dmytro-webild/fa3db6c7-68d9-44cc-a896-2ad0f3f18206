import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import Tag from "@/tag/Tag";



export const metadata: Metadata = {
  title: "Club Alda Hotel | Lapta Retreat",
  description: "Discover Club Alda Hotel, a cozy retreat in Lapta surrounded by mountains, near water parks and beaches.",
  openGraph: {
    "title": "Club Alda Hotel",
    "description": "Stay in Lapta at the mountain-side Club Alda Hotel.",
    "siteName": "Club Alda",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Club Alda Hotel",
    "description": "Mountain-side comfort in Lapta."
  },
};


const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        <Tag />
</body>
      </ServiceWrapper>
    </html>
  );
}
