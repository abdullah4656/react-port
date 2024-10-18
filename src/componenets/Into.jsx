import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import background from "../assets/home.png";
import background1 from "../assets/set.png";

const Intro = () => {
  return (
    <>
      <div className='flex    bg-gray-50 p-5 md:p-20 lg:pt-10 2xl:p-20 flex-col backimg items-center lg:flex-row justify-center gap-5'>
        <div className='p-5 text-center lg:text-left'>
          <p className='text-4xl p-2 sm:text-5xl md:text-6xl'>
            <span className='zz text-blue-900 zz'>Innovate and Elevate with</span>
            {"-"}
            <strong className='zz text-4xl logo-main sm:text-5xl md:text-6xl text-blue-800'>
              Code Viper
            </strong>
          </p>
          <h3 className='flex zz logo-mainn p-2 items-center justify-cente text-2xl sm:text-3xl md:text-4xl intro-desc'>
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
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 mt-2 rounded-xl"
          src="images/home-2.png"
          alt="home visual"
        />
      </div>
      <div className="home-shape-animation">
        <div className="shape-1">
          <img src= "images/1.png" loading="lazy" alt="shape image"/>
        </div>
        <div className="shape-2">
          <img src= "images/2.png" loading="lazy" alt="shape image"/>
        </div>
        <div className="shape-3">
          <img src= "images/3.png" loading="lazy" alt="shape image"/>
        </div>
        <div className="shape-4">
          <img src= "images/4.png" loading="lazy" alt="shape image"/>
        </div>
        <div className="shape-5">
          <img src= "images/5.png" loading="lazy" alt="shape image"/>
        </div>
        <div className="shape-6">
          <img src= "images/6.png" loading="lazy" alt="shape image"/>
        </div>
        <div className="shape-7">
          <img src= "images/7.png" loading="lazy" alt="shape image"/>
        </div>
      </div>

      
      <style jsx>{`
      .zz{
      position:relative;
      z-index: 10;
      }
        .logo-main {
          font-family: "Audiowide", sans-serif;
        }

        .logo-mainn {
          font-family: 'Nunito', sans-serif;
        }

        .backimg {
          background-image: url(${background});
        }

        
        .home-shape-animation .shape-1 {
          position: absolute;
          right: 10%;
          top: 16%;
          z-index: 1;
          -webkit-animation-name: rotateMe;
          animation-name: rotateMe;
          -webkit-animation-duration: 10s;
          animation-duration: 10s;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
        }

        .home-shape-animation .shape-2 {
          position: absolute;
          left: 33%;
          top: 18%;
          z-index: 2;;
        }

        .home-shape-animation .shape-2 img {
          -webkit-animation-name: rotateMe;
          animation-name: rotateMe;
          -webkit-animation-duration: 10s;
          animation-duration: 10s;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
        }

        .home-shape-animation .shape-3 {
          position: absolute;
          left: 5%;
          bottom: 25%;
          z-index: 2;;
          -webkit-animation: animationFramesOne 20s infinite linear;
          animation: animationFramesOne 20s infinite linear;
        }

        .home-shape-animation .shape-4 {
          position: absolute;
          right: 10%;
          bottom: 25%;
          z-index: 2;;
          -webkit-animation: animationFramesTwo 20s infinite linear;
          animation: animationFramesTwo 20s infinite linear;
        }

        .home-shape-animation .shape-5 {
          position: absolute;
          left: 10%;
          top: 16%;
          z-index: 2;     
              -webkit-animation: moveLeftBounce 3s linear infinite;
          animation: moveLeftBounce 3s linear infinite;
        }

        .home-shape-animation .shape-6 {
          position: absolute;
          left: 50%;
          bottom: 15%;
          z-index: 2;;
          -webkit-animation: rotate3d 4s linear infinite;
          animation: rotate3d 4s linear infinite;
        }

        .home-shape-animation .shape-7 {
          position: absolute;
          left: 50%;
          top: 15%;
          z-index: 2;
          -webkit-animation: moveScale 3s linear infinite;
          animation: moveScale 3s linear infinite;
        }

        @-webkit-keyframes rotateMe {
          from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @keyframes rotateMe {
          from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @-webkit-keyframes animationFramesOne {
          0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
          20% {
            -webkit-transform: translate(73px, -1px) rotate(36deg);
            transform: translate(73px, -1px) rotate(36deg);
          }
          40% {
            -webkit-transform: translate(141px, 72px) rotate(72deg);
            transform: translate(141px, 72px) rotate(72deg);
          }
          60% {
            -webkit-transform: translate(83px, 122px) rotate(108deg);
            transform: translate(83px, 122px) rotate(108deg);
          }
          80% {
            -webkit-transform: translate(-40px, 72px) rotate(144deg);
            transform: translate(-40px, 72px) rotate(144deg);
          }
          100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
        }

        @keyframes animationFramesOne {
          0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
          20% {
            -webkit-transform: translate(73px, -1px) rotate(36deg);
            transform: translate(73px, -1px) rotate(36deg);
          }
          40% {
            -webkit-transform: translate(141px, 72px) rotate(72deg);
            transform: translate(141px, 72px) rotate(72deg);
          }
          60% {
            -webkit-transform: translate(83px, 122px) rotate(108deg);
            transform: translate(83px, 122px) rotate(108deg);
          }
          80% {
            -webkit-transform: translate(-40px, 72px) rotate(144deg);
            transform: translate(-40px, 72px) rotate(144deg);
          }
          100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
        }

        @-webkit-keyframes animationFramesTwo {
          0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
          20% {
            -webkit-transform: translate(-73px, 1px) rotate(-36deg);
            transform: translate(-73px, 1px) rotate(-36deg);
          }
          40% {
            -webkit-transform: translate(-141px, -72px) rotate(-72deg);
            transform: translate(-141px, -72px) rotate(-72deg);
          }
          60% {
            -webkit-transform: translate(-83px, -122px) rotate(-108deg);
            transform: translate(-83px, -122px) rotate(-108deg);
          }
          80% {
            -webkit-transform: translate(40px, -72px) rotate(-144deg);
            transform: translate(40px, -72px) rotate(-144deg);
          }
          100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
        }

        @keyframes animationFramesTwo {
          0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
          20% {
            -webkit-transform: translate(-73px, 1px) rotate(-36deg);
            transform: translate(-73px, 1px) rotate(-36deg);
          }
          40% {
            -webkit-transform: translate(-141px, -72px) rotate(-72deg);
            transform: translate(-141px, -72px) rotate(-72deg);
          }
          60% {
            -webkit-transform: translate(-83px, -122px) rotate(-108deg);
            transform: translate(-83px, -122px) rotate(-108deg);
          }
          80% {
            -webkit-transform: translate(40px, -72px) rotate(-144deg);
            transform: translate(40px, -72px) rotate(-144deg);
          }
          100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
        }

        @-webkit-keyframes rotate3d {
          0% {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
          }
          100% {
            -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
          }
        }

        @keyframes rotate3d {
          0% {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
          }
          100% {
            -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
          }
        }

        @-webkit-keyframes moveScale {
          0% {
            -webkit-transform: scale(.6);
            transform: scale(.6);
          }
          50% {
            -webkit-transform: scale(.8);
            transform: scale(.8);
          }
          100% {
            -webkit-transform: scale(.6);
            transform: scale(.6);
          }
        }

        @keyframes moveScale {
          0% {
            -webkit-transform: scale(.6);
            transform: scale(.6);
          }
          50% {
            -webkit-transform: scale(.8);
            transform: scale(.8);
          }
          100% {
            -webkit-transform: scale(.6);
            transform: scale(.6);
          }
        }

        @-webkit-keyframes moveLeftBounce {
          0% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
          50% {
            -webkit-transform: translateX(20px);
            transform: translateX(20px);
          }
          100% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
        }

        @keyframes moveLeftBounce {
          0% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
          50% {
            -webkit-transform: translateX(20px);
            transform: translateX(20px);
          }
          100% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
        }

        @-webkit-keyframes moveBounce {
          0% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
          50% {
            -webkit-transform: translateY(20px);
            transform: translateY(20px);
          }
          100% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
        }

        @keyframes moveBounce {
          0% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
          50% {
            -webkit-transform: translateY(20px);
            transform: translateY(20px);
          }
          100% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
        }
      `}</style>
    </>
  );
};

export default Intro;
