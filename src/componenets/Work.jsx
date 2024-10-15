import React from 'react';

const Work = () => {
  return (
    <>
      <div className="bg-slate-900 text-white">
      <h3 className='flex justify-center text-5xl font-medium p-8 text-gray-800'>Our Services</h3>
        <p className="text-center mx-auto text-xl font-medium px-4 sm:px-8 lg:px-20   text-gray-800">
          Explore our streamlined, efficient approach to project management and how it ensures your success every step of the way.
        </p>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-20">
          {/* Card 1 */}
          <div className="h-full p-5 bg-slate-100 shadow-xl rounded-md text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 512 512"
              className="mb-4"
            >
              <g>
                <path
                  d="M236 336c0-33.57 20.687-62.292 50-74.163A79.746 79.746 0 0 0 256 256c-44.183 0-80 35.817-80 80 0 22.091 17.909 40 40 40h60c-22.091 0-40-17.909-40-40z"
                  fill="#cee1f2"
                ></path>
                <path
                  d="M296 376h-80c-22.091 0-40-17.909-40-40 0-44.183 35.817-80 80-80s80 35.817 80 80c0 22.091-17.909 40-40 40z"
                  fill="none"
                  stroke="#7b68ee"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle cx="256" cy="176" r="40" fill="none" stroke="#7b68ee" strokeWidth="40"></circle>
              </g>
            </svg>
            <h3 className="font-semibold text-xl mb-4">Discover</h3>
            <p className="text-gray-600">
              Our discovery phase is dedicated to understanding your vision, goals, and expectations to craft a precise project blueprint.
            </p>
          </div>

          {/* Card 2 */}
          <div className="h-full p-5 bg-slate-100 shadow-xl rounded-md text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 512 512"
              className="mb-4"
            >
              <g>
                <path
                  d="M236 420c0-9.935-5.439-19.09-14.198-23.779-72.477-38.793-118.37-120.733-102.752-211.648 13.529-78.756 75.602-143.727 153.824-160.064a215.935 215.935 0 0 1 12.925-2.284c-23.244-3.473-47.789-2.965-72.925 2.284C134.652 40.847 72.579 105.817 59.05 184.574c-15.631 90.993 30.354 172.995 102.938 211.747C170.637 400.939 176 409.985 176 419.79v.21c0 44.183 35.817 72 80 72 10.613 0 20.733-1.621 30-4.672-29.313-9.651-50-33.758-50-67.328z"
                  fill="#cee1f2"
                ></path>
                <path
                  d="m176 180-40 40 40 40M336 180l40 40-40 40M276 140l-40 160"
                  fill="none"
                  stroke="#ff9800"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <h3 className="font-semibold text-xl mb-4">Design & Development</h3>
            <p className="text-gray-600">
              With a blend of aesthetic design and cutting-edge development, we transform ideas into engaging digital experiences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="h-full p-5 bg-slate-100 shadow-xl rounded-md text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 512.004 512.004"
              className="mb-4"
            >
              <g>
                <path
                  d="M80 432.002v-352c0-33.137 26.863-60 60-60H80c-33.137 0-60 26.863-60 60v352c0 33.137 26.863 60 60 60h60c-33.137 0-60-26.863-60-60z"
                  fill="#cee1f2"
                ></path>
                <path
                  d="M432 492.002H80c-33.137 0-60-26.863-60-60v-352c0-33.137 26.863-60 60-60h352c33.137 0 60 26.863 60 60v352c0 33.137-26.863 60-60 60z"
                  fill="none"
                  stroke="#7b68ee"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <h3 className="font-semibold text-xl mb-4">Testing & Refinement</h3>
            <p className="text-gray-600">
              In our rigorous testing phase, every feature is refined to perfection, ensuring high performance and reliability.
            </p>
          </div>

          {/* Card 4 */}
          <div className="h-full p-5 bg-slate-100 shadow-xl rounded-md text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 512 512"
              className="mb-4"
            >
              <g>
                <path
                  d="M80 220c0-35.748 19.446-66.018 51.797-76.274 13.619-4.317 23.931-15.629 26.996-29.584 9.679-44.072 43.585-79.062 87.047-90.313A117.586 117.586 0 0 0 216 20c-57.397 0-105.382 40.296-117.207 94.142-3.065 13.955-13.376 25.267-26.996 29.584C39.446 153.982 20 184.252 20 220c0 44.182 31.818 80 76 80h60c-44.182 0-76-35.818-76-80z"
                  fill="#cee1f2"
                ></path>
                <path
                  d="M376 412v40c0 22.091-17.909 40-40 40H176c-22.091 0-40-17.909-40-40v-40M336 300h80c44.182 0 76-35.818 76-80 0-36.099-19.908-66.611-52.752-76.57a40.041 40.041 0 0 1-26.684-26.697C402.599 83.897 372.09 60 336 60c-3.03 0-6.008.197-8.933.564a40.02 40.02 0 0 1-31.72-9.938C274.253 31.684 246.601 20 216 20c-57.397 0-105.382 40.296-117.207 94.142-3.065 13.955-13.376 25.267-26.996 29.585C39.446 153.982 20 184.252 20 220c0 44.182 31.818 80 76 80h80"
                  fill="none"
                  stroke="#7b68ee"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <h3 className="font-semibold text-xl mb-4">Launch & Support</h3>
            <p className="text-gray-600">
              Experience a seamless project delivery that not only meets deadlines but also provides continuous support post-launch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
