import React from "react";
import '../GameDetails/GameDetails.css';

const GameDetails = (props) => {
  return(
    <div className="principal-container">
      <h1 className="featured mt-4">{props.name}</h1>
      <section className="game-summary">
        <iframe 
          className="game-trailer"
          width="560" 
          height="315" 
          src={props.videoLink} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
        <div className="right-zone">
          <p>{props.description}</p>
          <a href={props.downloadLink} className="btn-a" target="_blank" rel="noreferrer">Descargar</a>
        </div>
      </section>

      <section className="game-features">
        <div className="game-states">
          <p><strong>Plataformas: </strong></p> {props.platforms}
          <p><strong>Género: </strong></p> {props.genre}
          <p><strong>Tags: </strong></p> {props.tags}
          <p><strong>Estado: </strong></p> {props.status}
        </div>
        <div className="game-poster">
          <img src={props.poster} alt="Poster del producto" />
        </div>
      </section>

      <section className="task-table">
        <h3 className="feature-2">Tareas Desarrolladas:</h3>
        
      </section>

      <section className="gallery-section">
        <h3 className="feature-2">Galería</h3>

      </section>
    </div>
  )
};

export default GameDetails;