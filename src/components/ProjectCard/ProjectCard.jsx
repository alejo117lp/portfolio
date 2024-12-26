import React from "react";
import { Link } from "react-router-dom";
import '../GameCard/GameCard.css';

const ProjectCard = ( props ) => {
  return(
    <div className="game-card-container">
      <h4>{props.title}</h4>
      <img src={props.src} alt={props.alt} />
      <p>{props.description}</p>
      <div className="game-btns-container">
        <Link className="btn-a" to={props.navigate}>Ver Detalles</Link>
      </div>
    </div>
  )
};

export default ProjectCard;