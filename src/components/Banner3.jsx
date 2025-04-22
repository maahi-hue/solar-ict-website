import Image from "next/image";
import icon1 from "../../public/user.png";
import icon2 from "../../public/check.png";
import icon3 from "../../public/world-wide-web.png";

const Banner3 = () => {
  return (
    <div className="bg-gradient-to-l from-[#DDE4FF] to-[#F4F7FF] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-16">
          <h1 className="text-3xl font-bold text-[#0D1E51] mb-4">
            How we serve
          </h1>
          <p className="text-[#2B3674] max-w-3xl mx-auto">
            You can easily tap into flexible and scalable IT resources without
            the hassle of setting up a complex in-house and cloud-based
            infrastructure with us. Easier for you to concentrate on your main
            business activities while leveraging Solar-ICT's specialized
            knowledge and services to support your IT needs.
          </p>
        </div>
        <div className="circle w-2/3 mx-auto relative flex items-center justify-between px-10 mb-16">
          {/* First */}
          <div className="flex flex-col items-center relative">
            <div className="absolute w-32 h-32 rounded-full border-4 border-[#BE4BE0] border-dashed animate-spin-slow" />
            <div className="bg-gradient-to-b from-[#BE4BE0] to-[#640475] w-35 h-35 rounded-full flex items-center justify-center z-10">
              <Image src={icon1} alt="icon1" width={60} height={60} />
            </div>
            <p className="text-sm font-medium text-[#0D1E51] mt-4 w-32 text-center">
              Seamless IT Resource Integration
            </p>
          </div>

          <div className="relative w-65 h-65 -mt-24 top-20">
            <div className="absolute inset-0 border-t-4 border-dashed border-[#BE4BE0] rounded-full" />
          </div>

          {/* Second */}
          <div className="flex flex-col items-center relative">
            <div className="absolute w-32 h-32 rounded-full border-4 border-[#BE4BE0] border-dashed animate-spin-slow" />
            <div className="bg-gradient-to-b from-[#BE4BE0] to-[#640475] w-35 h-35 rounded-full flex items-center justify-center z-10">
              <Image src={icon2} alt="icon2" width={60} height={60} />
            </div>
            <p className="text-sm font-medium text-[#0D1E51] mt-4 w-32 text-center">
              Cloud and Infrastructure Management
            </p>
          </div>

          <div className="relative w-62 h-62 -mt-24 bottom-16 rotate-180">
            <div className="absolute inset-0 border-t-4 border-dashed border-[#BE4BE0] rounded-full" />
          </div>

          {/* Third */}
          <div className="flex flex-col items-center relative">
            <div className="absolute w-32 h-32 rounded-full border-4 border-[#BE4BE0] border-dashed animate-spin-slow" />
            <div className="bg-gradient-to-b from-[#BE4BE0] to-[#640475] w-35 h-35 rounded-full flex items-center justify-center z-10">
              <Image src={icon3} alt="icon3" width={60} height={60} />
            </div>
            <p className="text-sm font-medium text-[#0D1E51] mt-4 w-32 text-center">
              Business-Focused IT Support Solutions
            </p>
          </div>
        </div>

        <button className="shadow-md hover:shadow-inner focus:shadow-inner shadow-[#29335D] cursor-pointer mt-4 px-6 py-2 border border-[#29335D] rounded-3xl text-bold text-[#29335D] hover:scale-110 text-shadow-sm font-extrabold text-shadow-gray-500 hover:text-shadow-none transition duration-500 ease-in-out">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Banner3;
