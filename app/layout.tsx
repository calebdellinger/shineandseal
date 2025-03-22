import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Shine & Seal",
  description:
    "The finest pressure washing and sealing services in the nation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <nav>
            <Navbar />
          </nav>
          {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
