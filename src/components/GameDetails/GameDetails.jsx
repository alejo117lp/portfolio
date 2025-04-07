import React from "react";
import '../GameDetails/GameDetails.css';
import Carousel from "../Carousel/Carousel";

const GameDetails = ( props ) => {
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
        <div className="game-feature-items">
          <div className="game-feature-item">
            <p><strong>Plataformas: </strong></p> 
            <p>{props.platforms}</p>
          </div>
          <div className="game-feature-item">
            <p><strong>Género: </strong></p> 
            <p>{props.genre}</p>
          </div>
          <div className="game-feature-item">
            <p><strong>Estado: </strong></p>
            <p>{props.status}</p>
          </div>   
        </div>
        <div className="game-poster">
          <img src={props.poster} alt="Poster del producto" />
        </div>
      </section>

      <section className="task-table">
        <h3 className="feature-2">Tareas Desarrolladas:</h3>
        {props.tasks && props.tasks.length > 0 ? (
          <table className="table">
            <thead>
      <tr>
        <th>#</th>
        <th>Tarea</th>
      </tr>
    </thead>
            <tbody>
              {props.tasks.map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td> {/* Enumerar automáticamente */}
                  <td>{task}</td> {/* Mostrar el string de la tarea */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay tareas disponibles.</p> // Mensaje cuando no hay tareas
        )}
      </section>

      <section className="gallery-section">
        <h3 className="feature-2">Galería</h3>
        <Carousel images={props.images} /> {/* Cambia 'images' por la propiedad correcta que contiene las imágenes */}
      </section>
    </div>
  )
};

export default GameDetails;