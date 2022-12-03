import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  return (
    <div className='scroll-smooth  scrollbar-track-pink-600/20 scrollbar-thumb-pink-600/80 scrollbar-thin'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
