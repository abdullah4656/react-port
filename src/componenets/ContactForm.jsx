import React, { useState } from 'react';

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
            <a className='text-blue-600 mq-buttons hover:bg-blue-600 hover:text-white w-1/3 h-12 flex items-center justify-center  text-lg font-sans font-bold  rounded-md bg-white button-white ' href="/contactus#contactus">Contact Us<span></span></a>
            <a className='bg-blue-600 mq-buttons hover:bg-blue-800 w-1/3 flex items-center justify-center h-12 text-lg font-sans font-bold  rounded-md text-white button-blue ' href="tel:+923035313249">Call Now<span></span></a>
            </div>
          </div>
          <img className="w-1/2 mq-team-img" src="images/home-font-2.png" alt="" />
        </div>

        <div className="team">
          <h3 className="flex justify-center text-5xl font-medium pt-10">Contact Us</h3>

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
                    "Send Message"
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
    </>
  );
};

export default ContactForm;
