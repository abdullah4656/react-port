import React, { useEffect, useState } from 'react';
import background from "../assets/banner-bg.jpg";

const Count = () => {
  const [years, setYears] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const yearInterval = setInterval(() => {
      if (years < 4) setYears((prev) => prev + 1);
    }, 1000);

    const employeeInterval = setInterval(() => {
      if (employees < 15) setEmployees((prev) => prev + 1);
    }, 10);

    const projectInterval = setInterval(() => {
      if (projects < 50) setProjects((prev) => prev + 1);
    }, 20);

    const satisfactionInterval = setInterval(() => {
      if (satisfaction < 98) setSatisfaction((prev) => prev + 1);
    }, 20); // Faster for demonstration

    return () => {
      clearInterval(yearInterval);
      clearInterval(employeeInterval);
      clearInterval(projectInterval);
      clearInterval(satisfactionInterval);
    };
  }, [years, employees, projects, satisfaction]);

  return (
    <div className="count relative text-white text-center p-8 flex flex-col lg:flex-row justify-around items-center h-auto lg:h-64">
      <div className="mb-8 lg:mb-0">
        <h1 className='font-sans font-normal text-4xl'>{years} <span>+</span></h1>
        <h2 className="text-lg lg:text-xl">Years Helping Business</h2>
      </div>
      <div className="mb-8 lg:mb-0">
        <h1 className='font-sans text-4xl'>{employees} <span>+</span></h1>
        <h2 className="text-lg lg:text-xl">Working Employees</h2>
      </div>
      <div className="mb-8 lg:mb-0">
        <h1 className='font-sans text-4xl'>{projects} <span>+</span></h1>
        <h2 className="text-lg lg:text-xl">Complete Projects</h2>
      </div>
      <div>
        <h1 className='font-sans text-4xl'>{satisfaction} <span>%</span></h1>
        <h2 className="text-lg lg:text-xl">Client Satisfaction</h2>
      </div>

      {/* CSS style for the background and overlay */}
      <style jsx>{`
        .count {
          background-image: url(${background});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          z-index: 1;
          padding: 80px 20px;
        }
        
        .count::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
          background-color: #1f1f54;
        }
      `}</style>
    </div>
  );
};

export default Count;
