import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Portfoliosep = () => {
  return (
    <>
      <Navbar />
      <section className="w-full  psec">
        <h2
          className="flex items-center  justify-center text-5xl font-extrabold m-10"
          style={{ color: "#404040" }}
        >
          Our Portfolio
        </h2>
        <div className="flex gap-10 p-5 justify-evenly flex-wrap pb-40">
          <a href="" className="none">
            <img className="" src="images/Buses_Plus_1.png" alt="" />
          </a>
          <a href="">
            <img className="w-1/4" src="images/sponge_3.png" alt="" />
          </a>
          <a href="">
            <img className="w-1/4" src="images/Watermart.png" alt="" />
          </a>
          <a href="">
            <img className="w-1/4" src="images/Thorai.jpeg" alt="" />
          </a>
          <a href="">
            <img className="w-1/4" src="images/wise_eye_1.png" alt="" />
          </a>
          <a href="">
            <img className="w-1/4" src="images/Buses_Plus_1.png" alt="" />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfoliosep;
