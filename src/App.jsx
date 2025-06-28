import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/services/services";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

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
