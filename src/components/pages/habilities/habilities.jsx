import React from "react";
import { useEffect } from "react";

import "./habilites.css";

import css from "./images/css.png";
import html from "./images/html.png";
import git from "./images/github.png";
import node from "./images/node.png";
import react from "./images/react.png";
import next from "./images/next.png";
import JS from "./images/JS.jfif";
import Vue from "./images/vue.png";

export default function Habilities() {
  useEffect(() => {
    const obserever = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log("observado", entries);
        entries[0].target.classList.add("vizualizado");
      }
    });
    obserever.observe(document.querySelector(".big-container-hab"));
  });
  return (
    <div className="big-container-hab">
      <div className="medium-container-hab">
        <div id="small-container-hab">
          <img src={html} alt="html-png" className="img-hab" />
          <img src={css} alt="css-png" className="img-hab" />
          <img src={JS} alt="JavaScript" className="img-hab" />
          <img src={react} alt="react-png" className="img-hab" />
          <img src={node} alt="node-png" className="img-hab" />
          <img src={next} alt="next-png" className="img-hab" />
          <img src={git} alt="git-png" className="img-hab" />
          <img src={Vue} alt="Vue-png" className="img-hab" />
        </div>
        <div id="small-container-text">
          <h2>
            Dominio em Html5, CSS e JavaScript, conhecimento aprofundado em
            ReactJS e NodeJS.
          </h2>
        </div>
        <div id="arrow-hab">
          <a href="#about" id="arrow-hab"></a>
        </div>
      </div>
    </div>
  );
}
