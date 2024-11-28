import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelas",
  description: "Kemudahan belajar secara digital!",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/k.ico" sizes="any" />
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
