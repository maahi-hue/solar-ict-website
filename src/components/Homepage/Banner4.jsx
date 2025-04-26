import Image from "next/image";
import banner from "../../../public/banner4.png";

const Banner4 = () => {
  return (
    <div className="bg-gradient-to-br from-[#021526] to-[#0C134F] min-h-screen text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 pt-12 text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Who do we serve</h1>
          <p className="max-w-3xl text-gray-300 mx-auto">
            At Solar-ICT, we serve a diverse range of clients, including
            enterprises, startups, developers, researchers, government agencies,
            and non-profits. Our scalable, cost-effective, and flexible
            solutions ensure businesses of all sizes have the IT infrastructure
            and support they need to enhance capabilities and streamline
            operations.
          </p>
        </div>
        <div className="max-w-3xl md:max-w-6xl mx-auto flex flex-col md:flex-row h-full gap-26">
          <div className="text-center md:text-left flex-1 w-full md:w-1/2">
            <h1 className="text-3xl font-bold mt-20 space-y-3">
              <p>Comprehensive IT Solutions</p>
              <p>for Diverse Sectors</p>
            </h1>
            <p className="mt-4 text-gray-300">
              At Solar-ICT, we serve a diverse range of clients, including
              enterprises, startups, developers, researchers, government
              agencies, and non-profits. Our scalable, cost-effective, and
              flexible solutions ensure businesses of all sizes have the IT
              infrastructure and support they need to enhance capabilities and
              streamline operations.
            </p>
            <button className="bg-gradient-to-r from-[#480689] to-[#D4088C] hover:bg-gradient-to-l hover:scale-105 shadow-md hover:shadow-inner focus:shadow-inner shadow-pink-500 cursor-pointer border border-blue-900 text-bold font-extrabold transition duration-500 ease-in-out mt-4 px-6 py-2 rounded-3xl">
              Get in Touch
            </button>
          </div>
          <div className="items-center justify-center w-full md:w-1/2 hidden md:flex">
            <Image
              className="block w-full h-full"
              src={banner}
              alt="Banner Image"
            />
          </div>
          <div className="flex md:hidden items-center justify-center mt-10">
            <Image
              className="block w-full h-full"
              src={banner}
              alt="Banner Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
