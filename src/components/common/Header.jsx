import arrow from "../../assets/right-up.png";
import crystalExim from "../../assets/temp.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center h-16 z-50 bg-white bg-opacity-90 px-4 sm:px-8 md:px-16">
      {/* Left Section */}
      <div className="flex justify-start items-center h-full">
        <div className="text-brown font-bold text-xl sm:text-2xl">
          {/* Crystal Exim */}
          <img src={crystalExim} alt="crystalExim Header" className="h-12" />
        </div>
      </div>
      {/* Middle Section */}
      <div className="text-center">
        <div className="text-red-700">|| શ્રી૧| ||</div>
      </div>

      {/* Right Section */}
      <div className="flex justify-end items-center h-full ">
        <button
          className="flex items-center px-2 py-1 sm:px-4 sm:py-2 inter-crystal-medium text-sm sm:text-base text-black bg-gren rounded-lg hover:bg-gren hover:bg-opacity-80 hover:shadow-xl hover:text-gray-800 transition duration-500 hover:scale-105 "
          onClick={() => {
            const contactUsSection = document.getElementById("contact-us");
            if (contactUsSection) {
              contactUsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get in Touch
          <img
            src={arrow}
            alt="arrow"
            className="h-4 w-4 sm:h-6 sm:w-6 animate-bounce ml-2"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
