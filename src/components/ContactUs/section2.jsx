import Image from "next/image";
import mail from "../../../public/mail.png";
import phone from "../../../public/phone.png";
import location from "../../../public/location.png";

const section2 = () => {
  return (
    <div className="bg-gradient-to-br from-white to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto">
        <div>
          <div>
            <div className="border-b border-gray-300">
              <h1 className="text-3xl font-bold mb-2">Let’s Talk</h1>
              <p className="text-gray-700 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
              </p>
            </div>
            <div className="mt-10">
              <div className="flex items-center gap-6 mb-10">
                <div className="bg-[#081330] rounded-full w-12 h-12 flex items-center justify-center">
                  <Image className="w-6" src={mail} alt="mail" />
                </div>
                <div className="">
                  <h1 className="font-semibold">Our email</h1>
                  <p className="text-gray-700">info@solar-ict.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-10">
                <div className="bg-[#081330] rounded-full w-12 h-12 flex items-center justify-center">
                  <Image className="w-6" src={phone} alt="mail" />
                </div>
                <div className="">
                  <h1 className="font-semibold">Call us</h1>
                  <p className="text-gray-700">+41 21 561 53 15</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-10">
                <div className="bg-[#081330] rounded-full w-12 h-12 flex items-center justify-center">
                  <Image className="w-6" src={location} alt="mail" />
                </div>
                <div className="">
                  <h1 className="font-semibold">Find us</h1>
                  <p className="text-[#057FA3] cursor-pointer">
                    Open Google Maps
                  </p>
                  <p className="text-gray-700">
                    Rue du Jura 3, 1023 Crissier, Switzerland
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default section2;
