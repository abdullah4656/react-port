import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import background from "../assets/dot-bg.png";
import { NavLink } from 'react-router-dom';
const ContactForm = () => {
  // State to manage loading, success, and error messages
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the submission starts
    setIsError(false); // Reset error state before making a request
    setIsSubmitted(false); // Reset success state before making a request

    const formData = new FormData(event.target);

    formData.append("access_key", "3068d166-a6ee-4b65-9d57-6e112b886095");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setIsSubmitted(true); // Set success state to true if successful
      } else {
        setIsError(true); // Set error state if submission is unsuccessful
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsError(true); // Set error state if an exception occurs
    } finally {
      setIsLoading(false); // Set loading to false when the submission completes
    }
  };

  return (
    <>
    <Navbar/>
      <div>
        <div className="team flex justify-between items-center gap-5 p-5 mq-contact-form">
          <div>
            <h1 className="text-blue-600 font-semibold text-5xl p-5">
              Contact with CodeEssence IT Experts.
            </h1>
            <p className="text-xl p-5 font-sans text-gray-600 font-medium">
              Discuss your ideas, projects, and collaborations with us. Let's explore how CodeEssence can assist you in achieving your goals.
            </p>
            <div className="flex gap-10 items-start">
            <NavLink
                  to="/about"
                  className="text-blue-600 button mq-buttons w-1/3 h-12 flex items-center justify-center text-lg font-sans font-bold rounded-md bg-white button-white"
                >
                  <span>About us</span>
                </NavLink>
            <a  className='bg-blue-600 mq-buttons hover:bg-blue-800 w-1/3 flex items-center justify-center h-12 text-lg font-sans font-bold  rounded-md text-white button-blue ' target="_blank"  href="tel:+923186840896">Call Now<span></span></a>
            </div>
          </div>
          
          <img className="w-1/2 mq-team-img" src="images/home-font-2.png" alt="" />
        </div>

        <div className="team">
        <h2 className='flex  justify-center text-5xl font-extrabold m-10' style={{ color: '#404040'}}>Contact Us</h2>

          <div className="p-8 rounded-lg max-w-4xl mx-auto my-12">
            <h1 className="text-center text-gray-600 uppercase font-bold text-sm">Let's Talk</h1>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border border-gray-300 rounded-md p-4 focus:outline-none focus:border-blue-500 shadow"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border border-gray-300 rounded-md p-4 focus:outline-none focus:border-blue-500 shadow"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="border border-gray-300 rounded-md p-4 focus:outline-none focus:border-blue-500 shadow w-full h-44"
              />

              <div className="flex justify-center">
                <div className="g-recaptcha" data-sitekey="your-site-key"></div> {/* Add your reCAPTCHA here */}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300"
                  disabled={isLoading} // Disable button when loading
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="loader mr-2"></div> Sending...
                    </div>
                  ) : (
                    <div className='flex justify-between items-center gap-3 '>
                  <div className='text-lg font-semibold'>Send Message </div>
                    <svg className='w-5 ' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
</div>
                  )}
                </button>
              </div>

            </form>

            {/* Error message after form submission failure */}
            {isError && (
              <div className="text-center text-red-600 font-semibold text-lg mt-8">
                Something went wrong. Your message was not sent. Please try again.
              </div>
            )}

            {/* Success message after form submission */}
            {isSubmitted && (
              <div className="text-center text-green-600 font-semibold text-lg mt-8">
                Thank you for reaching out! Your message has been successfully sent.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inline CSS for Loader Spinner */}
      <style jsx>{`

       .button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    overflow: hidden;  
    text-align: center;
    /* Text color matching 'text-blue-600' */
    background-color: white;  /* Initial background color */
    border-radius: 8px;  /* Matches 'rounded-md' */
    transition: color 0.3s ease;  /* Text color transition */
}
.button-white {
  
  cursor: pointer;               
  transition: background-color 0.4s, color 0.4s,  box-shadow 0.4s; 
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
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


          .team{
         background-image: url(${background});
  }
        
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <Footer/>
    </>
  );
};

export default ContactForm;
