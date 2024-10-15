import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Into = () => {
  return (
  <>

  <div className='introcont p-2 mq-main-form'>
  <div className='p-8' >
 
      <h2>
        <strong className='font-serif text-6xl text-blue-400 name italic logo     '>Code Viper</strong>
      </h2>
      <h3 className='flex  justify-center items-center text-4xl intro-desc '>
      <TypeAnimation
      sequence={[
        
        'Leading Software Solutions Company',
        2000,
        
      ]}
      wrapper="span"
      speed={60}
      style={{ fontFamily:'none'}}
      className='text-blue-800   font-arial font-semibold'
      repeat={0}
    />
       
      </h3>  
      <br />
      <div className="flex flex-col items-center justify-center  ">
      <p className="
        
         md:text-xl
          lg:text-2xl 
            text-gray-800
            flex justify-center items-center mx-auto
      ">
      Transform your business with custom IT solutions designed to meet specific needs. Expertise ensures competitiveness and success through innovative technology and digital strategies.</p>
    </div>
  
     
    </div>
  
    <img className='w-1/4 mq-main-img rounded-xl  bg-blue-400 ' src="images/home-2.png" alt="" />
  
   
</div>
    </>
  );
};

export default Into;
