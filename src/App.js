import React, { useState } from 'react';
import { GlobalStyle, theme } from './utils/reuseableStyles';
import Nav from "./components/navigation/Nav";
import TechShowcase from "./components/techStack/TechShowcase";
import ContactForm from "./components/form/ContactForm";
import ProjectShowcase from "./components/projects/ProjectShowcase";
import storage from "local-storage-fallback";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from '@material-ui/core/styles';


AOS.init({
  // disable: 'phone'
});

//data-aos="fade-up"

function App() {

  const getInitialMode = () => {
    const savedMode = storage.getItem("mode");
    return savedMode ? JSON.parse(savedMode) : false;
  };
 
  const [mode, setMode] = useState(getInitialMode);

  return (
    <ThemeProvider theme={theme}>
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <GlobalStyle mode={mode} />
      <Nav mode={mode} setMode={setMode} />
      <TechShowcase />
      <ProjectShowcase />
      <ContactForm />
    </div>
    </ThemeProvider>

  );
}

export default App;

