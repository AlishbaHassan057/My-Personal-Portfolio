import React, { useState, useEffect } from 'react';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);

  useEffect(() => {
    // Simulating progress increment from 0 to 100 on page load for each skill
    const htmlInterval = setInterval(() => {
      if (htmlProgress < 90) {
        setHtmlProgress(htmlProgress + 1);
      } else {
        clearInterval(htmlInterval);
      }
    }, 30);

    const cssInterval = setInterval(() => {
      if (cssProgress < 75) {
        setCssProgress(cssProgress + 1);
      } else {
        clearInterval(cssInterval);
      }
    }, 30);

    const jsInterval = setInterval(() => {
      if (jsProgress < 50) {
        setJsProgress(jsProgress + 1);
      } else {
        clearInterval(jsInterval);
      }
    }, 30);

    const reactInterval = setInterval(() => {
      if (reactProgress < 25) {
        setReactProgress(reactProgress + 1);
      } else {
        clearInterval(reactInterval);
      }
    }, 30);

    return () => {
      clearInterval(htmlInterval);
      clearInterval(cssInterval);
      clearInterval(jsInterval);
      clearInterval(reactInterval);
    };
  }, [htmlProgress, cssProgress, jsProgress, reactProgress]);

  return (
    <div className="container w-75 my-5">
      <h2 className='fw-bold text-center my-5'>My Expertise</h2>
      <div className="row">
        <div className="col-lg-6">
                  <h3 className='fw-bold
          '>Technical Skills</h3>
        <div className="">
  <IoLogoHtml5 size={30} />
  <h6 className='my-2'>HTML</h6>
  <div className="progress" style={{ height: '11px', width: '55%' }}>
    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${htmlProgress}%` }} aria-valuenow={htmlProgress} aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
          <div className="my-2">
            <IoLogoCss3 size={30} />
            <h6>CSS</h6>
            <div className="progress" style={{ height: '11px', width: '55%' }}>
              <div className="progress-bar bg-success" role="progressbar" style={{ width: `${cssProgress}%` }} aria-valuenow={cssProgress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="my-2">
            <IoLogoJavascript size={30} />
            <h6>JavaScript</h6>
            <div className="progress" style={{ height: '11px', width: '55%' }}>
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${jsProgress}%` }} aria-valuenow={jsProgress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="my-2">
            <IoLogoReact size={30} />
            <h6>React</h6>
            <div className="progress" style={{ height: '11px', width: '55%' }}>
              <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${reactProgress}%` }} aria-valuenow={reactProgress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        
        {/* PROFESSIONAL SKILLS */}
        <div className="col-lg-6">
          <div className="d-flex justify-content-between">
            <div>
              <h3>Creativity</h3>
              <div style={{ width: '120px', height: '120px' }}>
                <CircularProgressbar value={75} text={`${75}%`} strokeWidth={10} styles={{ path: { stroke: '#007bff' }}} />
              </div>
            </div>
            <div>
              <h3>Communication</h3>
              <div style={{ width: '120px', height: '120px' }}>
                <CircularProgressbar value={85} text={`${85}%`} strokeWidth={10} styles={{ path: { stroke: '#007bff' }}} />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div>
              <h3>Teamwork</h3>
              <div style={{ width: '120px', height: '120px' }}>
                <CircularProgressbar value={90} text={`${90}%`} strokeWidth={10} styles={{ path: { stroke: '#007bff' }}} />
              </div>
            </div>
            <div>
              <h3>Problem Solving</h3>
              <div style={{ width: '120px', height: '120px' }}>
                <CircularProgressbar value={80} text={`${80}%`} strokeWidth={10} styles={{ path: { stroke: '#007bff' }}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

               
