const Inputbox = () => {
  return (
    <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm dark:bg-gray-600 flex flex-col md:flex-row gap-5 ">
      <input
        type="text"
        placeholder="Search here...."
        className="w-full rounded-full pl-5 py-3 bg-gray-200 h-19 focus:outline-none outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow focus:ring-offset-orange-500 placeholder:text-cyan-600"
      />
      <button className="bg-black bg-opacity-50 text-white py-2 rounded-full cursor-pointer active:scale-90 transition-transform focus:scale-90 outline-none md:px-10">
        Search
      </button>
    </div>
  );
};

export default Inputbox;
