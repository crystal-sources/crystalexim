import { useState, useEffect } from "react";
import crystalEximLogo from "../../assets/crytal_header.svg";
import welcomeVector from "../../assets/wcVector.svg";
import "../../App.css";
import "../../styles/intro.css";

// eslint-disable-next-line react/prop-types
const WelcomePopup = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      onClose();
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-8 transition-opacity duration-500 ${
        visible && !closing ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative bg-white p-4 sm:p-8 rounded-lg max-w-md mx-auto text-center shadow-lg transition-transform duration-500 ${
          visible && !closing ? "scale-100" : "scale-90"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-1 md:top-0 right-2 md:right-0 -mt-4 -mr-4 p-2 bg-gren rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 "
          style={{
            transform: "perspective(600px) rotateX(0deg) rotateY(0deg)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "perspective(600px) rotateX(-10deg) rotateY(-10deg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "perspective(600px) rotateX(0deg) rotateY(0deg)";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-white "
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img
          src={crystalEximLogo}
          alt="Crystal Exim Logo"
          className="h-12 mx-auto mb-4"
        />
        <img
          src={welcomeVector}
          alt="Welcome Vector"
          className="h-24 mx-auto mb-4 md:h-40"
        />
        <h1 className="text-xl telegraf-regular mb-4">
          Welcome to Crystal EXIM: Your Gateway to Global Trade!
        </h1>
        <p className="text-base inter-crystal-regular mb-4">
          Welcome to Phase One of our site! The full launch is just around the
          corner. Dive in now and connect with us!
        </p>
      </div>
    </div>
  );
};

export default WelcomePopup;
