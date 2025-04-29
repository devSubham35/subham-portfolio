'use client'
import "@/styles/globals.css";
import { Toaster } from 'sonner'
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from 'next/font/google'; // Import Outfit font

// Load Outfit font
const outfit = Poppins({
  subsets: ['latin'], // You can customize the subsets if needed
  weight: ['400', '500', '600', '700', '800', '900'], // Define font weights you want to use
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className={outfit.className}> {/* Apply Outfit font globally */}
        <Toaster position="bottom-left" richColors  />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
