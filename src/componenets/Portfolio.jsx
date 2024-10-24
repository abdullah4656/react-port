import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <>
    
      <section className='w-full psec'>
      <h2 className='flex justify-center text-4xl sm:text-4xl md:text-5xl m-10 font-extrabold' style={{ color: '#404040' }}>Our Portfolio</h2>
        <div className='flex gap-10 p-5 justify-evenly flex-wrap pb-40'>
        
          <p className='transform hover:scale-110 transition duration-300 ease-in-out'> <img className='w-1/4' src="images/sponge_3.png" alt="Sponge Project Screenshot" /></p>
          <p className='transform hover:scale-110 transition duration-300 ease-in-out' ><img className='w-1/4' src="images/Watermart.png" alt="Watermart Project Screenshot" /></p>
          <p className='transform hover:scale-110 transition duration-300 ease-in-out' ><img className='w-1/4' src="images/Thorai.jpeg" alt="Thorai Project Screenshot" /></p>
          <p className='transform hover:scale-110 transition duration-300 ease-in-out' ><img className='w-1/4' src="images/wise_eye_1.png" alt="Wise Eye Project Screenshot" /></p>
          <p className='transform hover:scale-110 transition duration-300 ease-in-out' ><img className='w-1/4' src="images/Buses_Plus_1.png" alt="Buses Plus Project Screenshot" /></p>
        </div>
      </section>
    
      <style jsx>{`
        .a {
          height: 100px;
          width: 300px;
        }
      `}</style>
    </>
  )
}

export default Portfolio;
