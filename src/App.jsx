import './App.css';
import Navbar from './componenets/Navbar';
import Into from './componenets/Into';
import Footer from './componenets/footer';
import Portfolio from './componenets/Portfolio';
import Services from './componenets/Services';
import Aboutme from './componenets/Aboutme';
import ContactForm from './componenets/ContactForm';

import { useRef } from 'react';
import Work from './componenets/Work';
import Count from './componenets/Count';
import Team from './componenets/Team';
import Loader from './componenets/Loader';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (e.g., data fetching)
    setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    },500);
  }, []);

  const contactFormRef = useRef(null);
  const Serviceformref = useRef(null);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='bg-slate-300'>
            <Navbar/>
            <Into/>
            <Services/>
          <Aboutme/>
            <Portfolio />

            <Count />
            <Work />
            <Footer />
        <ContactForm/>
          <Team />
        </div>
      )}
    </>
  );
}

export default App;
