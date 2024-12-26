import React from "react";
import GameCard from "../../components/GameCard/GameCard"
import Harmony from "../../img/Hamony_1.png";
import TLJ from "../../img/TLU_1.png";

const TwoDGames = () => {

  return(
    <div className="principal-container">
      <section className="intro-section mt-4">
        <h1 className="featured">Juegos 2D</h1>
      </section>
      <section className="games-cards-section">
        <GameCard 
          title="Harmony Master"
          src={Harmony}
          alt="Harmony Master - poster"
          description={<p>
            Videojuego de <span className="highlight">plataformas 2D</span>, centrado en el diseño y desarrollo de producto para un público específico, 
            aplicando conocimientos básicos de <span className="highlight">C#</span> y <span className="highlight">Design Thinking</span>.
            Este juego fue realizado durante mi segundo período académico para el curso de "Métodos de Diseño".
          </p>}
          link="https://drive.google.com/file/d/154YNkBvCnpKq3wOV_85wxF8FcXYKlpxw/view?usp=sharing"
          navigate="/harmony-master"
        />

        <GameCard 
          title="The Last Jump"
          src={TLJ}
          alt="The Last Jump - poster"
          description={
            <p>
              Es un juego desarrollado para el curso "simulación para sistemas interactivos", en <span className="highlight">C#-Unity</span>, 
              donde se aplican <span className="highlight">modelos matemáticos y físicos</span> en la programación para generar los comportamientos los deseados
              en el juego, en este caso, la ley atracción gravitacional.
            </p>
          }
          link="https://drive.google.com/file/d/1ECwIdUygT2Zv9ebf4vzjOqLBYXE2tqsx/view?usp=sharing"
          navigate="/the-last-jump"
        />
      </section>
    </div>
  )  
};

export default TwoDGames;