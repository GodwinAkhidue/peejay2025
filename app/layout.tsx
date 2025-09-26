import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PEEJAY 2025",
  description: "The Wedding of the century",
  icons: {
    icon: '/favicon.ico', // or .png, .jpg etc.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
