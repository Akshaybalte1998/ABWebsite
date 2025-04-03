import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserInterface from './components/UserInterface/UserInterface';
import Services from './components/UserInterface/Services';
import Portfolio from './components/UserInterface/Portfolio';
import Contact from './components/UserInterface/Contact';
import Skills from './components/UserInterface/Skills';
import Project from './components/UserInterface/Project';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <UserInterface />
        </section> 
        <section id="services">
          <Services />
        </section>
       
        <section id="skills">
          <Skills />
        </section>
        <section id="Project">
          <Project />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
