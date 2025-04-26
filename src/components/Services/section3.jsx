const section5 = () => {
  return (
    <div className="bg-[#192c4f] py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 text-white">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold">Subscribe To Our Newsletter!</h1>
          <p className="mt-4 text-gray-300">
            Get Regularly News and Exclusive Offers
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
          <div className="flex items-center bg-white rounded-full shadow px-4 py-2 w-full max-w-md">
            <input
              type="text"
              required
              placeholder="Enter your email"
              className="text-gray-500 flex-1 bg-transparent outline-none px-2"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section5;
