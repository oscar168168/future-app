import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Clock from "@/components/Clock";
import { Footer } from "@/components/Footer";

// const poppins = Poppins({
//   weight: ["200", "300", "400", "500"],
//   subsets: ["latin"],
// });

const jakata = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600",],
})

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
      <body className={jakata.className}>
        <Clock />
        {children}
        <Footer />
      </body>
    </html>
  );
}
