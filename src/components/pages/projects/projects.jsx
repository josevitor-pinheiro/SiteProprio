/* eslint-disable jsx-a11y/anchor-has-content */
import "./projects.css";

import arrows from "../../../images/arrow.png";

import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    const obserever = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log("observado", entries);
        entries[0].target.classList.add("vizualizado");
      }
    });
    obserever.observe(document.querySelector(".big-container"));
  });

  return (
    <div className="big-container">
      <div className="medium-container">
        <div className="small-container" >
          <a
            href="https://glittering-mousse-40a63b.netlify.app"
            target="_"
            id="calculadora"
          />
        </div>
        <div className="small-container">
          <a
            href="https://jade-kringle-384320.netlify.app"
            target="_"
            id="instagram"
          />
        </div>
        <div className="small-container" id="site-generico">
          <a
            href="https://josevitor-pinheiro.github.io/Site-Generico/"
            target="_"
            id="site"
          />
        </div>
        <div className="small-container" id="futuramente"></div>
        <div className="small-container" id="futuramente-apagar"></div>
        <div className="small-container" id="futuramente-apagar"></div>
      </div>
      <div id="arrow">
        <a href="#habilities"></a>
      </div>
    </div>
  );
}
