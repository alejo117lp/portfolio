import React from "react";
import GameDetails from "../../components/GameDetails/GameDetails";
import img1 from "../../assets/img/TLJ_04.png";
import img2 from "../../assets/img/TLJ_02.png";
import img3 from "../../assets/img/TLJ_03.png";

const TheLastJump = () => {
  return(
    <GameDetails
      name='The Last Jump'
      videoLink ='https://www.youtube.com/embed/your-video-link'
      downloadLink = 'https://drive.google.com/file/d/1ECwIdUygT2Zv9ebf4vzjOqLBYXE2tqsx/view'
      description={
        <p>
          Tu nave se ha quedado sin combustible y solo tienes un último impulso para poder llegar a salvo a casa. Debes apuntar en la dirección correcta para que los planetas te lleven de nuevo a tu hogar.
        </p>
      }
      platforms="Windows"
      genre="Hiper Casual"
      status="Beta"
      poster="path/to/your/poster.png"
      tasks={[
        "Diseño de Juego y Nivel",
        "Diseño e implementación de HUD",
        "Programación de Mecánicas",
        "Implementación de animaciones",
      ]}
      images={[
        { src: img1, alt: "Screenshot TLJ 1" },
        { src: img2, alt: "Screenshot TLJ 2" },
        { src: img3, alt: "Screenshot TLJ 3" }
      ]}
    />
  )
};

export default TheLastJump;