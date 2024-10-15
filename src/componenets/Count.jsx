import React, { useEffect, useState } from 'react';

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
    <div className='count mq-count  bg-slate-200 font-medium text-2xl text-white flex justify-around pb-20'>
      <div>
        <h1 className='font-sans'>{years} <span>+</span></h1>
        <h1>Years Helping Business</h1>
      </div>
      <div>
        <h1 className='font-sans'>{employees} <span>+</span></h1>
        <h1>Working Employees</h1>
      </div>
      <div>
        <h1 className='font-sans'>{projects} <span>+</span></h1>
        <h1>Complete Projects</h1>
      </div>
      <div>
        <h1 className='font-sans'>{satisfaction} <span>%</span></h1>
        <h1>Client Satisfaction</h1>
      </div>
      
    </div>
  );
};

export default Count;
