import Image from "next/image";
import Link from "next/link";
import search from "../../public/search.png";
import globe from "../../public/globe.png";
import mail from "../../public/mail.png";
import phone from "../../public/phone.png";
import headset from "../../public/headset.png";
import help from "../../public/help.png";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#021526] h-40 flex-col items-center justify-center text-white">
      <div className="max-w-6xl inconsolata-regular mx-auto flex items-center justify-center">
        <div className="flex text-sm font-thin justify-between items-center flex-1 pt-2">
          <span className="flex gap-6">
            <div className="flex gap-2 items-center">
              <Image width="20" height="20" src={mail} alt="Mail" />
              <p>info@solar-ict.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image width="20" height="20" src={phone} alt="Phone" />
              <p>+41 21 561 53 15</p>
            </div>
          </span>
          <span className="flex gap-6">
            <div className="flex gap-2 items-center">
              <Image width="20" height="20" src={headset} alt="Support" />
              <p>Support</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image width="20" height="20" src={help} alt="Help" />
              <p>Help</p>
            </div>
          </span>
        </div>
      </div>

      <div className="navbar blackdrop-grayscale-200 bg-white/10 max-w-6xl mt-4 rounded-lg h-20 mx-auto">
        <div className="flex-1">
          <Link className="flex items-center" href="/">
            <Image className="w-14 h-10 m-2" src={logo} alt="logo" />
            <p className="inconsolata-regular text-2xl font-semibold py-6 hover:text-pink-500">
              SOLAR-ICT
            </p>
          </Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2 items-center justify-center">
            <li>
              <Link href="/" className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-500">
                About Us
              </Link>
            </li>
            <li>
              <details>
                <summary className="hover:text-pink-500">Our Services</summary>
                <ul className="bg-base-100 text-black font-bold rounded-t-none p-2">
                  <li>
                    <Link href="/services/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cloud-solutions">
                      Cloud Solutions
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500">
                Contact Us
              </Link>
            </li>
            <button className="hover:bg-gray-900 cursor-pointer p-4 shadow-none border-none items-center justify-center">
              <Image width="20" height="20" src={search} alt="Search" />
            </button>
            <button className="hover:bg-gray-900 cursor-pointer p-4 shadow-none border-none items-center justify-center">
              <Image width="20" height="20" src={globe} alt="Language" />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
