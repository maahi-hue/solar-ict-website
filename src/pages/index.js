import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";
import Banner1Footer from "../components/Homepage/Banner1Footer";
import Banner2 from "../components/Homepage/Banner2";
import Banner3 from "../components/Homepage/Banner3";
import Banner4 from "../components/Homepage/Banner4";
import Banner5 from "../components/Homepage/Banner5";
import Banner7 from "../components/Homepage/Banner7";
import Banner7Footer from "../components/Homepage/Banner7Footer";
import Footer from "../components/Footer";

const Banner1 = dynamic(() => import("../components/Homepage/Banner1"), { ssr: false });
const Banner6 = dynamic(() => import("../components/Homepage/Banner6"), { ssr: false });

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
