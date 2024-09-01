import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "./layoutWrapper";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Cindy's Website",
  description: "Welcome to Cindy's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
