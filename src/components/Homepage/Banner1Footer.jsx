const Banner1Footer = () => {
  return (
    <div className="bg-gradient-to-br from-white to-indigo-100">
      <div className="max-w-6xl mx-auto p-10 flex gap-20">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            Discover new opportunities for your business.
          </h1>
          <p className="mt-4 text-gray-700">
            We are ready to assist you every step of the way.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-end">
          <div className="flex items-center bg-white rounded-full shadow px-4 py-2 w-full max-w-md">
            <input
              type="text"
              required
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none px-2"
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

export default Banner1Footer;
