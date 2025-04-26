import Image from "next/image";
import facebook from "../../public/facebook.png";
import instagram from "../../public/social-media.png";
import linkedin from "../../public/linkedin.png";
import twitter from "../../public/twitter.png";
import chat from "../../public/chat.png";

const Footer = () => {
  return (
    <div className="bg-[#03091D] py-20 px-6 text-center">
      <footer className="flex flex-col sm:flex-row gap-8 sm:gap-20 text-neutral-content max-w-6xl mx-auto">
        <nav className="w-full sm:w-1/4">
          <h6 className="footer-title inconsolata-regular">SOLAR-ICT</h6>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem
          </p>
          <div className="grid grid-cols-4 mx-auto  gap-4 w-40 mt-4">
            <Image src={facebook} alt="Facebook" />
            <Image src={instagram} alt="Instagram" />
            <Image src={linkedin} alt="LinkedIn" />
            <Image src={twitter} alt="Twitter" />
          </div>
        </nav>
        <nav className="w-full sm:w-1/4 flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">How We Serve</a>
          <a className="link link-hover">Who Do We Serve</a>
        </nav>
        <nav className="w-full sm:w-1/4 flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Digital Transformation</a>
          <a className="link link-hover">Cloud Services</a>
          <a className="link link-hover">
            Enterprise Network & Security Solutions
          </a>
          <a className="link link-hover">Cybersecurity</a>
          <a className="link link-hover">IT Infrastructure Virtualization</a>
        </nav>
        <nav className="w-full sm:w-1/4 flex flex-col">
          <h6 className="footer-title"></h6>
          <a className="link link-hover">Digital Marketing</a>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">DevOps</a>
          <a className="link link-hover">IT Managed & Consulting Services</a>
        </nav>
      </footer>

      <div className="flex justify-center sm:justify-end mt-10 max-w-6xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-white">
          <Image className="w-8 mt-2 ml-2" src={chat} alt="Chat Icon" />
        </div>
      </div>

      <p className="mt-10 text-white text-center text-sm sm:text-base">
        Copyright © https://solar-ict.com
      </p>
    </div>
  );
};

export default Footer;
