import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import background from "../assets/dot-bg.png";
const Team = () => {
  return (
    <>
    <Navbar/>
      <div className='bg-slate-200 '>
   <div className="bg-slate-200">
  <div className="team mq-team-form flex flex-col lg:flex-row justify-between items-center gap-5 p-10">
    <div className="text-center lg:text-left">
      <h1 className="text-blue-600 font-semibold text-3xl md:text-4xl lg:text-5xl p-5">
        Meet Our Incredible Leaders
      </h1>
      <p className="text-lg md:text-xl p-5 font-sans text-gray-600 font-medium ">
        Our team is made of experts who love what they do. We work together to
        create great IT solutions. Our leaders guide us to be the best and make
        our clients happy.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mt-5 team">
      <NavLink className="text-blue-600 mq-buttons w-1/3 h-12 flex items-center justify-center text-lg font-sans font-bold rounded-md button bg-white button-white" to="/contact">
    <span>Contact Us</span>
</NavLink>
        <a target="_blank"
          className="bg-blue-600 hover:bg-blue-800 w-full sm:w-1/3 h-12 flex mq-buttons items-center justify-center text-lg font-sans font-bold rounded-md text-white button-blue"
          href="tel:+923186840896"
        >
          Call Now<span></span>
        </a>
      </div>
    </div>
    <img
      className="mq-team-img w-full sm:w-2/3 md:w-1/2 lg:w-1/4 mt-8 lg:mt-0"
      src="images/team.svg"
      alt="Team"
    />
      
  </div>
  <h2 className='flex justify-center team text-4xl sm:text-4xl md:text-5xl m-10 font-extrabold' style={{ color: '#404040' }}>Our Leadership</h2>
</div>
        <div className='flex team flex-wrap justify-center items-center gap-4 p-20'>
        <div className=" p-5 t-card transform hover:scale-110 transition duration-300 ease-in-out  bg-slate-100 shadow-xl t-card sh rounded-md">
   <img className=' t-img border-2 border-gray-400   ' src="images/usman.png" alt="" />
    <h3 className="font-bold flex items-center justify-center text-xl pt-5 mb-4 text-gray-800">Muhammad Usman</h3>
    <p className='text-gray-600 text-lg flex items-center justify-center  mb-4'>
    Founder & CEO </p>
    <div className='t-icons  gap-2'>
          <a target='_blank' href="https://www.linkedin.com/in/chusman67728/" className='rounded-md  p-1  t-linkdin  w-9 h-9  bg-white '><svg className='w-6 m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a>
            <a href="https://www.facebook.com/profile.php?id=100048817821525" target='_blank' className=' p-1 rounded-md t-facebook h-9 w-9 bg-white'><svg   className='w-5 m-auto 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></a>
           <a target='_blank' href="https://github.com/Usman67728" className=' p-1 rounded-md t-github h-9 w-9 bg-white '><svg      className='w-6 m-auto 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
       <a href="mailto:chusman67728@gmail.com"  className=' p-1 rounded-md  t-email   h-9 w-9  '>
       <svg className='w-6 m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
  </a>  </div> </div>
{/* 
<div className=" p-5 transform hover:scale-110 transition duration-300 ease-in-out  bg-slate-100 shadow-xl t-card sh rounded-md">
   <img className=' t-img border-2 border-gray-400   ' src="images/Abdullah.png" alt="" />
    <h3 className="font-bold flex items-center justify-center text-xl pt-5 mb-4 text-gray-800">Abdullah  Yasin</h3>
    <p className='text-gray-600 text-lg flex items-center justify-center  mb-4'>
    Software Engineer </p>
    <div className='t-icons  gap-2'>
    <a target='_blank' href="https://www.linkedin.com/in/abdullah-yasin-893550274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='rounded-md  p-1  t-linkdin  w-9 h-9  bg-white '><svg className='w-6 m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a>
          
           
           
         <a href="https://github.com/abdullah4656" target='_blank' className=' p-1 rounded-md t-github h-9 w-9 bg-white '><svg      className='w-6 m-auto 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
         <a href="mailto:abdullahyasin4656@gmail.com"  className=' p-1 rounded-md  t-email   h-9 w-9  '>
       <svg className='w-6 m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
  </a> 
                 </div>
</div> */}
<div className=" p-5 transform hover:scale-110 transition duration-300 ease-in-out  bg-slate-100 shadow-xl t-card sh rounded-md">
   <img className=' t-img border-2 border-gray-400   ' src="images/Farhad.png" alt="" />
    <h3 className="font-bold flex items-center justify-center text-xl pt-5 mb-4 text-gray-800">Farhad Maqbool</h3>
    <p className='text-gray-600 text-lg flex items-center justify-center  mb-4'>
    Software Engineer </p>
    <div className='t-icons  gap-2'>
             
         <a href="mailto:f2maqbool@yahoo.com"  className=' p-1 rounded-md  t-email   h-9 w-9  '>
       <svg className='w-6 m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
  </a> 
                 </div>
</div> <div className=" p-5 transform hover:scale-110 transition duration-300 ease-in-out   bg-slate-100 shadow-xl t-card sh rounded-md">
   <img className=' t-img border-2 border-gray-400   ' src="images/Najam.png" alt="" />
    <h3 className="font-bold flex items-center justify-center text-xl pt-5 mb-4 text-gray-800">Muhammad Najam</h3>
    <p className='text-gray-600 text-lg flex items-center justify-center  mb-4'>
    Marketing Engineer </p>
<div className='t-icons  gap-2'>
          <a href="https://www.linkedin.com/in/muhammad-najamulhassan8861" target='_blank' className='  rounded-md  p-1  t-linkdin  w-9 h-9  bg-white '><svg className='w-6 m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a>
          
           
       
       
         <a href="mailto:najamulhassan2001@gmail.com"  className=' p-1 rounded-md  t-email   h-9 w-9  '>
       <svg className='w-6 m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
  </a> 
                 </div>
</div>
    </div>
    </div>
    <Footer/>
    <style jsx>{`
.sh{
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

}
    .t-card {
  position: relative;
  z-index: 1;
  min-width: 22%;
  background-color: rgba(255, 255, 255, 1); 
}
.t-card:hover {
  background-color: rgba(255, 255, 255, 0.5); 
}
.t-email{
 fill: #ffffff; 
background-color: #1e90ff;
}

.t-card img {
  transition: opacity 0.3s ease-in-out;
}
.t-card:hover img {
  opacity: 0.5;
}
    .t-img{
  width: 200px;
  height: 40vh;
}

.t-card:hover .t-icons {
  display: flex;

 
}
  

.t-icons { 
position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
 cursor: pointer;
  
  display: none;
  transition: opacity 0.3s ease-in-out;
}
  .t-icons:hover{
  opacity:1;
  }
  .button-white {
  
  cursor: pointer;               
  transition: background-color 0.4s, color 0.4s,  box-shadow 0.4s; 
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}
       .button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    overflow: hidden;  
    text-align: center;
    background-color: white;  
    border-radius: 8px; 
    transition: color 0.3s ease; 
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
    .t-linkdin{
  background-color:#0077B5;
  fill:white;
}
.t-github{
  background-color:#181717;
  fill: white;
}
.t-facebook{
background-color: #3B5998;
  fill: white;
}
  .t-whatsapp{
  fill: white;
  background-color: #25D366; 
}
  .t-insta{
  background: linear-gradient(to right, #F58529, #DD2A7B, #8134B9);
  fill: white;
}
  .team{
   background-image: url(${background});
  }
`}</style>
   </>
    
  )
}

export default Team