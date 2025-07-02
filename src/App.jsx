import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/services/services.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default App;
