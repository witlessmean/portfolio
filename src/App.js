import React, { useState } from "react";
import { GlobalStyle, theme } from "./utils/reuseableStyles";
import Nav from "./components/navigation/Nav";
import TechShowcase from "./components/techStack/TechShowcase";
import ContactForm from "./components/form/ContactForm";
import ProjectShowcase from "./components/projects/ProjectShowcase";
import AOS from "aos";
import "aos/dist/aos.css";
import { getInitialMode } from "./components/navigation/darkMode/DarkMode";
import { ThemeProvider } from "@material-ui/core/styles";
import { ModeContext } from "./components/navigation/darkMode/ModeContext";

AOS.init({
  // disable: 'phone'
});

//data-aos="fade-up"

function App() {

  const [mode, setMode] = useState(getInitialMode);

  return (
    // <ThemeProvider theme={theme}>
      <ModeContext.Provider value={{mode, setMode}} >
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <GlobalStyle mode={mode} />
          <Nav />
          <TechShowcase />
          <ProjectShowcase />
          <ContactForm />
        </div>
      </ModeContext.Provider>
    // </ThemeProvider>
  );
}

export default App;
