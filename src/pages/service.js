import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section1 from "../components/Services/section1";
import Section2 from "../components/Services/section2";
import Section3 from "../components/Services/section3";

export default function Service() {
  return (
    <div>
      <Navbar />
      <main>
        <Section1 />
        <Section2 />
        <Section3/>
      </main>
      <Footer />
    </div>
  );
}
