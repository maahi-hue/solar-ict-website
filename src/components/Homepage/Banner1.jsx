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

      <div className="relative z-10 max-w-6xl mx-auto lg:flex h-full gap-26 py-20">
        <div className="text-left flex-1 w-1/2">
          <h1 className="text-3xl font-bold mt-20 space-y-3">
            <p>Transforming Technology</p>
            <p>Solutions for a Digital Future</p>
          </h1>
          <p className="mt-4">
            Delivering Sustainable Positive Impact through Expertly Crafted
            Infrastructure & Software Solutions. Empowering Your Business with
            Design, Development & Operations.
          </p>
          <button className="shadow-md hover:shadow-inner focus:shadow-inner shadow-pink-500 cursor-pointer mt-4 px-6 py-2 border border-pink-500 rounded-3xl text-bold text-pink-500 hover:scale-110 text-shadow-sm font-extrabold text-shadow-gray-500 hover:text-shadow-none transition duration-500 ease-in-out">
            Contact Us
          </button>
        </div>

        <div
          ref={imageRef}
          className="perspective-[1000px] items-center justify-center w-1/2 hidden md:flex"
        >
          <Lottie
            className="opacity-90"
            animationData={animationData}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
