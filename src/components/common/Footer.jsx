import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";
import crystal from "../../assets/crystal.svg";
import arrow from "../../assets/right-up.png";
import countryCodes from "../../data/CountryCode.json";
import { sendFormData } from "../../api/api";
import tele from "../../assets/tele.svg";

const Footer = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      contact_no: countryCode + formData.contact_no,
    };

    try {
      const result = await sendFormData(payload);
      console.log("Success:", result);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", contact_no: "", message: "" });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white text-black py-8 px-4 sm:px-16" id="contact-us">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center md:space-x-16">
        {/* Left Section: Logo */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start mb-8 md:mb-0">
          <img src={crystal} alt="Crystal Impex Logo" className="h-44 w-48" />
        </div>

        {/* Middle Section: Contact Information and Social Icons */}
        <div className="flex flex-col md:w-1/2 justify-center items-center md:items-start mb-8 md:mb-0 inter-crystal-regular text-center">
          <div className="text-center md:text-left">
            <p className="mb-4">
              <div>Surat - Gujarat | India</div>
              <div className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="text-lg mr-3" />
                <a href="tel:+919662215115" className="hover:text-gren">
                  +91 96622 15115
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-lg mr-3" />
                <a
                  href="mailto:crystallexim@gmail.com"
                  className="hover:text-gren"
                >
                  crystallexim@gmail.com
                </a>
              </div>
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/crystallexim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-gren transition duration-300"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.instagram.com/crystalexim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-gren transition duration-300"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://x.com/crystalexim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-gren transition duration-300"
              >
                {/* <AiFillTwitterCircle /> */}
                <img
                  src="src/assets/x.svg"
                  alt="Twitter"
                  height={24}
                  width={24}
                  className="opacity-50"
                />
              </a>
              <a
                href="https://wa.me/919662215115"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-gren transition duration-300"
              >
                <AiOutlineWhatsApp />
              </a>
              <a
                href="http://www.linkedin.com/in/crystalexim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-gren transition duration-300"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://t.me/crystalexim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-gren transition duration-300"
              >
                <img
                  src={tele}
                  alt="telegram"
                  height={"24px"}
                  width={"24px"}
                  className="opacity-60"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-1/2 inter-crystal-regular">
          <div className="p-6 rounded-lg">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="p-2 bg-transparent border-b-2 border-gren focus:border-green-500 outline-none transition duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="p-2 mt-4 bg-transparent border-b-2 border-gren focus:border-green-500 outline-none transition duration-300"
                  required
                />
                <div className="flex items-center mt-4 overflow-hidden">
                  <select
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    className="p-2 bg-transparent border-b-2 border-gren focus:border-green-500 outline-none transition duration-300 w-24"
                    required
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.dial_code}>
                        {country.dial_code} ({country.name})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="contact_no"
                    value={formData.contact_no}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="p-2 ml-2 bg-transparent border-b-2 border-gren focus:border-green-500 outline-none transition duration-300 flex-1"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="p-2 bg-transparent border-b-2 border-gren focus:border-green-500 outline-none transition duration-300"
                  rows="4"
                  required
                />
                <button
                  type="submit"
                  className="bg-gren text-black py-2 px-4 mt-4 rounded-md hover:bg-opacity-70 hover:shadow-2xl transition duration-300 self-start w-full text-center"
                  disabled={isSubmitting}
                >
                  <div className="flex items-center justify-center inter-crystal-medium ">
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    {!isSubmitting && (
                      <img
                        src={arrow}
                        className="h-4 w-4 sm:h-6 sm:w-6 ml-2 animate-bounce"
                      />
                    )}
                  </div>
                </button>
                {submitSuccess && (
                  <p className="text-green-500 mt-4">
                    Inquiry sent successfully!
                  </p>
                )}
                {submitError && (
                  <p className="text-red-500 mt-4">Error: {submitError}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-6 border-t border-gray-700" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center ibm-plex-mono-semibold">
        <p className="text-gray-400">
          &copy; 2024 Crystal EXIM. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-400 hover:text-gren transition duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
