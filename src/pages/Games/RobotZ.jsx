import React from "react";
import GameDetails from "../../components/GameDetails/GameDetails";
import img1 from '../../assets/img/Robot_01.png';
import img2 from '../../assets/img/Robot_02.png';
import img3 from '../../assets/img/Robot_03.png';

const RobotZ = () => {
  return(
    <GameDetails
      name='Robot Z'
      videoLink ='https://www.youtube.com/embed/qJjYf_xDkdQ?si=-hZeohxRzlObIf3R'
      downloadLink = 'https://drive.google.com/file/d/1kAZzVENQbICYlaLtGg_XJgrYg0E3jd_w/view'
      description={
        <p>
          Eres un robot en una nave perdida en el espacio, sin presencia alguna de humanos. 
          Un virus informático invadió el sofware de tus compañeros robots, los cuales actúan como zombies. 
          No posees armas para defenderte, por tal motivo debes escapar sigilosamente de la nave.
        </p>
      }
      platforms="Windows"
      genre="Stealth"
      status="Beta"
      tasks={[
        "Desarrollo de IA enemiga",
        "Implementación de mecánicas de juego (Movimiento, sigilo, trampas.)",
        "Diseño de nivel",
        "Integración de efectos visuales",
        "Integración de animaciones",
      ]}
      images={[
        { src: img1, alt: "Vista 1 Robot Z" },
        { src: img2, alt: "Vista 2 Robot Z" },
        { src: img3, alt: "Vista 3 Robot Z" }
      ]}
    />
  )
};

export default RobotZ;