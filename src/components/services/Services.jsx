import React, { useRef } from 'react'
import './Services.css'
// import theme_pattern from '../../assets/theme_pattern.svg'

const Services = () => {

    const h1Ref = useRef(null);

    const handleMouseMove = (e) => {
        if(!h1Ref.current) return;

        const rect = h1Ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        const percentage = (x / width) * 100;
        h1Ref.current.style.setProperty('--mouse-x', `${percentage}%`);
    }


  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1 ref={h1Ref} onMouseMove={handleMouseMove}>My Services</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="services-container">
        <div className="services-format">
            <h3>01</h3>
            <h2>Web Design</h2>
            <p>Creating visually stunning and user-friendly interfaces that captivate audiences. I focus on modern design principles and responsive layouts.</p>
            <div className="services-readmore">
                {/* <img src={arrow_icon} alt="" /> */}
            </div>
        </div>
        <div className="services-format">
            <h3>02</h3>
            <h2>Frontend Development</h2>
            <p>Building interactive user interfaces using React, JavaScript, and modern CSS frameworks for seamless functionality across all devices.</p>
            <div className="services-readmore">
                {/* <img src={arrow_icon} alt="" /> */}
            </div>
        </div>
        <div className="services-format">
            <h3>03</h3>
            <h2>Backend Development</h2>
            <p>Developing robust server-side applications and APIs using Node.js and Express to create scalable solutions for web applications.</p>
            <div className="services-readmore">
                {/* <img src={arrow_icon} alt="" /> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services