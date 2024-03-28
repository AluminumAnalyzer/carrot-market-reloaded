const Card = () => {
  return (
    <div className="bg-white w-full shadow-lg p-5  rounded-3xl  dark:bg-gray-500">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gray-600 font-semibold dark:text-gray-300">
            In transit
          </span>
          <span className="dark:text-white text-4xl font-semibold -mb-1">
            Coolblue
          </span>
        </div>
        <div className="size-12 bg-orange-400 rounded-full" />
      </div>
      <div className="my-2 flex items-center gap-2">
        <span className="transition bg-green-400 hover:bg-green-600 hover:scale-125 cursor-pointer text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full">
          Today
        </span>
        <span className="dark:text-gray-100">9:30-10:30</span>
      </div>
      <div className="relative">
        <div className="absolute bg-gray-200 w-full h-2 rounded-full" />
        <div className="absolute bg-green-500 w-2/3 h-2 rounded-full" />
      </div>
      <div className="flex justify-between items-center mt-5 text-gray-500 dark:text-gray-300">
        <span>Expected</span>
        <span>Sorting center</span>
        <span>In transit</span>
        <span className="text-gray-400 dark:text-gray-500">Delivered</span>
      </div>
    </div>
  );
};

export default Card;
