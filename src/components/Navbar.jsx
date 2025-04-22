import Image from "next/image";
import search from "../../public/search.png";
import globe from "../../public/globe.png";
import mail from "../../public/mail.png";
import phone from "../../public/phone.png";
import headset from "../../public/headset.png";
import help from "../../public/help.png";

const Navbar = () => {
  return (
    <nav className="bg-[#021526] h-40 flex-col items-center justify-center text-white">
      <div className="max-w-6xl inconsolata-regular mx-auto flex items-center justify-center">
        <div className="flex text-sm font-thin justify-between items-center flex-1 pt-2">
          <span className="flex gap-6">
            <div className="flex gap-2 items-center">
              <Image width="20" height="20" src={mail} />
              <p>info@solar-ict.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image width="20" height="20" src={phone} />
              <p>+41 21 561 53 15</p>
            </div>
          </span>
          <span className="flex gap-6">
            <div className="flex gap-2 items-center">
              <Image width="20" height="20" src={headset} />
              <p>Support</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image width="20" height="20" src={help} />
              <p>Help</p>
            </div>
          </span>
        </div>
      </div>
      <div className="navbar blackdrop-grayscale-200 bg-white/10 max-w-6xl mt-4 rounded-lg h-20 mx-auto">
        <div className="flex-1">
          <a className="inconsolata-regular text-2xl font-semibold p-6 hover:text-pink-500">
            SOLAR-ICT
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2 items-center justify-center">
            <li>
              <a className=" hover:text-pink-500">Home</a>
            </li>
            <li>
              <a className=" hover:text-pink-500">About Us</a>
            </li>
            <li>
              <details>
                <summary className=" hover:text-pink-500">Our Services</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className=" hover:text-pink-500">Contact Us</a>
            </li>
            <button className=" hover:bg-gray-900 cursor-pointer p-4 shadow-none border-none items-center justify-center">
              {" "}
              <Image width="20" height="20" src={search} />
            </button>
            <button className="hover:bg-gray-900 cursor-pointer p-4 shadow-none border-none items-center justify-center">
              {" "}
              <Image width="20" height="20" src={globe} />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
