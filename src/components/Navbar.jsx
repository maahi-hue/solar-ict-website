import { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#021526] h-auto flex-col items-center justify-center text-white px-4">
      <div className="max-w-4xl inconsolata-regular mx-auto flex items-center justify-between text-sm font-thin py-2 px-4 sm:flex-row flex-col">
        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <Image width="20" height="20" src={mail} alt="Mail" />
            <p>info@solar-ict.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image width="20" height="20" src={phone} alt="Phone" />
            <p>+41 21 561 53 15</p>
          </div>
        </div>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <div className="flex gap-2 items-center">
            <Image width="20" height="20" src={headset} alt="Support" />
            <p>Support</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image width="20" height="20" src={help} alt="Help" />
            <p>Help</p>
          </div>
        </div>
      </div>

      <div className="navbar blackdrop-grayscale-200 bg-white/10 max-w-6xl mt-4 rounded-lg h-20 mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <Image className="w-14 h-10 m-2" src={logo} alt="logo" />
            <p className="inconsolata-regular text-2xl font-semibold py-6 hover:text-pink-500">
              SOLAR-ICT
            </p>
          </Link>
        </div>

        <div className="flex-none hidden sm:flex items-center justify-center">
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
              <Link href="/service" className="block py-2 hover:text-pink-500">
                Our Services
              </Link>
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

        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white/10 w-full py-4 flex flex-col items-center justify-center gap-4">
          <ul className="text-center text-white">
            <li>
              <Link href="/" className="block py-2 hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 hover:text-pink-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-pink-500">
                Our Services
              </Link>
            </li>

            <li>
              <Link href="/contact" className="block py-2 hover:text-pink-500">
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
      )}
    </nav>
  );
};

export default Navbar;
