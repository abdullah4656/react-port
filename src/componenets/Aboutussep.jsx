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
              <a class="text-blue-600 button mq-buttons w-1/3 h-12 flex items-center justify-center text-lg font-sans font-bold rounded-md button bg-white button-white" href="">
    <span>Contact Us</span>
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
  
       .button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    width:30%;
    cursor: pointer;
    overflow: hidden;  
    text-align: center;
    /* Text color matching 'text-blue-600' */
    background-color: white;  /* Initial background color */
    border-radius: 8px;  /* Matches 'rounded-md' */
    transition: color 0.3s ease;  /* Text color transition */
}

.button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
      background-color: #1e40af;/* Background fill color (same as 'text-blue-600') */
    transition: width 0.4s ease;
    z-index: 0;  /* Ensures background is behind the text */
}

.button:hover::before {
    width: 100%;  /* Expands to cover the entire button */
}

.button:hover {
    color: white;  /* Changes text color to white */
}

.button span {
    position: relative;
    z-index: 1;  /* Keeps text above the expanding background */
}


      `}</style>
      </section>
<Footer/>
    </>
  );
};

export default Aboutussep;
