const section3 = () => {
  const cards = [
    {
      title: "Our Roadmap",
      description:
        "Our roadmap includes infrastructure setup, deployment of a comprehensive cloud platform, security implementation, service expansion, scalability optimization, cost optimization, monitoring and analytics, disaster recovery planning, continuous learning, and customer satisfaction focus. ",
    },
    {
      title: "Our Context",
      description:
        "Our focus is to empower organizations to streamline operations, innovate, and achieve their IT goals efficiently. In a rapidly evolving digital landscape, we understand the critical need for organizations to stay competitive and adaptto changing market dynamics.",
    },
    {
      title: "Our Beliefs",
      description:
        "We are here to embrace innovation and stay at the forefront of technology advancements and to ensure robust security measures to protect customer data and privacy . We are passionate about harnessing the power of innovation to create transformative solutions that drive organizational growth and competitive advantage.",
    },
    {
      title: "Our Commitment",
      description:
        "Count on us for a stable and accessible cloud infrastructure reliability and scalability. We prioritize the protection of your data and infrastructure. Your Satisfaction, Our Priority.",
    },
  ];

  return (
    <div className="bg-[#021526] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-white text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Our Vision for Success
          </h1>
          <p className="text-sm text-gray-300 sm:text-base">
            We are dedicated to empowering your business with cutting-edge
            solutions that drive growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="max-w-5xl mx-auto h-auto bg-gradient-to-r from-[#480689] to-[#D4088C] hover:bg-gradient-to-l hover:scale-105 shadow-md hover:shadow-inner focus:shadow-inner shadow-pink-500 cursor-pointer border border-blue-900 text-bold font-extrabold transition duration-500 ease-in-out relative block rounded-3xl p-10 hover:p-9 text-left text-white flex flex-col justify-start"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-200 font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default section3;
