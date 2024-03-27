import React from 'react';
import './contact.css'; 
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container-fluid footer mt-5">
      <div className="container w-75 mx-auto">
        <div className="row align-items-center justify-content-around">
          <div className="col-lg-6">
            <div className="contactinfo">
              <h1 className='my-5 fw-bolder'>Contact Information</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contacts">
              <div className="row align-items-center justify-content-around gap-0">
                <div className="col-2">
                  <MdContactPhone size={30} />
                </div>
                <div className="col-10">
                  <a href="tel:+923331580041">+923331580041</a>
                </div>
              </div>
              {/* Email */}
              <div className="row align-items-center justify-content-around gap-0 my-3">
                <div className="col-2">
                  <MdEmail size={30}/>
                </div>
                <div className="col-10">
                  <a href="mailto:alishbahassan057@gmail.com">alishbahassan057@gmail.com</a>
                </div>
              </div>
              {/* Github */}
              <div className="row align-items-center justify-content-around gap-0 my-3">
                <div className="col-2">
                  <FaGithub size={30}/>
                </div>
                <div className="col-10">
                  <a href="https://github.com/AlishbaHassan057" target="_blank" rel="noopener noreferrer">https://github.com/AlishbaHassan057</a>
                </div>
              </div>
              {/* Linkedin */}
              <div className="row align-items-center justify-content-around gap-0 my-3">
                <div className="col-2">
                  <FaLinkedin size={30}/>
                </div>
                <div className="col-10">
                  <a href="https://www.linkedin.com/in/alishba-hassan-846965291" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/alishba-hassan-846965291</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
