import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

// 1. Configure the Scraped Fonts
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({ 
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Virtual Coffee | Home Barista Education",
  description: "Master the art of espresso in 5 days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}