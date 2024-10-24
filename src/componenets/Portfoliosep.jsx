import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Portfoliosep = () => {
  return (
    <>
      <Navbar />
      <header className="text-center text-black py-10">
        <h2
          className="flex justify-center text-4xl sm:text-4xl md:text-5xl m-10 font-extrabold"
          style={{ color: "#404040" }}
        >
          Our Portfolio
        </h2>
        <div className="flex flex-col items-center justify-center lg:items-center">
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800 text-center lg:text-center mx-auto">
            Transform your business with custom IT solutions designed to meet specific needs. Our expertise ensures competitiveness and success through innovative technology and digital strategies.
          </p>
        </div>
      </header>
      <div className="flex flex-wrap gap-10 p-5 justify-center items-center pb-40">
        <a href="#" className="transform hover:scale-110 transition duration-300 ease-in-out">
          <img
            className="w-40 md:w-52 lg:w-60 rounded-lg shadow-xl hover:shadow-2xl hover:opacity-90"
            src="images/Buses_Plus_1.png"
            alt="Buses Plus Project Screenshot"
          />
        </a>
        <a href="#" className="transform hover:scale-110 transition duration-300 ease-in-out">
          <img
            className="w-40 md:w-52 lg:w-60 rounded-lg shadow-xl hover:shadow-2xl hover:opacity-90"
            src="images/sponge_3.png"
            alt="Sponge Project Screenshot"
          />
        </a>
        <a href="#" className="transform hover:scale-110 transition duration-300 ease-in-out">
          <img
            className="w-40 md:w-52 lg:w-60 rounded-lg shadow-xl hover:shadow-2xl hover:opacity-90"
            src="images/Watermart.png"
            alt="Watermart Project Screenshot"
          />
        </a>
        <a href="#" className="transform hover:scale-110 transition duration-300 ease-in-out">
          <img
            className="w-40 md:w-52 lg:w-60 rounded-lg shadow-xl hover:shadow-2xl hover:opacity-90"
            src="images/Thorai.jpeg"
            alt="Thorai Project Screenshot"
          />
        </a>
        <a href="#" className="transform hover:scale-110 transition duration-300 ease-in-out">
          <img
            className="w-40 md:w-52 lg:w-60 rounded-lg shadow-xl hover:shadow-2xl hover:opacity-90"
            src="images/wise_eye_1.png"
            alt="Wise Eye Project Screenshot"
          />
        </a>
      
      </div>

      <Footer />
      <style jsx>
        {`
          .psec img {
            height: 100px;
            width: 300px;
          }
        `}
      </style>
    </>
  );
};

export default Portfoliosep;
