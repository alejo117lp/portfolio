import React from "react";
import { Link } from "react-router-dom";
import '../game_card/gameCard.css';

const GameCard = ( props ) => {
  return(
    <div className="game-card-container">
      <h4>{props.title}</h4>
      <img src={props.src} alt={props.alt} />
      <p>{props.description}</p>
      <div className="game-btns-container">
        <a href={props.link} className="btn-a" target="_blank" rel="noreferrer">Descargar</a>
        <Link to={props.navigate}>Ver Detalles</Link>
      </div>
    </div>
  )
};

export default GameCard;