import React, { useState, useEffect } from 'react';
import './Projects.css';
import foodImage from '../../assets/food-website.png';
import medicalImage from '../../assets/medical-website.png';
import moviesImage from '../../assets/movies-website.png';
// --- Projects Data ---
const projects = [
  {
    title: "Movies website",
    description: "React & Appwrite",
    imageUrl: moviesImage,
    category: "web",
    projectLink: "https://movie-app-c8pp.onrender.com"
  },
  {
    title: "Food service website",
    description: "React & Node.js",
    imageUrl: foodImage,
    category: "web",
    projectLink: "https://spongyfood.onrender.com"
  },
  {
    title: "Medical website",
    description: "Next.js & Tailwind CSS",
    imageUrl: medicalImage,
    category: "web",
    projectLink: "https://medegypt-care-hub.onrender.com"
  }
];

const Projects = () => {
  const [webCurrentIndex, setWebCurrentIndex] = useState(0);

  const webProjects = projects.filter(p => p.category === 'web');



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

  const handleCardClick = (index, project, currentIndex, setIndex, totalItems) => {
    if (index === currentIndex) {
      // Card is already in center, open project link
      window.open(project.projectLink, '_blank');
    } else {
      // Card is not in center, bring it to front
      updateCarousel(index, 'web', setIndex, totalItems);
    }
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
              onClick={() => handleCardClick(index, project, currentIndex, setIndex, categoryProjects.length)}
            >
              <img src={project.imageUrl} alt={project.title} />
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-link">Click to Visit</div>
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

      {renderCarousel(webProjects, webCurrentIndex, setWebCurrentIndex, "Web Development Projects")}
    </div>
  );
};

export default Projects;