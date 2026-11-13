import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApexiveAI Smart QR",
  description: "Enterprise QR generation, management and analytics platform."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
