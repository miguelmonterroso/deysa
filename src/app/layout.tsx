import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/shared/banner/Banner";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Deysa Ingeniería",
  description: "Deysa Ingeniería Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className}  antialiased`}
      >
        <Banner>
          <div className="flex justify-center md:justify-evenly items-center w-full flex-wrap text-center md:text-left md: gap-7 lg:gap-20">
            <p className="font-bold"><a href="tel:+524422749486"><span className="md:hidden">📱Móvil:</span>+52 44 22 74 94 86</a></p>
            <p className="font-light hidden md:block">Hablemos sobre tu proyecto y encuentra la mejor solución para tu industria.</p>
          </div>
        </Banner>
        <Navbar/>
        {children} 
        <Footer/>
      </body>
    </html>
  );
}
