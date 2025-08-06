import React from "react";
import GameDetails from "../../components/GameDetails/GameDetails";
import img1 from '../../assets/img/tanks_01.png';
import img2 from '../../assets/img/tanks_02.png';
import img3 from '../../assets/img/tanks_03.png';

const TankWar = () => {
  return(
    <GameDetails
      name='Tank War'
      videoLink ='https://www.youtube.com/embed/n7S7rSqiHYo?si=6wwwVMTalLBS4F_O'
      downloadLink = 'https://drive.google.com/file/d/11Bk7QM78CwUIsgPWl5YAXjvgiKksYFk6/view'
      description={
        <p>
          A bordo de tu tanque de guerra, debes cruzar toda una ciudad invadida de enemigos, pero no será tan fácil como parece, debes hacer uso del poder de los colores para poder vencer a cada uno.
        </p>
      }
      platforms="Windows"
      genre="Shooter en tercera persona"
      status="Beta"
      tasks={[
        "Diseño de mecánicas de juego",
        "Desarrollo de mecánicas de juego (Disparos, enemigos, power-ups, movimientos).",
        "Diseño de personajes y enemigos",
        "Integración de assets y efectos visuales",
      ]}
      images={[
        { src: img1, alt: "Vista 1 Tank War" }, 
        { src: img2, alt: "Vista 2 Tank War" },
        { src: img3, alt: "Vista 3 Tank War" }
      ]}
    />
  )
};

export default TankWar;