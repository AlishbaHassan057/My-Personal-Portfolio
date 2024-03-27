import React from 'react';
import './about.css'
const About = () => {
  return (
    <section className="container about mx-auto" id="about">
    <h2 className='me fw-bold'>About Me</h2>
        <h4>Full MERN Stack Web Developer!</h4>
        <p className="col-lg-8 t">
          As a skilled freelance web developer with a year of hands-on experience, I specialize in both frontend and backend technologies. I excel in crafting visually appealing and user-friendly interfaces using HTML, CSS, and Bootstrap, while also leveraging JavaScript frameworks like React and Redux for dynamic client-side functionality. On the backend, I'm proficient in utilizing MongoDB for database management and Node.js with Express.js for server-side operations. Additionally, I've worked on projects utilizing Laravel, showcasing my versatility across different platforms. With a passion for problem-solving and a commitment to quality, I thrive on delivering innovative solutions tailored to meet the unique needs of each project.
        </p>
        {/* <a href="#" className="btn-box">More About Me</a> */}
     
    </section>
  );
};

export default About;
