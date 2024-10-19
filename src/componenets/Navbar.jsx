import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import only if using React Router

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
        className='flex sticky-header justify-between items-center bg-blue-800  transition-all duration-300 '
      >
        <a className="p-2 font-bold text-4xl" href="/">
          <img className="w-20" src="images/logoo.png" alt="Logo" />
        </a>

     
        <div className="hidden md:flex">
          <div className="text-white flex justify-evenly items-center gap-4 text-2xl">
            <NavLink className={'underl'} to="/">Home</NavLink>
            <NavLink className={'underl'} to="/services">Services</NavLink> 
            <NavLink className={'underl'} to="/portfolio">Portfolio</NavLink>
            <NavLink className={'underl'} to="/team">Team</NavLink>
            <NavLink className={'underl'} to="/contact">Contact</NavLink>
            <NavLink className={'underl'} to="/about">About Us</NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`flex flex-col justify-center absolute top-16 right-1 bg-white w-32 font-semibold py-5 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } md:hidden`}
        >
          <ul className="text-black">
            <li  onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <NavLink to="/contact">Team</NavLink>
            </li>
            <li onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <NavLink to="/about">About US</NavLink>
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
   
    .underl {
    position: relative;
    display: inline-block; 
}

.underl::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;  /* Adjust the height as needed */
    left: 0;
    bottom: -2px;  /* Adjust the offset distance as needed */
    background-color: white;
    transition: width 0.3s ease;
    bottom: -5px
}

.underl:hover::after {
    width: 100%;
}

      `}</style>
    </>
  );
};

export default Navbar;
