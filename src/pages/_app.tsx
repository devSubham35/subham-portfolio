import "@/styles/globals.css";
import { Toaster } from 'sonner';
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from 'next/font/google'; // Import Outfit font
import { useEffect, useState } from "react";

// Load Outfit font
const outfit = Poppins({
  subsets: ['latin'], // You can customize the subsets if needed
  weight: ['400', '500', '600', '700', '800', '900'], // Define font weights you want to use
});

export default function App({ Component, pageProps }: AppProps) {
  // State to check if client-side rendering is complete
  const [isClient, setIsClient] = useState(false);

  // UseEffect hook to set the state on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render only when the app is fully hydrated (client-side)
  if (!isClient) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className={outfit.className}> {/* Apply Outfit font globally */}
        <Toaster position="bottom-left" richColors />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
