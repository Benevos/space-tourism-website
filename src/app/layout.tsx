import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "../scss/globals.scss";
import StoreProvider from "@/contexts/StoreProvider";

const barlow = Barlow({ weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`antialiased ${barlow.className}`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
