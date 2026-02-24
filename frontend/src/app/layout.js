import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layout/MainLoyout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kono Banking Application",
  description: "A Bank for childrens and Programmar",
};

const PopinsFont = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${PopinsFont.variable} `} suppressHydrationWarning>
        <MainLayout>{children} </MainLayout>
      </body>
    </html>
  );
}
