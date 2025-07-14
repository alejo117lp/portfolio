import React from "react";
import "./FrontendDetails.css";
import TaskTable from "../TaskTable/TaskTable";

const FrontendDetails = (props) => {
  return (
    <section className="frontend-details mt-4">
      <div className="info-container">
        <h2 className="featured">{props.title}</h2>
        <p className="front-pj-description">{props.description}</p>
      </div>

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

      <TaskTable
        tasks={props.tasks}
        title="Contribuciones:"
        header1="N°"
        header2="Descripción"
      />
    </section>
  );
};

export default FrontendDetails;
