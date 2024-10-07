import React, { useRef, useState } from 'react';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');

        const formData = new FormData(event.target);
        formData.append("access_key", "c558cba0-6e5c-45f8-a4e0-5b968c529995");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const data = await res.json();
            
            if (data.success) {
                setMessage(<div className='flex items-center gap-2'>
                
                <span>Message sent successfully  </span>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-6  iconn'><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>
                </div>);
                setMessageType('success');  
            } else {
                setMessage('Failed to send message. Please try again.😞');
                setMessageType('error');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
            setMessageType('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form ref={form} onSubmit={onSubmit} className="text-white contactcard">
                <div className="px-5 py-24">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="font-semibold text-6xl italic font-serif title-font mb-4 text-white">
                            Contact Us
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-white">
                            For more feel free to contact us
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-xl">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        style={{ color: 'white' }}
                                        className="w-full bg-gray-500 rounded border border-gray-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:border-[#3498db] focus:ring-0"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-xl">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        style={{ color: 'white' }}
                                        className="w-full bg-gray-500 rounded border border-gray-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:border-[#3498db] focus:ring-0"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-xl text-white">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        style={{ color: 'white' }}
                                        className="w-full bg-gray-500 rounded border border-gray-500 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out h-56 focus:border-[#3498db] focus:ring-0"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    type='submit'
                                    className="focus:ring-4 focus:ring-gray-500 getin transition-transform duration-300 hover:scale-105 focus:outline-none flex items-center gap-4 font-sans mx-auto text-white border-0 py-2 px-12 rounded text-lg"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <FontAwesomeIcon icon={faSpinner} spinPulse />
                                    ) : (
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    )}
                                    {loading ? 'Sending...' : 'Send'}
                                </button>
                                {message && (
                                    <div className={`mt-4 text-lg ${messageType === 'success' ? 'text-orange-700' : 'text-red-600'}`}>
                                        {message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <hr />
        </div>
    );
};

export default ContactForm;
