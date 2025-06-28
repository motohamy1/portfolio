import React, { useState } from 'react';
import './Projects.css';

// --- Projects Data ---
const projects = [
  {
    title: "Mobile Fitness App",
    description: "React Native",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop",
    category: "web",
    projectLink: "https://example.com/fitness-app",
    detailsLink: "https://example.com/fitness-app-details"
  },
  {
    title: "Task Management Tool",
    description: "React & Node.js",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
    category: "web",
    projectLink: "https://example.com/task-tool",
    detailsLink: "https://example.com/task-tool-details"
  },
  {
    title: "E-commerce Platform",
    description: "Shopify & Liquid",
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2942&auto=format&fit=crop",
    category: "web",
    projectLink: "https://example.com/ecommerce",
    detailsLink: "https://example.com/ecommerce-details"
  },
  {
    title: "Social Media App",
    description: "Vue & Firebase",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-6d22e4f13374?q=80&w=2874&auto=format&fit=crop",
    category: "web",
    projectLink: "https://example.com/social-app",
    detailsLink: "https://example.com/social-app-details"
  },
  {
    title: "Data Dashboard",
    description: "D3.js & Python",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    category: "ai",
    projectLink: "https://example.com/dashboard",
    detailsLink: "https://example.com/dashboard-details"
  },
  {
    title: "Portfolio Website",
    description: "Next.js & Tailwind CSS",
    imageUrl: "https://images.unsplash.com/photo-1559028004-bb5941ed748d?q=80&w=2874&auto=format&fit=crop",
    category: "web",
    projectLink: "https://example.com/portfolio",
    detailsLink: "https://example.com/portfolio-details"
  },
  {
    title: "AI Chatbot Integration",
    description: "Python & TensorFlow",
    imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8ba1?q=80&w=2940&auto=format&fit=crop",
    category: "ai",
    projectLink: "https://example.com/chatbot",
    detailsLink: "https://example.com/chatbot-details"
  },
  {
    title: "Automated Trading Bot",
    description: "Python & Machine Learning",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop",
    category: "ai",
    projectLink: "https://example.com/trading-bot",
    detailsLink: "https://example.com/trading-bot-details"
  },
  {
    title: "Video Editing Showcase",
    description: "Adobe Premiere Pro",
    imageUrl: "https://images.unsplash.com/photo-1587202372957-e47767114250?q=80&w=2940&auto=format&fit=crop",
    category: "video",
    projectLink: "https://example.com/video-showcase",
    detailsLink: "https://example.com/video-showcase-details"
  },
  {
    title: "Short Film Production",
    description: "DaVinci Resolve",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2940&auto=format&fit=crop",
    category: "video",
    projectLink: "https://example.com/short-film",
    detailsLink: "https://example.com/short-film-details"
  }
];

const Projects = () => {
  const [webCurrentIndex, setWebCurrentIndex] = useState(0);
  const [aiCurrentIndex, setAiCurrentIndex] = useState(0);
  const [videoCurrentIndex, setVideoCurrentIndex] = useState(0);

  const webProjects = projects.filter(p => p.category === 'web');
  const aiProjects = projects.filter(p => p.category === 'ai');
  const videoProjects = projects.filter(p => p.category === 'video');

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
        <button className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1, categoryName, setIndex, categoryProjects.length)}>
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
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                )}
                {project.detailsLink && (
                  <a href={project.detailsLink} target="_blank" rel="noopener noreferrer" className="details-link">
                    More Info
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1, categoryName, setIndex, categoryProjects.length)}>
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

  return (
    <div className="projects-page">
      <h1 className="projects-title">MY PROJECTS</h1>

      {renderCarousel(webProjects, webCurrentIndex, setWebCurrentIndex, "Web Developer Projects")}
      {renderCarousel(aiProjects, aiCurrentIndex, setAiCurrentIndex, "AI Automation Projects")}
      {renderCarousel(videoProjects, videoCurrentIndex, setVideoCurrentIndex, "Video Editing Projects")}
    </div>
  );
};

export default Projects;