import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import only if using React Router

const Navbar = ({ contactFormRef, Serviceformref }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleGetInTouchClick = () => {
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleServiceClick = () => {
    Serviceformref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`flex sticky-header justify-between ${
          isOpen ? "m-0" : "m-5"
        } items-center bg-blue-500 rounded-md transition-all duration-300`}
      >
        <a className="p-2 font-bold text-4xl" href="/">
          <img className="w-20" src="images/code-Viper-logo.svg" alt="Logo" />
        </a>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex">
          <div className="text-white flex justify-evenly items-center gap-4 text-2xl">
            <a href="/">Home</a>
            <a href="/services">Services</a> {/* Use <Link> if React Router */}
            <a href="/portfolio">Portfolio</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact</a>
            <a href="/about">About Us</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`flex flex-col justify-center absolute top-16 right-1 bg-white w-32 font-semibold py-5 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } md:hidden`}
        >
          <ul className="text-black">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <a href="/services">Services</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <a href="/about">About</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <button
          onClick={handleGetInTouchClick}
          className="m-5 bg-blue-900 focus:ring-2 font-semibold shadow-2xl text-white border-0 py-2 px-8 rounded text-lg transition-transform duration-300 hover:scale-105 focus:outline-none hidden md:flex"
        >
          Get IT Support
        </button>

        {/* Hamburger Button for Mobile Menu */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden items-center justify-center w-10 h-10 text-white focus:outline-none"
        >
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </button>
      </nav>
      <style jsx>{`
        .hamburger {
          display: block;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: white;
          margin: 4px 0;
          transition: 0.4s;
        }

        .hamburger.open .bar:nth-child(1) {
          transform: rotate(45deg);
          position: relative;
          top: 8px;
        }

        .hamburger.open .bar:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .bar:nth-child(3) {
          transform: rotate(-45deg);
          position: relative;
          top: -8px;
        }
      `}</style>
    </>
  );
};

export default Navbar;
