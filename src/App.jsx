import Header from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Projects from "./components/projects/projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
