import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section1 from "../components/AboutUs/section1";
import Section2 from "../components/AboutUs/section2";
import Section3 from "../components/AboutUs/section3";
import Section4 from "../components/AboutUs/section4";
import Section5 from "../components/AboutUs/section5";

export default function About() {
  return (
    <div>
      <Navbar />
      <main>
        <Section1 />
        <Section2 />
        <Section3/>
        <Section4 />
        <Section5/>
      </main>
      <Footer />
    </div>
  );
}
