import React, { useState } from "react";
import { GlobalStyle } from "./utils/reuseableStyles";
import Nav from "./components/navigation/Nav";
import AnimatedIcon from "./components/reactIcon/AnimatedIcon";
import TechShowcase from "./components/techStack/TechShowcase";
import ContactForm from "./components/form/ContactForm";
import ProjectShowcase from "./components/projects/ProjectShowcase";
import Footer from "./components/foot/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { getInitialMode } from "./components/navigation/darkMode/DarkMode";
import { ModeContext } from "./components/navigation/darkMode/ModeContext";

AOS.init({
   disable: 'phone'
});

function App() {

  const [mode, setMode] = useState(getInitialMode);

  return (
      
    <ModeContext.Provider value={{mode, setMode}} >
    <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <GlobalStyle mode={mode} />
          <Nav />
          <AnimatedIcon />
          <TechShowcase />
          <ProjectShowcase />
          <ContactForm />
          <Footer />
        </div>
      </ModeContext.Provider>
      
  );
}

export default App;
