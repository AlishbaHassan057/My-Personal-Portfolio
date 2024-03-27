import React, { useEffect } from 'react';
import Typed from 'typed.js'; 


const Hero = () => {
  useEffect(() => {

    var typed = new Typed(".text", {
      strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });


    return () => {
      typed.destroy();
    };
  }, []); 
  return (
    <section className="home d-flex align-items-center justify-content-around">
      <div className="home-content">
        <h4>Hello, It's Me</h4>
        <h2>Alishba Hassan</h2>
        <h4>And I'm a <span className="text"></span></h4>
        <p>I am a freelance MERN Stack developer with one year of hands-on experience. <br />Expertise is to create and website design, Frontend design, and many more...<br /></p>
        <div className="home-sci">
          <a href="https://www.facebook.com/profile.php?id=100007176166902" style={{ '--i': 6 }}><i className="bi bi-facebook"></i></a>
          <a href="https://wa.me/923331580041" style={{ '--i': 7 }}><i className="bi bi-whatsapp"></i></a>
          <a href="https://github.com/AlishbaHassan057" style={{ '--i': 8 }}><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/alishba-hassan-846965291" style={{ '--i': 9 }}><i className="bi bi-linkedin"></i></a>
        </div>
        <a href="#" className="btn-box">Download CV</a>
      </div>
      <div className="imgs">
        <img src="../assets/me.png" alt="Home Image" className="home-img" />
      </div>
    </section>
  );
};

export default Hero;
