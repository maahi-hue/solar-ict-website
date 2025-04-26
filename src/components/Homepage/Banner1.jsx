"use client";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/tech.json";

const Banner1 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateY = (clientX - centerX) / 40;
      const rotateX = (centerY - clientY) / 40;

      if (imageRef.current) {
        imageRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientOptions = [
    "from-[#480689] to-[#D4088C]",
    "from-[#267FE5] to-[#6EE8FC]",
  ];

  const animationClasses = [
    "animate-diagonal",
    "animate-horizontal",
    "animate-vertical",
    "animate-zigzag",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#021526] to-[#0C134F] min-h-screen text-white">
      {[...Array(10)].map((_, i) => {
        const size = 30 + Math.random() * 40;
        const gradient = gradientOptions[i % gradientOptions.length];
        return (
          <div
            key={i}
            className={`absolute rounded-full z-0 bg-gradient-to-br ${gradient} ${
              animationClasses[i % animationClasses.length]
            }`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 3}s`,
              animationDirection: Math.random() > 0.5 ? "normal" : "reverse",
              opacity: 0.6,
            }}
          />
        );
      })}

      <div className="relative z-10 max-w-6xl mx-auto h-full py-20 px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {" "}
          <div className="text-center md:text-left flex-1 w-full md:w-1/2">
            <h1 className="text-3xl font-bold mt-10 md:mt-20 space-y-3">
              <p>Transforming Technology</p>
              <p>Solutions for a Digital Future</p>
            </h1>
            <p className="mt-4 text-gray-300">
              Delivering Sustainable Positive Impact through Expertly Crafted
              Infrastructure & Software Solutions. Empowering Your Business with
              Design, Development & Operations.
            </p>
            <button className="bg-gradient-to-r from-[#480689] to-[#D4088C] hover:bg-gradient-to-l hover:scale-105 shadow-md hover:shadow-inner focus:shadow-inner shadow-pink-500 cursor-pointer border border-blue-900 text-bold font-extrabold transition duration-500 ease-in-out mt-4 px-6 py-2 rounded-3xl">
              Contact Us
            </button>
          </div>
          <div
            ref={imageRef}
            className="perspective-[1000px] flex justify-center items-center w-full md:w-1/2"
          >
            <Lottie
              className="opacity-90 max-w-lg md:max-w-full"
              animationData={animationData}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
