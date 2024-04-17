import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
const Footer = dynamic(() => import("@/components/Footer/Footer"));

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "FlashByte - The Perfect Computer Store",
    template: "FlashByte - %s",
  },
  description:
    "FlashByte is a company that builds gaming and productivity PCs. We have a great deal of experience in building computers, and we also work with our customers to ensure that they get the best possible PC for their needs.",
  creator: "Chetan Seervi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={`scroll-smooth`}>
        {/* Add this (sm:px-[5vw] py-5 px-2) class to every section on the page  */}

        <body className={`${inter.className} m-0 min-h-screen`}>
          <Providers>
            <Header />
            <main className={``}>{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
