import React from "react";
import GameCard from "../../components/GameCard/GameCard";
import RobotZ from '../../img/Robot-Z.png';
import TINAC from '../../img/TINAC_1.png';
import TANK from '../..//img/Tank_war_1.png';

const ThreeDGames = () => {
	return(
    <div className="principal-container">
      <section className="intro-section mt-4">
        <h1 className="featured">Juegos 3D</h1>
      </section>
      <section className="games-cards-section">
        <GameCard 
          title="Robot-Z"
          src={RobotZ}
          alt="Robot-Z - poster"
          description={
            <p>
             Es un stealth, puzzle and fast game desarrollado durante mi tercer semestre de académico para el curso de <span className="highlight">Fundamentos de Programación.</span> 
             Allí diseñé el nivel con todas sus zonas de trampas y power-ups, el concept de los personajes y la historia. 
             También, implementé las mecánicas (Caminar, Saltar, Agacharse, activar palancas, desactivar trampas, recolectar items), 
             el nivel y cada uno de sus assets, el menú de inicio y pausa; las animaciones y las pantallas de Ganar y Perder."
            </p>
          }
          link="https://drive.google.com/file/d/1kAZzVENQbICYlaLtGg_XJgrYg0E3jd_w/view"
          navigate="/home"
        />

        <GameCard 
          title="This is not a Childhood"
          src={TINAC}
          alt="Tican - poster"
          description={
            <p>
              Es un videojuego survival desarrollado durante mi tercer semestre de universidad para el curso de Fundamentos de programación. 
              El objetivo de este trabajo era aplicar los conocimientos básicos de programación desarrollando un juego donde se pueda perder y ganar,
              y no era necesario aplicar arte.
            </p>
          }
          link="https://drive.google.com/file/d/1qsvZAj2MY4K6YFRcDaGPXPBrVflUJ_83/view?usp=sharing"
          navigate="/home"
        />

        <GameCard 
          title="Tank War"
          src={TANK}
          alt="Tanks - poster"
          description={
            <p>
              Es un videojuego shooter en tercera persona, en el cual se busca tener una buena implementación de arte, 
              diseño de nivel, enemigos, audio y jugabilidad, evitando todo tipo de bugs y haciendo una propuesta innovadora 
              de mecánicas. El producto es para la entrega final del quinto semestre de la carrera.
            </p>
          }
          link="https://drive.google.com/file/d/11Bk7QM78CwUIsgPWl5YAXjvgiKksYFk6/view?usp=sharing"
          navigate="/home"
        />
      </section>
    </div>
	)
}

export default ThreeDGames;