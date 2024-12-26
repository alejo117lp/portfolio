import React from "react";

const GameDetails = (props) => {
  return(
    <div className="principal-container">
      <h1 className="featured">{props.name}</h1>
      <section className="game-summary">
        <iframe 
          width="560" 
          height="315" 
          src={props.videoLink} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
        <p>{props.description}</p>
        <a href={props.downloadLink} className="btn-a" target="_blank" rel="noreferrer">Descargar</a>
      </section>
      <section className="game-features">

      </section>
      <section className="task-table">

      </section>
      <section className="gallery-section">
        
      </section>
    </div>
  )
};

export default GameDetails;