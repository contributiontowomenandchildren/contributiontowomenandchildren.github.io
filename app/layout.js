import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Contribution To Women And Children",
  description:
    "Supporting the rights, well-being, and empowerment of women and children through education, health, and community initiatives.",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
