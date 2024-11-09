import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css"; 
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Mainsection from "./components/mainsection"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rabia Khalid - Portfolio",
  description: "Rabia's portfolio showcasing development and design work",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Mainsection/>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
