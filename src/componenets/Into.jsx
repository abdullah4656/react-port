import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <>
      <div className='flex flex-col items-center lg:flex-row justify-center gap-5 p-2'>
        <div className='p-5 text-center lg:text-left'>
          <h2>
            <strong className='font-serif text-4xl sm:text-5xl md:text-6xl text-blue-400 italic logo'>
              Code Viper
            </strong>
          </h2>
          <h3 className='flex items-center text-2xl sm:text-3xl md:text-4xl intro-desc'>
            <TypeAnimation
              sequence={['Leading Software Solutions Company', 2000]}
              wrapper="span"
              speed={60}
              className='text-blue-800 font-arial font-semibold'
              repeat={0}
            />
          </h3>
          <br />
          <div className="flex flex-col items-center justify-center lg:items-start">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 text-center lg:text-left mx-auto lg:mx-0">
              Transform your business with custom IT solutions designed to meet specific needs. Expertise ensures competitiveness and success through innovative technology and digital strategies.
            </p>
          </div>
        </div>
        <img
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 mt-2 rounded-xl bg-blue-400"
          src="images/home-2.png"
          alt="home visual"
        />
      </div>

      {/* CSS style for logo */}
      <style jsx>{`
        .logo {
          font-family: "Audiowide", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Intro;
