import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";
import Banner1Footer from "./components/Banner1Footer";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner4 from "./components/Banner4";
import Banner5 from "./components/Banner5";
import Banner6 from "./components/Banner6";
import Banner7 from "./components/Banner7";
import Banner7Footer from "./components/Banner7Footer";
import Footer from "./components/Footer";

const Banner1 = dynamic(() => import("./components/Banner1"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner1 />
      <Banner1Footer />
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <Banner5 />
      <Banner6 />
      <Banner7 />
      <Banner7Footer />
      <Footer />
    </div>
  );
}
