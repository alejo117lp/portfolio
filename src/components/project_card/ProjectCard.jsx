import React from "react";
import { Link } from "react-router-dom";
import '../game_card/gameCard.css';

const ProjectCard = ( props ) => {
  return(
    <div className="game-card-container">
      <h4>{props.title}</h4>
      <img src={props.src} alt={props.alt} />
      <p>{props.description}</p>
      <div className="game-btns-container">
        <Link to={props.navigate}>Ver Detalles</Link>
      </div>
    </div>
  )
};

export default ProjectCard;