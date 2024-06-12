/* eslint-disable @next/next/no-page-custom-font */
"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer"
import { Providers } from "./providers";
import Navbarconst from "../components/Navbar";
import { NextUIProvider} from '@nextui-org/react'




export default function RootLayout({ children }) {



  return (
    <html lang="en" className="general">

    <body>
      <NextUIProvider>
        <Navbarconst/>
        {children}
         <Footer/> 
     </NextUIProvider>
    </body>
  </html>
  );
}
