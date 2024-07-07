// import { useState } from "react";
// import ship from "../assets/ship.svg";
// import "./intro.css";
// // import { cn } from "../assets/cont_under.png";

// const ContactUsForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log("Form data submitted:", formData);
//   };

//   return (
//     <div
//       id="contact-us"
//       className="min-h-screen flex flex-col  bg-gren  text-white"
//     >
//       <header className="w-full p-6 text-center ">
//         {/* <h1 className="text-4xl text-golden font-bold">Contact Us</h1> */}
//         {/* <p className="mt-4 text-lg">We'd love to hear from you</p> */}
//       </header>

//       <main className="flex-1 flex flex-col ml-12 justify-center px-4">
//         <form
//           className="bg-brown text-golden p-8 rounded-lg shadow-lg max-w-md w-full animate-fadeIn"
//           onSubmit={handleSubmit}
//         >
//           <div className="mb-4">
//             <label className="block text-lg mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="w-full p-2 rounded bg-lightbrown text-white focus:outline-none focus:ring-2 focus:ring-golden"
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-lg mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="w-full p-2 rounded bg-lightbrown text-white focus:outline-none focus:ring-2 focus:ring-golden"
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-lg mb-2" htmlFor="phone">
//               Phone
//             </label>
//             <input
//               className="w-full p-2 rounded bg-lightbrown text-white focus:outline-none focus:ring-2 focus:ring-golden"
//               type="text"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-lg mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               className="w-full p-2 rounded bg-lightbrown text-white focus:outline-none focus:ring-2 focus:ring-golden"
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               required
//             ></textarea>
//           </div>
//           {/* <button
//             className="w-full py-3 bg-brown1  text-black hover:bg-golden rounded-full text-lg font-medium"
//             type="submit"
//           >
//             Send Message
//           </button> */}
//           <button className="px-32 py-3 cursor-pointer flex justify-between rounded-md text-white tracking-wider shadow-xl bg-brown1 hover:bg-golden hover:scale-105 duration-500 hover:ring-1 font-mono w-full text-center">
//             Contact Us Now
//           </button>
//         </form>
//       </main>
//       {/* Ship SVG */}
//       {/* <div className="w-1/2 fixed top-0 right-0 z-0">
//         <img
//           src={cn}
//           className="h-auto w-full swing-image"
//           alt="Crystal Impex"
//         />
//       </div> */}
//       {/* <img
//         src={ship}
//         className=" bottom-0 right-0 h-36 w-auto z-10 animate-ship"
//         alt="Ship"
//       /> */}

//       {/* <footer className="w-full p-6 text-center bg-gray-800">
//         <p>&copy; 2024 Dot3 Solutions. All rights reserved.</p>
//       </footer> */}
//     </div>
//   );
// };

// export default ContactUsForm;
