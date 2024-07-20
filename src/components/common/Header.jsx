import arrow from "../../assets/right-up.png";
import crystalExim from "../../assets/header.svg";
import crystalHeader from "../../assets/crytal_header.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-screen flex items-center h-16 z-50 bg-white bg-opacity-85 backdrop-blur-md px-4 sm:px-8 md:px-16 shadow-xl ">
      {/* Left Section */}
      <div className="flex items-center h-full">
        <img
          src={crystalExim}
          alt="crystalExim Header"
          className="h-12  sm:hidden"
        />
        <img
          src={crystalHeader}
          alt="crystalExim Header"
          className="h-12 hidden sm:block"
        />
      </div>

      {/* Middle Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="text-red-700">|| શ્રી૧| ||</div>
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center h-full">
        <button
          className="flex items-center px-2 py-1 sm:px-4 sm:py-2 inter-crystal-medium text-sm sm:text-base text-black bg-gren rounded-md sm:rounded-lg hover:bg-gren hover:bg-opacity-80 hover:shadow-xl hover:text-gray-800 transition duration-500 hover:scale-105"
          onClick={() => {
            const contactUsSection = document.getElementById("contact-us");
            if (contactUsSection) {
              contactUsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="hidden sm:block">Get in Touch</span>
          <img
            src={arrow}
            alt="arrow"
            className="h-4 w-4 sm:h-6 sm:w-6 animate-bounce sm:ml-2 hidden sm:block"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            className="h-6 w-6 sm:hidden"
          >
            <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
