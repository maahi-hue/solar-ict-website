import Image from "next/image";
import image1 from "../../../public/s1img1.png";
import image2 from "../../../public/s1img2.png";
import image3 from "../../../public/s1img3.png";

const section2 = () => {
  return (
    <div className="bg-gradient-to-br from-white to-indigo-100 min-h-screen">
      <div className="max-w-6xl mx-auto pb-20">
        <div className="text-center py-20 px-4 text-wrap ">
          <h1 className="text-3xl font-bold pb-4 max-w-sm mx-auto">
            Discover Our Story, Mission, and Values
          </h1>
          <p className="text-lg text-gray-700 px-4 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            odit fugit praesentium at. Laudantium, soluta omnis doloremque
            corporis a iusto eius deserunt ad facilis.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-10 px-4 w-full py-5">
          <div className="w-full lg:w-1/2">
            <Image src={image1} alt="" />
          </div>
          <div className="w-full lg:w-1/2 text-center md:text-start">
            <h1 className="text-2xl font-bold pb-4">How we serve</h1>
            <p className="pb-4 text-gray-700">
              You can easily tap into flexible and scalable IT resources without
              the hassle of setting up a complex in-house and cloud-based
              infrastructure with us. Easier for you to concentrate on your main
              business activities while leveraging Solar-ICT's specialized
              knowledge and services to support your IT needs.
            </p>
            <button className="cursor-pointer text-blue-800 font-extrabold hover:text-blue-600">
              Learn more →
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 px-4 w-full py-5">
          <div className="w-full lg:w-1/2 text-center md:text-start">
            <h1 className="text-2xl font-bold pb-4">Who do we serve</h1>
            <p className="pb-4 text-gray-700">
              We serve enterprises, businesses of all sizes, startups,
              developers, researchers, government agencies, and non-profit
              organizations by providing scalable, cost-effective, and flexible
              solutions for their IT infrastructure and operational needs.
            </p>
            <button className="cursor-pointer text-blue-800 font-extrabold hover:text-blue-600">
              Learn more →
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={image2} alt="" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-10 px-4 w-full py-5">
          <div className="w-full lg:w-1/2">
            <Image src={image3} alt="" />
          </div>
          <div className="w-full lg:w-1/2 text-center md:text-start">
            <h1 className="text-2xl font-bold pb-4">What We Offer</h1>
            <p className="pb-4 text-gray-700">
              We are here to provide you with all the facilities for Digital
              Services, Data & AI, Digital Workplace, Platform & Security,
              Digital Transformation, Managed Services, Information Management,
              Software Development, Risk & Compliance and more on.
            </p>
            <button className="cursor-pointer text-blue-800 font-extrabold hover:text-blue-600">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;
