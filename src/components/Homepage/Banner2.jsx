import Image from "next/image";
import image1 from "../../../public/1.png";
import image2 from "../../../public/2.png";
import image3 from "../../../public/3.png";
import image4 from "../../../public/4.png";
import image5 from "../../../public/5.png";
import image6 from "../../../public/6.png";
import image7 from "../../../public/7.png";
import image8 from "../../../public/8.png";
import image9 from "../../../public/9.png";

const Banner2 = () => {
  const cards = [
    {
      title: "Digital Transformation",
      description:
        "Innovate, Transform, and Succeed: Empower Your Digital Journey ",
      image: image1,
    },
    {
      title: "Cloud Services (Cross Platform)",
      description:
        "Unleash the Power of the Cloud: Seamless Solutions for Your Business",
      image: image2,
    },
    {
      title: "Enterprise Network & Security Solutions",
      description:
        "Empower Your Enterprise with Unparalleled Network and Security",
      image: image3,
    },
    {
      title: "Cyber Security",
      description:
        "Safeguard Your Digital Frontier: Protect Your Assets and Ensure Peace of Mind",
      image: image4,
    },
    {
      title: "IT Infrastructure Virtualization",
      description:
        "Virtualize with Confidence: Empower Agility and Efficiency to Boost Your Business",
      image: image5,
    },
    {
      title: "Digital Marketing",
      description:
        "Maximize the Potential of Your Business and Transform Your Future with Digital Marketing ",
      image: image6,
    },
    {
      title: "Web Development",
      description:
        "Build Your Digital Presence and Take Your Business to New Level with a High-Performance Website",
      image: image7,
    },
    {
      title: "DevOps",
      description:
        "Accelerate Innovation, Drive Efficiency: Embrace the Power of DevOps",
      image: image8,
    },
    {
      title: "IT Managed & Consulting Services",
      description:
        "Empower Your Business - with our holistic IT managed and consulting solutions, tailored to your needs",
      image: image9,
    },
  ];

  return (
    <div className="bg-[#021526] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-white text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Services We Offer
          </h1>
          <p className="text-sm sm:text-base">
            We provide a wide range of services to meet your needs, including:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full  backdrop-blur-xl bg-white/10 border border-white/20 block shadow-md hover:border-3 hover:shadow-lg shadow-[#480689] rounded-3xl p-12 text-left text-white flex flex-col justify-center"
            >
              <div className="bg-gradient-to-t from-[#267FE5] to-[#6EE8FC] absolute top-0 left-6 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-md">
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={24}
                    height={24}
                    className="ml-3 mt-3 object-contain"
                  />
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
