import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans"
})

export const metadata: Metadata = {
  title: "Bagas Dhitya Taufiqqi - Personal Website",
  description: "Personal website of Bagas Dhitya Taufiqqi - educator and full stack developer with expertise in Next.js, Express.js, PostgreSQL, and cloud platforms.",
  icons: {
    icon: "./assets/b_letter.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
