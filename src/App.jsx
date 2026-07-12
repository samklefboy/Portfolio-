import Header from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import AboutMe from "./components/About";
import Projects from "./components/projects/projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
