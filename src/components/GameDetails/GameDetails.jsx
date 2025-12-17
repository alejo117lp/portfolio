import React from "react";
import "../GameDetails/GameDetails.css";
import Carousel from "../Carousel/Carousel";
import TaskTable from "../TaskTable/TaskTable";
import { RevealSection, RevealCard } from "../../hooks/useScrollReveal";

const GameDetails = (props) => {
  return (
    <div className="principal-container">
      <RevealSection className="intro-section mt-4" once={true}>
        <h1 className="featured">{props.name}</h1>
      </RevealSection>
      <RevealCard delay={0}>
        <section className="game-summary mb-4">
        <div className="video-container">
          <iframe
            className="game-trailer video-responsive"
            src={props.videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

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
      </RevealCard>

      <RevealCard delay={150}>
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
      </RevealCard>

      <RevealCard delay={300}>
        <TaskTable
          tasks={props.tasks}
          title="Tareas Desarrolladas:"
          header1="N°"
          header2="Tarea"
        />
      </RevealCard>

      <RevealCard delay={450}>
        <section className="gallery-section">
          <Carousel images={props.images} />{" "}
        </section>
      </RevealCard>
    </div>
  );
};

export default GameDetails;
