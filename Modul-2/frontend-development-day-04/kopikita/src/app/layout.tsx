import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playFairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: "KopiKita",
  description: "Your everyday coffe companion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playFairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
