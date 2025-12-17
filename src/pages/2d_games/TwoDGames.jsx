import React from "react";
import GameCard from "../../components/GameCard/GameCard";
import { RevealSection, RevealCard } from "../../hooks/useScrollReveal";
import Harmony from "../../assets/img/Harmony_01.png";
import TLJ from "../../assets/img/TLU_1.png";

const TwoDGames = () => {

  return(
    <div className="principal-container">
      <RevealSection className="intro-section mt-4" once={true}>
        <h1 className="featured">Juegos 2D</h1>
      </RevealSection>
      <section className="games-cards-section">
        <RevealCard delay={0}>
          <GameCard 
            title="Harmony Master"
            src={Harmony}
            alt="Harmony Master - poster"
            description={<p>
              Videojuego de <span className="highlight">plataformas 2D</span>, centrado en el diseño y desarrollo de producto para un público específico, 
              aplicando conocimientos básicos de <span className="highlight">C#</span> y <span className="highlight">Design Thinking</span>.
              En este proyecto me destaqué por la <span className="highlight">implementación de las mecánicas de juego</span> e integración de animaciones.
            </p>}
            link="https://drive.google.com/file/d/154YNkBvCnpKq3wOV_85wxF8FcXYKlpxw/view?usp=sharing"
            navigate="/harmony-master"
          />
        </RevealCard>

        <RevealCard delay={200}>
          <GameCard 
            title="The Last Jump"
            src={TLJ}
            alt="The Last Jump - poster"
            description={
              <p>
                Es un juego con enfoque en "simulación para sistemas interactivos", desarrollado en <span className="highlight">Unity - C#</span>, 
                donde se aplican <span className="highlight">modelos matemáticos y físicos</span> en la programación para generar los comportamientos deseados
                en el juego, en este caso, <span className="highlight">la ley atracción gravitacional.</span> 
              </p>
            }
            link="https://drive.google.com/file/d/1ECwIdUygT2Zv9ebf4vzjOqLBYXE2tqsx/view?usp=sharing"
            navigate="/the-last-jump"
          />
        </RevealCard>
      </section>
    </div>
  )  
};

export default TwoDGames;