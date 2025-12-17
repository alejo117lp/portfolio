import React from "react";
import "./FrontendDetails.css";
import TaskTable from "../TaskTable/TaskTable";
import { RevealSection, RevealCard } from "../../hooks/useScrollReveal";

const FrontendDetails = (props) => {
  return (
    <section className="frontend-details mt-4">
      <RevealSection className="intro-section" once={true}>
        <h2 className="featured">{props.title}</h2>
      </RevealSection>
      <RevealCard delay={0}>
        <div className="info-container">
          <p className="front-pj-description">{props.description}</p>
        </div>
      </RevealCard>

      <RevealCard delay={150}>
        <div
          id="frontendCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
        <div className="carousel-inner">
          {props.images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              {/* Contenedor interno para centrar la imagen */}
              <div className="carousel-item-content">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#frontendCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#frontendCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </RevealCard>

      <RevealCard delay={300}>
        <TaskTable
          tasks={props.tasks}
          title="Contribuciones:"
          header1="N°"
          header2="Descripción"
        />
      </RevealCard>
    </section>
  );
};

export default FrontendDetails;
