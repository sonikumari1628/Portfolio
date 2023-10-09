import About from "./components/about/about";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer.jsx";


function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
