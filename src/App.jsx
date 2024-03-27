import About from "./about/About"
import Contact from "./contact/Contact"
import Hero from "./hero/Hero"
import Navbar from "./navbar/Navbar"
import Projects from "./projects/Projects"
import Services from "./services/Services"
import Skills from "./skills/Skills"



function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact/>
   
    </>
  )
}

export default App
