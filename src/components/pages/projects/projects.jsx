/* eslint-disable jsx-a11y/anchor-has-content */
import "./projects.css";

export default function Projects() {
  return (
    <div className="big-container">
      <div className="medium-container">
        <div className="small-container">
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
        <div className="small-container">
          <a
            href="https://josevitor-pinheiro.github.io/Site-Generico/"
            target="_"
            id="site"
          />
        </div>
      </div>
      <div className="medium-container">
        <div className="small-container" id="futuramente"></div>
        <div className="small-container" id="futuramente"></div>
        <div className="small-container" id="futuramente"></div>
      </div>
    </div>
  );
}
