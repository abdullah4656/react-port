import React ,{useState} from 'react';

const Navbar = ({ contactFormRef },{Serviceformref}) => {
const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu open/close state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


  const handleGetInTouchClick = () => {

      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    
      
  };
  const handleServiceClick = () => {

    Serviceformref.current.scrollIntoView({ behavior: 'smooth' });
  
    
};

  return (
    <>
 


    <nav className='flex  sticky-header justify-between m-5 items-center bg-blue-500 rounded-md   '>

     <a className=" p-2 font-bold text-4xl" href='/'><img className='w-20' src="images/code-Viper-logo.svg" alt="" /></a>
     
 
    
      <div className=' text-white flex justify-evenly items-center gap-4 text-2xl mq-nav-items' >

 <a href="/">Home</a>
<a className='ul ' to="/services">Services</a>
<a className='ul ' to="/portfolio">Portfolio</a>
<a className='ul ' to="/team">Team</a>
<a className='ul ' to="/contact">Contact </a>
<a className='ul ' to="/about">About us</a>
</div>
<div
    className={`flex justify-center absolute top-16 right-1 bg-white w-32  font-semibold py-5 transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
    }`}
>
    <ul className="text-black">
        <li className="px-4 py-2 hover:bg-white cursor-pointer">Home</li>
        <li className="px-4 py-2 hover:bg-white cursor-pointer">Services</li>
        <li className="px-4 py-2 hover:bg-white cursor-pointer">About</li>
        <li className="px-4 py-2 hover:bg-white cursor-pointer">Contact</li>
    </ul>
</div>


    
        <button  onClick={handleGetInTouchClick} className='bg-blue-900 focus:ring-2  font-semibold shadow-2xl flex  text-white  border-0 py-2 px-8   rounded text-lg   transition-transform duration-300 hover:scale-105  focus:outline-none mq-nav-button'>
        Get IT Support
      </button>
      <button
        onClick={toggleMenu}
        className="flex ham-button items-center justify-center w-10 h-10 text-white focus:outline-none"
    >
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        </button>
  

    </nav>
    </>
  );
};

export default Navbar;
