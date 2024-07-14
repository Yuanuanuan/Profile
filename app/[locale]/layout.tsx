import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundLight from "@/components/BackgroundLight";
import { ReactElement } from "react";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kao_TzuYuan",
  description: "Introduce about Kao TzuYuan",
};

type RootLayoutProps = { children: ReactElement; params: { locale: string } };

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <BackgroundLight />
        {children}
      </body>
    </html>
  );
}
