import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taski | Verified Digital Rewards Platform",
  description:
    "Taski connects users with verified digital tasks, surveys, and promotional opportunities from trusted partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}