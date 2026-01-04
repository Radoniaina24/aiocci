import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIOCCI - African Indian Ocean",
  description:
    "The African Indian Ocean Chamber of Commerce & Industry (AIOCCI) is an independent business platform dedicated to strengthening trade, investment, and economic cooperation between Africa and the Indian Ocean region.",

  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {" "}
        <NextIntlClientProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
