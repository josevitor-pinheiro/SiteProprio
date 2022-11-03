import React from "react";

import "./home.css";

import arrows from "../../../images/arrows-50.png";

export default function Home() {
  return (
    <div className="home-container">
      Home
      <span>José Vitor Pinheiro</span>
      <span>Programador apaixonado por tecnologia</span>
      <img src={arrows} alt="ArrowsDown" />
    </div>
  );
}
