import React, { useState, useEffect } from 'react'
import './Hero.css'
import hero from '../../assets/profile-img.jpg'

const skills = [
  "system design",
  "project management",
  "UI/UX design",
  "agile development",
  "team management",
  "data analysis",
  "Git & GitHub"
];

const languages = [
  "JavaScript",
  "React.js",
  "Angular",
  "Next.js",
  "TypeScript",
  "Redux",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Python"
];

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const skillsInterval = setInterval(() => {
      setCurrentSkillIndex(prev => (prev + 1) % skills.length);
    }, 3000);
    const languagesInterval = setInterval(() => {
      setCurrentLanguageIndex(prev => (prev + 1) % languages.length);
    }, 2500);
    return () => {
      clearInterval(skillsInterval);
      clearInterval(languagesInterval);
    };
  }, []);

  const updateSkillsCarousel = (newIndex) => {
    const totalSkills = skills.length;
    const adjustedIndex = (newIndex + totalSkills) % totalSkills;
    setCurrentSkillIndex(adjustedIndex);
  };

  const updateLanguagesCarousel = (newIndex) => {
    const totalLanguages = languages.length;
    const adjustedIndex = (newIndex + totalLanguages) % totalLanguages;
    setCurrentLanguageIndex(adjustedIndex);
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

  const getLanguageCardClassName = (index) => {
    const totalLanguages = languages.length;
    let diff = index - currentLanguageIndex;

    if (diff < -totalLanguages / 2) diff += totalLanguages;
    if (diff > totalLanguages / 2) diff -= totalLanguages;

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
              <div className="hero-resume" onClick={() => window.open('../../assets/my-resume.docx', '_blank')}>My Resume</div>
          </div>
        </div>

        
        <div className="hero-content">
          <h1>Hello, I'm <span>Mahmoud Eltohamy</span>, web developer & designer</h1>
          <h2 className="hero-description">
            I'm a : <br/>
            <div className='hero-paragraphs'>
                <p className='hero-paragraph'>Full stack web developer with a focus on React JS, HTML, CSS, and JavaScript,</p>
                <p className='hero-paragraph'>a UI/UX designer with a keen eye for detail and user experience.</p>
            </div>
          </h2>
          {/* <h3 className="hero-live">I live in Egypt, and I'm 24 years old</h3> */}
        </div>
      </div>
      <div className="hero-skills">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-container skills-variant">
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
      <div className="hero-skills">
        <h2 className="skills-title">Languages & Frameworks & Liberaries</h2>
        <div className="skills-container">
          {languages.map((language, index) => (
            <div
              key={index}
              className={`skill-card ${getLanguageCardClassName(index)}`}
              onClick={() => updateLanguagesCarousel(index)}
            >
              {language}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero