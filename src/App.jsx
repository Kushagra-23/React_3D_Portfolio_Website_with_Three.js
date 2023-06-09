import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Who from "./Components/Who";
import Works from "./Components/Works";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url('./img/bg.jpeg');
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`


function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
