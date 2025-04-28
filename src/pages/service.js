import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section1 from "../components/Services/section1";
import Section2 from "../components/Services/section2";
import Banner7Footer from "@/components/Banner7Footer";

export default function Service() {
  return (
    <div>
      <Navbar />
      <main>
        <Section1 />
        <Section2 />
        <Banner7Footer/>
      </main>
      <Footer />
    </div>
  );
}
