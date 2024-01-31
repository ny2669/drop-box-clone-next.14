import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drop-box-clone",
  description: "Welcome to Drop-box-clone build with Next.js 14, Tailwind css",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider> 
    <html lang="en">
      <body className={inter.className}>
       
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

<Header/>
            {children}

          
          </ThemeProvider>
        </body>
    </html>
      </ClerkProvider>
  );
}
