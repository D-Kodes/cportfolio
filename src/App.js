import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;