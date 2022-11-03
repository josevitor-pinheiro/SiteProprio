import React from "react";

import "./header.css";

export default function Header() {
  return (
    <div className="Header-container">
      <div className="Buttons-container">
        <a href="#home">Inicio</a>
        <a href="#projects">Projetos</a>
        <a href="#habilities"> Habilidades</a>
        <a href="#about">Sobre mim</a>
        <a href="#contact">Contato</a>
      </div>
    </div>
  );
}
