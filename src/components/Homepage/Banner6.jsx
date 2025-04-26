"use client";
import { useState } from "react";
import Image from "next/image";
import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";
import img4 from "../../../public/img4.jpg";
import img5 from "../../../public/img5.jpg";
import img6 from "../../../public/img6.jpg";

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
    {
      title: "Card Title 4",
      image: img4,
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
    },
    {
      title: "Card Title 5",
      image: img5,
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
    },
    {
      title: "Card Title 6",
      image: img6,
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(3);

  const handleViewMore = () => {
    setVisibleCards(cardData.length);
  };

  const handleViewLess = () => {
    setVisibleCards(3);
  };

  return (
    <div className="bg-gradient-to-tl from-[#021526] to-[#0C134F] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="p-6 md:p-10 max-w-2xl mx-auto text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Some Of Our Portfolios
          </h1>
          <p className="text-gray-300 mt-4 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nam quae consequatur consectetur harum eos porro id doloribus non
            molestiae.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto py-10">
          {cardData.slice(0, visibleCards).map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col 
      w-full max-w-md mx-auto"
            >
              <figure className="overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-58 object-cover"
                />
              </figure>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-[#021526]">
                  {card.title}
                </h2>
                <p className="text-gray-700 mb-4 flex-grow">
                  {card.description}
                </p>
                <div className="flex justify-center">
                  <button className="shadow-md hover:shadow-inner focus:shadow-inner shadow-[#29335D] cursor-pointer px-6 py-2 border border-[#29335D] rounded-3xl text-bold text-[#29335D] hover:scale-110 font-extrabold transition duration-500 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-6">
          {visibleCards < cardData.length ? (
            <button
              onClick={handleViewMore}
              className="bg-gradient-to-r from-[#6EE8FC] to-[#267FE5] hover:bg-gradient-to-l hover:scale-105 shadow-md hover:shadow-inner focus:shadow-inner shadow-[#6EE8FC] cursor-pointer border border-blue-900 font-extrabold transition duration-500 ease-in-out mt-4 px-8 py-2 rounded-3xl text-white text-lg"
            >
              View More
            </button>
          ) : (
            <button
              onClick={handleViewLess}
              className="bg-gradient-to-r from-[#6EE8FC] to-[#267FE5] hover:bg-gradient-to-l hover:scale-105 shadow-md hover:shadow-inner focus:shadow-inner shadow-[#6EE8FC] cursor-pointer border border-blue-900 font-extrabold transition duration-500 ease-in-out mt-4 px-8 py-3 rounded-3xl text-white text-lg"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner6;
