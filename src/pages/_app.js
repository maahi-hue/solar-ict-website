import "@/styles/globals.css";
import { Inconsolata, Roboto } from "next/font/google";

// Roboto for general text
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

// Inconsolata for monospace usage
const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inconsolata",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} ${inconsolata.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
