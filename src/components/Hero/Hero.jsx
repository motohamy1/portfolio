import React, { useState, useEffect } from 'react'
import './Hero.css'
import hero from '../../assets/profile-img.jpg'

const skills = [
  "JavaScript",
  "React JS",
  "HTML & CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Git & GitHub"
];

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex(prev => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const updateSkillsCarousel = (newIndex) => {
    const totalSkills = skills.length;
    const adjustedIndex = (newIndex + totalSkills) % totalSkills;
    setCurrentSkillIndex(adjustedIndex);
  };

  const getSkillCardClassName = (index) => {
    const totalSkills = skills.length;
    let diff = index - currentSkillIndex;

    if (diff < -totalSkills / 2) diff += totalSkills;
    if (diff > totalSkills / 2) diff -= totalSkills;

    switch (diff) {
      case 0: return "center";
      case 1: return "right-1";
      case -1: return "left-1";
      case 2: return "right-2";
      case -2: return "left-2";
      default: return "hidden";
    }
  };

  return (
    <div id='hero' className='hero'>
      <div className="hero-top-section">
        <div className="hero-left-column">
          <img src={hero} alt="hero" className='hero-img' />
          <div className="hero-action">
              <div className="hero-connect">Connect with me</div>
              <div className="hero-resume">My Resume</div>
          </div>
        </div>

        
        <div className="hero-content">
          <h1>Hello, I'm <span>Mahmoud Eltohamy</span>, web developer & designer, and a video editor</h1>
          <h2 className="hero-description">
            I'm a : <br/>
            <div className='hero-paragraphs'>
                <p className='hero-paragraph'>Full stack web developer with a focus on React JS, HTML, CSS, and JavaScript,</p>
                <p className='hero-paragraph'>a UI/UX designer with a keen eye for detail and user experience,</p>
                <p className='hero-paragraph'>AI Automation specialist with expertise in automating tasks using AI tools,</p>
                <p className='hero-paragraph'>video editor with a passion for creating beautiful and creative videos.</p>
            </div>
          </h2>
          {/* <h3 className="hero-live">I live in Egypt, and I'm 24 years old</h3> */}
        </div>
      </div>
      <div className="hero-skills">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card ${getSkillCardClassName(index)}`}
              onClick={() => updateSkillsCarousel(index)}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero