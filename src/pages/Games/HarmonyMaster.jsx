import React from "react";
import GameDetails from "../../components/GameDetails/GameDetails";
import poster from "../../assets/img/Harmony_01.png";
import img1 from "../../assets/img/Harmony_02.png";
import img2 from "../../assets/img/Harmony_03.png";

const HarmonyMaster = () => {
  return(
    <GameDetails 
      name='Harmony Master'
      videoLink ='https://www.youtube.com/embed/bv7GLT2gsJU?si=EVyyv49TnPbLSbEu'
      downloadLink = 'https://drive.google.com/file/d/154YNkBvCnpKq3wOV_85wxF8FcXYKlpxw/view?usp=drive_link'
      description={
        <p>
          Un chico habilidoso con la música se convierte en la única esperanza para salvar su escuela de los demonios 
          que la han invandido. Sin más armas que sus intrumentos musicales tendrá que superar cada uno de los obstáculos 
          y villanos que se atrevisen en su camino para poder enviarlos 
          de nuevo al infierno.
        </p>
      }
      platforms="Windows"
      genre="Survival Platformer"
      status="Beta"
      poster={poster}
      tasks={[
        "Implementación de VFX y SFX", 
        "Animación: Pantallas de Victoria y Game Over",
        "HUD sección selección de armas",
        "Programación plataformas móviles",
        "Programación de enemigos",
        "Programación Personje Principal",
        "Implementación de tilsets",
      ]}
      images={[
        { src: img1, alt: "Vista 1 del Portal de Empleados" },
        { src: img2, alt: "Vista 2 del Portal de Empleados" },
        { src: poster, alt: "Poster de Harmony Master" }
      ]}
    />
  )
};

export default HarmonyMaster;