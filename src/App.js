import { createGlobalStyle } from "styled-components";
import Nav from "./components/navigation/Nav";
import TechShowcase from "./components/techStack/TechShowcase";
import ContactForm from "./components/form/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  // disable: 'phone'
});

//data-aos="fade-up"

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Roboto', sans-serif;
  font-size: 62.5%;  
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
body{
  font-size: 1.6rem;
  margin: 0;
  background-color: #FFFAFA;
}`;

function App() {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <GlobalStyle />
      <Nav />
      <TechShowcase />
      <ContactForm />
    </div>
  );
}

export default App;
