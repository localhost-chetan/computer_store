import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElitePC - The Perfect Computer Store",
  description:
    "ElitePC is a company that builds gaming and productivity PCs. They have a great deal of experience in building computers, and they work with their customers to ensure that they get the best possible PC for their needs.",
  creator: "Chetan Seervi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* Add this (sm:px-[5vw]) class to every section on the page  */}

        <body className={`${inter.className} m-0 min-h-screen`}>
          <Providers>
            <Header />
            <main className={`sm:px-[5vw] py-5 `}>{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
