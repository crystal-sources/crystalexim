import exim from "../assets/EXIM.png";
import socialIcon from "../assets/social.png"; // Social icon that expands on hover
import whatsappIcon from "../assets/whatsapp.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import linkedlnIcon from "../assets/linkedin.png";
import telegramIcon from "../assets/telegram.png";
import "../App.css";
import "../styles/intro.css";

const Intro = () => {
  const handleGetStartedClick = () => {
    const contactUsSection = document.getElementById("contact-us");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen w-screen bg-white mt-24 md:mt-0">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col items-center md:items-start justify-center text-neutral-600 px-6 md:px-12">
        <section className="w-full">
          {/* Small Tagline: */}
          <div className="ibm-plex-mono-regular block text-left mb-8 px-4 md:px-0">
            Empowering Global Trade with Precision and Excellence
          </div>

          {/* Main Title: */}
          <div className="text-3xl md:text-5xl mt-4 md:mt-4 text-espresso font-semibold block  text-left m-4 md:m-0 telegraf-regular">
            Unlock Global Markets with Crystal EXIM
          </div>

          {/* Content Paragraph: */}
          <div className="h-auto flex justify-center md:mt-8 md:justify-start items-center px-4 md:px-0 text-left mb-4 md:mb-0 inter-crystal-medium">
            <p>
              Welcome to{" "}
              <span className="inter-crystal-semibold">Crystal EXIM</span>,
              where global trade ambitions become reality. With local expertise
              and international reach, we ensure seamless exports.
              <br />
              Accurate to the core,{" "}
              <span className="inter-crystal-semibold">available 24/7</span> and
              exceptional care.
            </p>
          </div>

          <section className="px-4 md:px-0 mt-8 md:mt-8 flex items-center justify-center md:justify-start">
            <button
              className="px-4 md:px-6 py-2 md:py-3 cursor-pointer flex justify-between items-center rounded-md text-black tracking-wider shadow-xl bg-gren hover:scale-105 duration-500 inter-crystal-medium w-full md:w-auto"
              onClick={handleGetStartedClick}
            >
              Want To Connect?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </button>
          </section>
        </section>
      </div>

      {/* Right Section */}
      <div className="md:flex w-full md:w-2/5 items-center justify-center p-4 md:p-0">
        <img
          src={exim}
          className="h-auto w-auto object-cover md:object-contain"
          alt="Crystal Impex"
        />
      </div>

      {/* Social Icon with Expandable Icons */}
      <div className="fixed-social">
        <img src={socialIcon} alt="Social Media" className="animate-bounce" />
        <div className="social-icons">
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            onClick={() => openLink("https://wa.me/919662215115")}
          />
          <img
            src={facebookIcon}
            alt="Facebook"
            onClick={() => openLink("https://www.facebook.com/crystallexim/")}
          />
          <img
            src={instagramIcon}
            alt="Instagram"
            onClick={() => openLink("https://instagram.com/crystalexim")}
          />
          <img
            src={twitterIcon}
            alt="Twitter"
            onClick={() => openLink("https://x.com/crystalexim")}
          />
          <img
            src={linkedlnIcon}
            alt="linkedIn"
            onClick={() => openLink("http://www.linkedin.com/in/crystalexim")}
          />
          <img
            src={telegramIcon}
            alt="telegram"
            onClick={() => openLink("https://t.me/crystalexim")}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
