
import React, { useState } from "react";
import {
  faArrowRight,
  faArrowLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aboutme = () => {
  

  return (
   <>
   

    <section className=" bg-gray-200 p-11">
      
            <div className=" flex mq-aboutme items-center p-3 pl-10 pr-10 ">
                <div className="">
                    <div className="serv text-gray-800">

                        <h2 className="text-4xl font-bold">Welcome to <span className="text-blue-600 pt-1 text-4xl font-serif italic logo">CodeViper</span>  Where Technology Meets Passion
                        </h2>
                        <p className="pt-5 font-sans text-sm sm:text-base md:text-lg">
  At <span className="logo italic text-blue-600">Code Viper</span>, we're more than just tech enthusiasts – we're problem solvers with a passion for bringing bold ideas to life. Our goal? To help your business stand out in the digital age. Whether you're starting from scratch or enhancing what you already have, we provide IT solutions tailored specifically to your needs, guiding you through every step of the process.
</p>

<p className="pt-3 font-sans text-sm sm:text-base md:text-lg">
  With a deep understanding of technology and a hands-on approach, our team creates innovative solutions that do more than just work – they elevate your business. From refining your operations to ensuring your data is secure, we make technology work for you, so you can focus on what matters most.
</p>

<p className="pt-3 font-sans text-sm sm:text-base md:text-lg">
  At <span className="logo italic text-blue-600">Code Viper</span>, it's not just about delivering tech – it's about building partnerships. We take the time to learn about your goals, collaborate closely, and support your journey to new levels of success. Ready to transform your business? Let's make it happen, together.
</p>

                        <div className=" flex gap-5 pt-7">
                        <a className=' text-blue-600 mq-buttons hover:bg-blue-600 hover:text-white w-1/3 h-12 flex items-center justify-center  text-lg font-sans font-bold  rounded-md bg-white button-white ' href="/contactus#contactus">Contact Us<span></span></a>
                            <a className=' bg-blue-600 mq-buttons hover:bg-blue-800 w-1/3 flex items-center justify-center h-12 text-lg font-sans font-bold  rounded-md text-white button-blue ' href="tel:+923035313249">Call Now<span></span></a>
                            
                        </div>
                    </div>
                </div>
                    
                        <img  src="images/aboutus.png" alt="About CodeEssence" loading="lazy"/>
              
            </div>
        
    </section>


   </>
  )
}

export default Aboutme