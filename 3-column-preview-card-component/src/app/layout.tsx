import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexend_deca = Lexend_Deca({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3-column preview card component",
  description:
    "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend_deca.className}>{children}</body>
    </html>
  );
}
