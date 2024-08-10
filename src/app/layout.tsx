import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* not working */}
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
