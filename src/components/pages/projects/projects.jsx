import "./projects.css";

import calculadora from "./images-projects/Calculadora.png";
import instagram from "./images-projects/Instagram-copia.png";

export default function Projects() {
  return (
    <div className="medium-container">
      <div className="small-container">
        <a href="https://glittering-mousse-40a63b.netlify.app">
          <img src={calculadora} alt="Calculadora" />
          <h2>Calculadora</h2>
        </a>
      </div>
      <div className="small-container">
        <a href="https://glittering-mousse-40a63b.netlify.app">
          <img src={instagram} alt="Instagram" />
          <h2>Instagram</h2>
        </a>
      </div>
    </div>
  );
}
