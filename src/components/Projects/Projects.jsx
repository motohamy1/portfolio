import React, { useState, useEffect } from 'react';
import './Projects.css';
import portfolioImage from '../../assets/portfoliowebsite.png';
import socialMediaImage from '../../assets/social-media.png';
import aiBotImage from '../../assets/ai-bot.png';
import videoEditingImage from '../../assets/video-editing.png';

// --- Projects Data ---
const projects = [
  {
    title: "Mobile Fitness App",
    description: "React Native",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop",
    category: "web",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "Task Management Tool",
    description: "React & Node.js",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
    category: "web",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "E-commerce Platform",
    description: "Shopify & Liquid",
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2942&auto=format&fit=crop",
    category: "web",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "Social Media App",
    description: "Vue & Firebase",
    imageUrl: socialMediaImage,
    category: "web",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "Data Dashboard",
    description: "D3.js & Python",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    category: "ai",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "Portfolio Website",
    description: "React.js & Tailwind CSS",
    imageUrl: portfolioImage,
    category: "web",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "AI Chatbot Integration",
    description: "Python & TensorFlow",
    imageUrl: aiBotImage,
    category: "ai",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "Automated Trading Bot",
    description: "Python & Machine Learning",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop",
    category: "ai",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "Video Editing Showcase",
    description: "Adobe Premiere Pro",
    imageUrl: videoEditingImage,
    category: "video",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "Short Film Production",
    description: "DaVinci Resolve",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2940&auto=format&fit=crop",
    category: "video",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  },
  {
    title: "Music Video Creation",
    description: "After Effects & Premiere",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2940&auto=format&fit=crop",
    category: "video",
    projectLink: "https://www.google.com/",
    detailsLink: "https://www.github.com/"
  }
];

const Projects = () => {
  const [webCurrentIndex, setWebCurrentIndex] = useState(0);
  const [aiCurrentIndex, setAiCurrentIndex] = useState(0);
  const [videoCurrentIndex, setVideoCurrentIndex] = useState(0);

  const webProjects = projects.filter(p => p.category === 'web');
  const aiProjects = projects.filter(p => p.category === 'ai');
  const videoProjects = projects.filter(p => p.category === 'video');

  // Auto-slideshow for each category
  useEffect(() => {
    const webInterval = setInterval(() => {
      setWebCurrentIndex(prev => (prev + 1) % webProjects.length);
    }, 2000);
    return () => clearInterval(webInterval);
  }, [webProjects.length]);

  useEffect(() => {
    const aiInterval = setInterval(() => {
      setAiCurrentIndex(prev => (prev + 1) % aiProjects.length);
    }, 2500);
    return () => clearInterval(aiInterval);
  }, [aiProjects.length]);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setVideoCurrentIndex(prev => (prev + 1) % videoProjects.length);
    }, 4000);
    return () => clearInterval(videoInterval);
  }, [videoProjects.length]);

  // Add state to store element dimensions for logging
  const [dimensions, setDimensions] = useState({});

  // Effect to log dimensions on mount and resize
  useEffect(() => {
    const logDimensions = () => {
      const projectsTitle = document.querySelector('.projects-title');
      const sectionTitles = document.querySelectorAll('.section-title');
      const navArrows = document.querySelectorAll('.nav-arrow');

      setDimensions({
        windowWidth: window.innerWidth,
        projectsTitleHeight: projectsTitle ? projectsTitle.offsetHeight : 'N/A',
        sectionTitleHeights: Array.from(sectionTitles).map(el => el.offsetHeight),
        navArrowPositions: Array.from(navArrows).map(el => ({
          left: el.offsetLeft,
          top: el.offsetTop,
          width: el.offsetWidth,
          height: el.offsetHeight
        }))
      });
    };

    logDimensions(); // Log initially
    window.addEventListener('resize', logDimensions); // Log on resize

    return () => window.removeEventListener('resize', logDimensions); // Cleanup
  }, []);

  const updateCarousel = (newIndex, category, setIndex, totalItems) => {
    const adjustedIndex = (newIndex + totalItems) % totalItems;
    setIndex(adjustedIndex);
  };

  const getCardClassName = (index, currentIndex, totalItems) => {
    let diff = index - currentIndex;

    if (diff < -totalItems / 2) diff += totalItems;
    if (diff > totalItems / 2) diff -= totalItems;

    switch (diff) {
      case 0: return "center";
      case 1: return "right-1";
      case -1: return "left-1";
      case 2: return "right-2";
      case -2: return "left-2";
      default: return "hidden";
    }
  };

  const renderCarousel = (categoryProjects, currentIndex, setIndex, categoryName) => (
    <section className="project-section">
      <h2 className="section-title">{categoryName}</h2>
      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => 
                updateCarousel(currentIndex - 1, categoryName, setIndex, categoryProjects.length)}>
          ‹
        </button>
        
        <div className="carousel-track">
          {categoryProjects.map((project, index) => (
            <div
              key={index}
              className={`card ${getCardClassName(index, currentIndex, categoryProjects.length)}`}
              onClick={() => updateCarousel(index, categoryName, setIndex, categoryProjects.length)}
            >
              <img src={project.imageUrl} alt={project.title} />
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.projectLink && (
                  <a href={project.projectLink} 
                      target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                )}
                {project.detailsLink && (
                  <a href={project.detailsLink} 
                      target="_blank" rel="noopener noreferrer" className="details-link">
                    More Info
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-arrow right" onClick={() => 
                updateCarousel(currentIndex + 1, categoryName, setIndex, categoryProjects.length)}>
          ›
        </button>
      </div>

      <div className="dots">
        {categoryProjects.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => updateCarousel(index, categoryName, setIndex, categoryProjects.length)}
          />
        ))}
      </div>
    </section>
  );

  // Log dimensions to console
  useEffect(() => {
    console.log("Current Dimensions:", dimensions);
  }, [dimensions]);

  return (
    <div id="projects" className="projects-page">
      <h1 className="projects-title">MY PROJECTS</h1>

      {renderCarousel(webProjects, webCurrentIndex, setWebCurrentIndex, "Web Developer Projects")}
      {renderCarousel(aiProjects, aiCurrentIndex, setAiCurrentIndex, "AI Automation Projects")}
      {renderCarousel(videoProjects, videoCurrentIndex, setVideoCurrentIndex, "Video Editing Projects")}
    </div>
  );
};

export default Projects;