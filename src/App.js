import { createGlobalStyle } from 'styled-components';
import Nav from './components/navigation/Nav'
import TechShowcase from './components/techStack/TechShowcase'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  disable: 'phone'
});

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
}`



function App() {
  return (
   <div data-aos="fade-in" data-aos-duration="1000"
   data-aos-easing="ease-in-out" >
   <GlobalStyle/>
     <Nav />
     <TechShowcase />
    <div data-aos="fade-up" 
    style={{margin: '1500px', backgroundColor: "red", height: "400px", width: "400px"}}>dfgdf</div>
    </div>
  );
}

export default App;
