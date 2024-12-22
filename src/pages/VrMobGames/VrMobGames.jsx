import React from "react";
import GameCard from "../../components/GameCard/GameCard"
import Delivery from '../../img/Delivery_1.png';
import MIB from '../../img/MIB_1.png';

const VrMobGames = () => {
	return(
		<div className="principal-container">
      <section className="intro-section mt-4">
        <h1 className="featured">Realidad Virtual y Móviles</h1>
      </section>
      <section className="games-cards-section">
        <GameCard 
          title="Delivery Journey"
          src={Delivery}
          alt="Delivery - poster"
          description={
            <p>
              Es un videojuego tipo Runner para dispositivos móviles, cuyo objetivo de desarrollo era aplicar todos nuestros
              conocimientos en programación, arte y diseño elaborando un producto funcional. 
              También, es el primer juego móvil que desarrollé, por lo que tiene algunos problemas de optimización.
            </p>
          }
          link="https://drive.google.com/file/d/1JyK5kubGs8Tu-MeuVVUDfxx5AxqlFruK/view?usp=sharing"
          navigate="/home"
        />

        <GameCard 
          title="Men In Black: Museum"
          src={MIB}
          alt="MIB - poster"
          description={
            <p>
              Es un juego VR desarrollado para las Oculus Quest 2 y enfocado en la visualizacón y diseño de datos, 
              con la temática de la saga de cine Hombres de Negro. 
              Allí se busca implementar todos los conocimientos adquiridos en los cursos de Realidad Virtual 
              y Visualización de información.
            </p>
          }
          link="https://drive.google.com/file/d/1SjxuAWR8I0vBd9r7wPLB32b3EIlZEiJo/view?usp=sharing"
          navigate="/home"
        />
      </section>
    </div>
	)
}

export default VrMobGames;