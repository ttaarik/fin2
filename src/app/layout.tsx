import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";



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



      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
