import { createGlobalStyle } from 'styled-components';
import Nav from './components/navigation/Nav'
import TechShowcase from './components/techStack/TechShowcase'

const GlobalStyle = createGlobalStyle`
html {
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
   <>
   <GlobalStyle/>
     <Nav />
     <TechShowcase />
    
    </>
  );
}

export default App;
