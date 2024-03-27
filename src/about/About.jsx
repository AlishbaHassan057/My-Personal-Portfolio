import React from 'react';
import './about.css';
import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa'; 

const About = () => {
  return (
    <div className="container mx-auto w-75">
  <h2 className='me fw-bold'>About Me</h2>
            <h4 className='fw-bold'>MERN Stack Developer!</h4>
           <div className="row">
        <div className="col-lg-8 mb-2 mt-2">
          <div className="card about-card text-white border-white">
            <div className="d-flex flex-row align-items-center gap-4 p-3">
            {/* part-1 */}
              <div className="icons">
                <FaCode className="service-icon"  size={40}/>
              </div>
          {/* PART-2 */}
            <div className="de">
            <div className="f">
              <h3>Frontend Developer</h3>
              </div>
           <div className="front ">
              As a skilled developer, I specialize in crafting responsive and optimized websites using a wide range of technologies including HTML, CSS, Bootstrap, Tailwind CSS, React, and JavaScript.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Backend */}
        
         <div className="col-lg-8 mb-2 mt-2">
          <div className="card about-card text-white border-white">
            <div className="d-flex flex-row align-items-center gap-4 p-3">
            {/* part-1 */}
              <div className="icons">
                <FaServer className="service-icon"  size={40}/>
              </div>
          {/* PART-2 */}
            <div className="de">
            <div className="f">
              <h3>Backend Developer</h3>
              </div>
           <div className="front ">
            With a focus on backend development, I have expertise in building fast and efficient server-side applications and APIs using technologies such as Node.js, Express, MongoDB, PHP, and Laravel.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FULL */}

         <div className="col-lg-8 mb-2 mt-2">
          <div className="card about-card text-white border-white">
            <div className="d-flex flex-row align-items-center gap-4 p-3">
            {/* part-1 */}
              <div className="icons">
                <FaLaptopCode  className="service-icon"  size={40}/>
              </div>
          {/* PART-2 */}
            <div className="de">
            <div className="f">
              <h3>MERN Stack Developer</h3>
              </div>
           <div className="front ">
             I am proficient in the MERN stack, enabling me to create comprehensive solutions that seamlessly integrate frontend and backend technologies, ensuring exceptional user experiences and streamlined server operations.
                </div>
              </div>
            </div>
          </div>
        </div>


   
      </div>
  
    </div>
  );
};

export default About;


