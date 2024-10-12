import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rise - Dollar Investments that help you grow.",
  description: "Rise - Dollar Investments that help you grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
