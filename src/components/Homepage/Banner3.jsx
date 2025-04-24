import { useState } from "react";
import it from "../../../public/it.jpg";
import cloud from "../../../public/cloud.jpg";
import business from "../../../public/business.jpg";
import Image from "next/image";

const services = [
  {
    title: "Seamless IT Resource Integration",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    img: cloud,
  },
  {
    title: "Cloud and Infrastructure Management",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    img: business,
  },
  {
    title: "Business-Focused IT Support Solutions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    img: it,
  },
];

const Banner3 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="bg-gradient-to-l from-[#DDE4FF] to-[#F4F7FF] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-[#0D1E51] mb-4">
            How we serve
          </h1>
          <p className="text-[#2B3674] max-w-3xl mx-auto">
            You can easily tap into flexible and scalable IT resources without
            the hassle of setting up a complex in-house and cloud-based
            infrastructure with us.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 bg-white rounded-lg shadow">
          {services.map((service, index) => {
            const isHovered = hoverIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`relative group flex justify-between items-center px-6 py-8 transition-all duration-300 ${
                  isHovered ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <div className="grid grid-cols-3 gap-4 w-full relative">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm text-gray-600 mt-1 max-w-md">
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`w-full justify-end flex items-center transition-all duration-300 ${
                      isHovered ? "translate-x-2" : ""
                    }`}
                  >
                    <span
                      className={`text-2xl transition-transform ${
                        isHovered
                          ? "rotate-45 bg-[#DDE4FF] rounded-full px-4 py-2"
                          : ""
                      }`}
                    >
                      ↗
                    </span>
                  </div>

                  <div
                    className={`absolute right-20 -top-24 w-60 h-40 z-10 shadow-lg rounded-lg overflow-hidden transform transition-all duration-700 ease-in-out ${
                      isHovered
                        ? "opacity-80 scale-100 rotate-[8deg]"
                        : "opacity-0 scale-90"
                    }`}
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button className="shadow-md hover:shadow-inner focus:shadow-inner shadow-[#29335D] cursor-pointer mt-4 px-6 py-2 border border-[#29335D] rounded-3xl text-bold text-[#29335D] hover:scale-110 text-shadow-sm font-extrabold text-shadow-gray-500 hover:text-shadow-none transition duration-500 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
