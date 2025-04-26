import Image from "next/image";
import service from "../../../public/service.png";

const section2 = () => {
  const buttonData = [
    { id: 1, text: "Web Development" },
    { id: 2, text: "Cloud Solutions" },
    { id: 3, text: "Digital Marketing" },
  ];
  return (
    <div className="bg-gradient-to-br from-white to-indigo-100">
      <div className="flex w-full h-auto max-w-6xl mx-auto gap-10 md:gap-20 py-20 px-4">
        <div className="flex flex-col gap-4 w-1/2 justify-center py-4">
          {buttonData.map((button) => (
            <button
              key={button.id}
              className="px-4 py-2 border-gray-500 border-b hover:bg-blue-900"
            >
              {button.text}
            </button>
          ))}
        </div>
        <div className="w-1/2">
          <div className="flex flex-col gap-10 px-4 w-full py-5">
            <div className="w-full text-center md:text-start">
              <h1 className="text-5xl font-bold pb-4">
                Innovate, Transform, and Succeed: Empower Your Digital Journey
              </h1>

              <button className="cursor-pointer text-blue-800 font-extrabold hover:text-blue-600">
                Learn more →
              </button>
            </div>
            <div className="w-full">
              <Image src={service} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;
