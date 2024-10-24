import "./App.css";
import Navbar from "./componenets/Navbar";
import Into from "./componenets/Into";
import Footer from "./componenets/footer";
import Portfolio from "./componenets/Portfolio";
import Services from "./componenets/Services";
import Aboutme from "./componenets/Aboutus";
import ContactForm from "./componenets/ContactForm";


import Work from "./componenets/Work";
import Count from "./componenets/Count";
import Team from "./componenets/Team";
import Loader from "./componenets/Loader";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (e.g., data fetching)
    setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 500);
  }, []);

  const aboutusRef = useRef(null);
 
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-slate-300">
        
          <Navbar aboutusRef={aboutusRef}  />
          <Into />
          <div className="bg-gray-50 ">
          <Services/>

          <div  ref={aboutusRef} >
          <Aboutme/>
          </div>
          </div>
          <Portfolio />
          <Count />
          <Work />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
