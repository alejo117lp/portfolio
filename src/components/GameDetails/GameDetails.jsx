import React from "react";
import "../GameDetails/GameDetails.css";
import Carousel from "../Carousel/Carousel";
import TaskTable from "../TaskTable/TaskTable";

const GameDetails = (props) => {
  return (
    <div className="principal-container">
      <h1 className="featured mt-4 mb-4">{props.name}</h1>
      <section className="game-summary mb-4">
        <iframe
          className="game-trailer"
          width="560"
          height="315"
          src={props.videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="right-zone">
          {props.description}
          <a
            href={props.downloadLink}
            className="btn-a"
            target="_blank"
            rel="noreferrer"
          >
            Descargar
          </a>
        </div>
      </section>

      <section className="game-features">
        <div className="game-feature-items">
          <div className="game-feature-item">
            <p>
              <strong>Plataformas: </strong>
              {props.platforms}
            </p>
          </div>

          <div className="game-feature-item">
            <p>
              <strong>Género: </strong> {props.genre}
            </p>
          </div>
          <div className="game-feature-item">
            <p>
              <strong>Estado: </strong>
              {props.status}
            </p>
          </div>
        </div>
      </section>

      <TaskTable
        tasks={props.tasks}
        title="Tareas Desarrolladas:"
        header1="N°"
        header2="Tarea"
      />

      <section className="gallery-section">
        <Carousel images={props.images} />{" "}
      </section>
    </div>
  );
};

export default GameDetails;
