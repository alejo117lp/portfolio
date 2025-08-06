import React from "react";
import img1 from '../../assets/img/MIB_02.png';
import img2 from '../../assets/img/MIB_1.png';
import img3 from '../../assets/img/MIB_03.png';
import img4 from '../../assets/img/MIB_04.png';
import GameDetails from "../../components/GameDetails/GameDetails";

const MenInBlackMuseum = () => {
  return(
    <GameDetails
      name='Men In Black: Museum'
      videoLink ='https://www.youtube.com/embed/Hd6g1vW4PI0?si=_9d3L11_ES5CmUSV'
      downloadLink = 'https://drive.google.com/file/d/1SjxuAWR8I0vBd9r7wPLB32b3EIlZEiJo/view?usp=sharing'
      description={
        <p>
          Bienvenido al Museo de Hombres de Negro, acá podrás interactuar con objetos los objetos y armas de las películas, 
          conocer más acerca de los personajes y curiosidades de las distintas entregas a lo largo del tiempo, y por qué no, uno 
          que otro mini juego.
        </p>
      }
      platforms="Oculus Quest 2"
      genre="Puzzle VR, Educativo"
      status="Beta"
      tasks={[
        "Integración del KIT VRTK TILIA al proyecto",
        "Implementación de Movimiento en VR",
        "Implementación de Snapping en VR",
        "Desarrollo e implementación de UI VR interactuable",
        "Desarrollo de infografías",
        "Diseño de niveles"
      ]}
      images={[
        { src: img1, alt: "Vista MIB 1" },
        { src: img2, alt: "Vista MIB 2" },
        { src: img3, alt: "Vista MIB 3" },
        { src: img4, alt: "Vista MIB 4" }
      ]}
    />
  )
};

export default MenInBlackMuseum;