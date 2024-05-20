const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-gray-200 shadow hover:shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-8">
          <i className="text-2xl fas fa-campground"></i>
          <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
            Table App
          </h1>
        </div>

        <div className=" block absolute top-4 right-8 ">
          <button
            aria-label="navigation"
            type="button"
            className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
          >
            <i className="fas fa-bars text-3xl" id="bars"></i>{" "}
          </button>
        </div>

        <div className="flex">
          <ul className="flex">
            <li className="text-lg pr-8 ">
              <a
                href=""
                className=" text-underline-offset: 8px transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              >
                Home
              </a>
            </li>
           
           
           
          </ul>
        </div>

      
      </div>
    </nav>
  );
};

export default Navbar;
