import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section1 from "../components/ContactUs/section1";
import Section2 from "../components/ContactUs/section2";
import Banner7Footer from "../components/Banner7Footer";

export default function Contact() {
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
