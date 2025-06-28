import React, { useRef } from 'react'
import './services.css'
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
    <div className='services'>
      <div className="services-title">
        <h1 ref={h1Ref} onMouseMove={handleMouseMove}>My Services</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="services-container">
        <div className="services-format">
            <h3>01</h3>
            <h2>Web Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, provident.</p>
            <div className="services-readmore">
                {/* <img src={arrow_icon} alt="" /> */}
            </div>
        </div>
        <div className="services-format">
            <h3>02</h3>
            <h2>AI Automation</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, provident.</p>
            <div className="services-readmore">
                {/* <img src={arrow_icon} alt="" /> */}
            </div>
        </div>
        <div className="services-format">
            <h3>03</h3>
            <h2>Video Editing</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, provident.</p>
            <div className="services-readmore">
                {/* <img src={arrow_icon} alt="" /> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services