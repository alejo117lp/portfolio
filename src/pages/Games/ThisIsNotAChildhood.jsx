import React from "react";
import GameDetails from "../../components/GameDetails/GameDetails";
import img1 from '../../assets/img/TINAC_1.png';
import img2 from '../../assets/img/tinac_02.png';
import img3 from '../../assets/img/tinac_03.png';
import img4 from '../../assets/img/tinac_04.png';
import img5 from '../../assets/img/tinac_05.png';

const ThisIsNotAChildhood = () => {
  return(
    <GameDetails
      name='This is not a Childhood'
      videoLink ='https://www.youtube.com/embed/GMYpMbMCrU0?si=yQpmHuXpVSP9a50V'
      downloadLink = 'https://drive.google.com/file/d/1qsvZAj2MY4K6YFRcDaGPXPBrVflUJ_83/view'
      description={
        <p>
          En el año 1895, en el sur de Londres; hay una mansión que funciona como un orfanato a cargo de la Matrona Caroline. 
          La Matrona cada día lleva más niños abandonados al orfanato, este lleva funcionando allí poco tiempo. 
          Una noche como cualquier otra La Matrona lleva un niño más a la mansión, con este ya son 66. 
          Esa misma noche, La Matrona empieza a tomar uno por uno a los niños y los lleva al piso de abajo para matarlos, 
          con el fin de hacer un ritual oscuro que le concederá inmortalidad, 
          ¿será nuestro protagonista lo suficientemente ágil para eludir a la matrona y escapar del orfanato?
        </p>
      }
      platforms="Windows"
      genre="Survival"
      status="Alfa"
      tasks={[
        "Desarrollo de mecánicas de juego (Recolección de recursos, supervivencia, enemigos.)",
        "Diseño de nivel",
        "Diseño de personajes y enemigos",
        "Integración de efectos visuales",
        "Integración de animaciones",
        "Implementación de audio",
        "Modelación 3D de assets",
      ]}
      images={[
        { src: img1, alt: "Vista 1 TINAC" },
        { src: img2, alt: "Vista 2 TINAC" },
        { src: img3, alt: "Vista 3 TINAC" },
        { src: img4, alt: "Vista 4 TINAC" },
        { src: img5, alt: "Vista 5 TINAC" }
      ]}
    />
  )
};


export default ThisIsNotAChildhood;