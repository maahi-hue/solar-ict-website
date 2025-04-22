import Image from "next/image";
import icon1 from "../../../public/icon1.png";
import icon2 from "../../../public/icon2.png";
import icon3 from "../../../public/icon3.png";
import icon4 from "../../../public/icon4.png";
import icon5 from "../../../public/icon5.png";
import icon6 from "../../../public/icon6.png";
import icon7 from "../../../public/icon7.png";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

const Banner5 = () => {
  return (
    <div className="bg-gradient-to-br from-white to-indigo-100 py-10">
      <div className="max-w-6xl mx-auto text-center overflow-hidden">
        <div className="mb-6 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold">
            List of our expertise with the world's most trusted Technology
            providers:
          </h1>
        </div>

        <div className="relative py-10 w-full">
          <div className="flex whitespace-nowrap animate-scroll gap-12">
            {[...icons, ...icons].map((icon, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 h-16 flex justify-center items-center"
              >
                <Image
                  src={icon}
                  alt={`Icon ${index}`}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .animate-scroll {
            animation: scroll-left 20s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Banner5;
