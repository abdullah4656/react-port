import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Aboutussep = () => {
  return (
    <>
      <Navbar/>
      <section className="bg-gray-100 p-6 lg:p-11 ">
        <div className="flex flex-col lg:flex-row  text-center lg:text-left">
          <div className="w-full lg:w-1/2">
            <div className="text-gray-800">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Welcome to
                <span className="logo-main text-blue-600 pt-1 text-3xl sm:text-4xl lg:text-5xl font-serif ">
                  CodeViper  – 
                </span>{" "}
                Where Technology Meets Passion
              </h2>
              <p className="pt-5 text-sm sm:text-base md:text-lg">
                At{" "}
                <span className=" text-blue-600 logo">Code Viper</span>, we're
                more than just tech enthusiasts – we're problem solvers with a
                passion for bringing bold ideas to life. Our goal? To help your
                business stand out in the digital age. Whether you're starting
                from scratch or enhancing what you already have, we provide IT
                solutions tailored specifically to your needs, guiding you
                through every step of the process.
              </p>

             

              <p className="pt-3 text-sm sm:text-base md:text-lg">
                At{" "}
                <span className=" text-blue-600 logo">Code Viper</span>, it's
                not just about delivering tech – it's about building
                partnerships. We take the time to learn about your goals,
                collaborate closely, and support your journey to new levels of
                success. Ready to transform your business? Let's make it happen,
                together.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-7 justify-center lg:justify-start">
                <a
                  className="text-blue-600 hover:bg-blue-600 hover:text-white w-full sm:w-1/3 h-12 flex items-center justify-center text-lg font-bold rounded-md bg-white"
                  href="/contactus#contactus"
                >
                  Contact Us
                </a>
                <a
                  className="bg-blue-600 hover:bg-blue-800 w-full sm:w-1/3 flex items-center justify-center h-12 text-lg font-bold rounded-md text-white"
                  href="tel:+923035313249"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="images/aboutus.png"
              alt="About CodeEssence"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <style jsx>{`
        .logo{
  font-family: "Audiowide", sans-serif;
 font-size:18px;
}
 .logo-main{
  font-family: "Audiowide", sans-serif;
  
 }
      `}</style>
      </section>
<Footer/>
    </>
  );
};

export default Aboutussep;
