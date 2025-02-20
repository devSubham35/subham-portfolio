import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Outfit } from 'next/font/google'; // Import Outfit font

// Load Outfit font
const outfit = Outfit({
  subsets: ['latin'], // You can customize the subsets if needed
  weight: ['400', '500', '600', '700', '800', '900'], // Define font weights you want to use
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className={outfit.className}> {/* Apply Outfit font globally */}
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
