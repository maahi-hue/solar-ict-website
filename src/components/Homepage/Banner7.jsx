import Image from "next/image";
import icon1 from "../../../public/i1.png";
import icon2 from "../../../public/i2.png";
import icon3 from "../../../public/i3.png";
import icon4 from "../../../public/i4.png";
import icon5 from "../../../public/i5.png";

const icons = [icon1, icon2, icon3, icon4, icon5];

const Banner7 = () => {
  return (
    <div className="bg-gradient-to-br from-white to-indigo-100 py-10">
      <div className="max-w-6xl mx-auto text-center overflow-hidden">
        <div className="mb-6 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold">Few Of Our Trusted Customers</h1>
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

export default Banner7;
