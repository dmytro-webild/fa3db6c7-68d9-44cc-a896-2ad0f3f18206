import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Club Alda Hotel | Lapta Retreat',
  description: 'Discover Club Alda Hotel, a cozy retreat in Lapta surrounded by mountains, near water parks and beaches.',
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

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
