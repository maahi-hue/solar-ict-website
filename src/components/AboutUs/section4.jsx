"use client";
import { useState } from "react";
import Image from "next/image";
import avatar1 from "../../../public/avatar1.png";
import avatar2 from "../../../public/avatar2.png";
import avatar3 from "../../../public/avatar3.png";

const testimonials = [
  {
    name: "Mr. Israr Ahmad",
    image: avatar1,
    quote:
      "Host provides solid value in VPS hosting with great prices that provide the best premium support and excellent up-time in the industry.",
  },
  {
    name: "Mr. Manoj Pillai",
    image: avatar2,
    quote:
      "Being in education we need an interactive and user friendly online platform for admissions and registrations. Host offered us the complete package.",
  },
  {
    name: "Mr. Yogesh Gosavi",
    image: avatar3,
    quote:
      "My company has had a great long standing relationship with Host. Their response time and customer support has been a boon.",
  },
  {
    name: "Mr. Israr Ahmad",
    image: avatar1,
    quote:
      "Host provides solid value in VPS hosting with great prices that provide the best premium support and excellent up-time in the industry.",
  },
  {
    name: "Mr. Manoj Pillai",
    image: avatar2,
    quote:
      "Being in education we need an interactive and user friendly online platform for admissions and registrations. Host offered us the complete package.",
  },
  {
    name: "Mr. Yogesh Gosavi",
    image: avatar3,
    quote:
      "My company has had a great long standing relationship with Host. Their response time and customer support has been a boon.",
  },
];

const Section4 = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="border-t border-gray-500 bg-[#021526] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          What our clients say
        </h2>
        <p className="text-sm text-gray-300 sm:text-base mb-12">
          Your trusted hosting partner since 2005. Here's what some of our
          customers say about HOST.CO.IN
        </p>

        <div className="relative  flex items-center">
          <button
            onClick={handlePrev}
            className="p-2 border border-white rounded-full hover:bg-white hover:text-[#021526] transition"
          >
            ←
          </button>

          <div className="relative grid grid-cols-1 md:grid-cols-3 w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full flex flex-col items-center bg-[#021526] p-6 rounded-lg relative"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#021526] border h-32 p-4 rounded-lg text-gray-300 text-sm mb-4 relative">
                    <div className="absolute top-[-9px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#021526] border-t border-l rotate-45"></div>
                    {testimonial.quote}
                  </div>
                  <h3 className="text-white font-semibold">
                    {testimonial.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="p-2 border border-white rounded-full hover:bg-white hover:text-[#021526] transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
