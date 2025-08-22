import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Providers from "./Providers";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tech Nova",
  description: "e-commerce gadget website",
  icons: {
    icon: "/techNova-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavBar />
          <Toaster />
          <div className="min-h-[calc(100vh-10rem)] w-11/12 mx-auto py-5">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
