import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Clock from "@/components/Clock";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raksmey Rat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Clock />
        {children}
        <Footer />
      </body>
    </html>
  );
}
