import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { TooltipProvider } from "@/components/ui/tooltip";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>

      <body>
        <TooltipProvider>
          <Providers>
          {children}
        </Providers>
        </TooltipProvider>
      </body>
    </html>
  );
}
