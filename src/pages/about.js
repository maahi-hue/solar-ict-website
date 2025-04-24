import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section1 from "../components/AboutUs/section1";
import Section2 from "../components/AboutUs/section2";

export default function About() {
  return (
    <div>
      <Navbar />
      <main>
        <Section1 />
        <Section2/>
      </main>
      <Footer />
    </div>
  );
}
