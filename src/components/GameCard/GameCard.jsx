import React from "react";
import { Link } from "react-router-dom";
import '../GameCard/GameCard.css';

const GameCard = ( props ) => {
  return(
    <div className="game-card-container">
      <h4>{props.title}</h4>
      <img src={props.src} alt={props.alt} />
        {props.description}
      <div className="game-btns-container">
        <a href={props.link} className="btn-a" target="_blank" rel="noreferrer">Descargar</a>
        <Link className="btn-a" to={props.navigate}>Ver Detalles</Link>
      </div>
    </div>
  )
};

export default GameCard;