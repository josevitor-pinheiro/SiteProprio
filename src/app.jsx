import React from "react";

import "./app.css";

import Header from "./components/header/header";
import Home from "./components/pages/home/home";
import Projects from "./components/pages/projects/projects";
import Habilities from "./components/pages/habilities/habilities";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact.jsx";

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
        <Contact />
      </section>
    </div>
  );
}

export default App;
