import React from "react";

import "./app.css";

import Header from "./components/header/header";
import Home from "./components/pages/home/home";
import Projects from "./components/pages/projects/projects";
import Habilities from "./components/pages/contents/habilities";
import About from "./components/pages/contents/about";
import Footer from "./components/pages/footer/footer";
import Contact from "./components/pages/contact/contact.jsx"


function App() {
  return (
    <div className="Principal">
      <section className="Section" id="home">
        <Header />
        <Home />
      </section>
      <section className="Section" id="projects">
        <Projects />
      </section>
      <section className="Section" id="habilities">
        <Habilities />
      </section>
      <section className="Section" id="about">
        <About />
      </section>
      <section className="Section" id="contact">
        <Contact/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
