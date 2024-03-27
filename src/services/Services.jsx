import React from 'react';
import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa'; // Import relevant icons
import './serve.css'; // Import CSS file for additional styling

const Services = () => {
  return (
    <div className="container mx-auto text-center mt-5">
      <div className="services">
        <h3 className="services-heading text-white fw-bold">My Services</h3>
        <div className="services-grid">
          {/* Frontend Development */}
          <div className="service-item">
            <FaCode className="service-icon" />
            <h4 className="service-title">Frontend Development</h4>
            <p className="service-description">Crafting unique and responsive websites tailored to your needs through HTML, CSS, Bootstrap, Tailwind CSS, React, and JavaScript.</p>
          </div>
          {/* Backend Development */}
          <div className="service-item">
            <FaServer className="service-icon" />
            <h4 className="service-title">Backend Development</h4>
            <p className="service-description">Building robust server-side applications using Node.js, Express, MongoDB, PHP, and Laravel.</p>
          </div>
          {/* Full Stack Web Development */}
          <div className="service-item">
            <FaLaptopCode className="service-icon" />
            <h4 className="service-title">Full Stack Web Development</h4>
            <p className="service-description">Creating end-to-end solutions with frontend and backend technologies combined, ensuring seamless user experiences and efficient server operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

