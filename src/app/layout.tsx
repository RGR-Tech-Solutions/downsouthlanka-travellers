import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.downsouthlankatravellers.gleeze.com"),
  title: "Downsouth Lanka Travellers | Premier Sri Lanka Travel Agency",
  description: "Experience the best of Sri Lanka with Downsouth Lanka Travellers. Custom tours, luxury transport, and unforgettable adventures across the island.",
  verification: {
    google: "-TmsnYnLOd82w3huA4PDa9vQ9taQm4hzcj47clTbZcM",
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { InquiryModalProvider } from "@/context/InquiryModalContext";
import InquiryModal from "@/components/InquiryModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <InquiryModalProvider>
          {children}
          <WhatsAppButton />
          <ScrollToTop />
          <InquiryModal />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
