"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";
import portfolio from "../../../public/portfolio.png";
import portfolio2 from "../../../public/portfolioani.json";

const Banner6 = () => {
  const cardData = [
    {
      title: "Card Title 1",
      image: img1,
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
    },
    {
      title: "Card Title 2",
      image: img2,
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
    },
    {
      title: "Card Title 3",
      image: img3,
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
    },
  ];
  return (
    <div className="bg-gradient-to-tl from-[#021526] to-[#0C134F] py-10">
      <div className="max-w-6xl mx-auto">
        <div className="p-10 max-w-2xl mx-auto text-white text-center">
          <h1 className="text-3xl font-bold mb-2">Some Of Our Portfolios</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nam quae consequatur consectetur harum eos porro id doloribus non
            molestiae.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 max-w-4xl mx-auto py-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="block border border-gray-200 bg-gray-400 hover:bg-gray-300 relative p-4 h-80 hover:scale-110 hover:z-10 transition duration-500 ease-in-out overflow-hidden shadow-md items-center justify-center text-center"
            >
              <div>
                <Image
                  className="w-6 shadow-lg"
                  src={portfolio}
                  alt="Portfolio Icon"
                />
              </div>
              <div className="w-full flex justify-center">
                <Lottie
                  autoplay
                  loop
                  animationData={portfolio2}
                  className="opacity-80 p-2"
                />
              </div>
              <div className="relative z-10 px-4">
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner6;
