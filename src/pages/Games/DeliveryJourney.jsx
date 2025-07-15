import React from "react";
import GameDetails from "../../components/GameDetails/GameDetails";
import poster from "../../assets/img/Delivery_1.png";
import img1 from "../../assets/img/Asistencias_01.png";
import img2 from "../../assets/img/Asistencias_01.png";

const DeliveryJourney = () => {
  return(
    <GameDetails 
      name='Delivery Journey'
      videoLink ='https://www.youtube.com/embed/9BaDQfRzFEk?si=thYmUPcwfSI2OGcp'
      downloadLink = 'https://drive.google.com/file/d/1JyK5kubGs8Tu-MeuVVUDfxx5AxqlFruK/view?usp=sharing'
      description={
        <p>
          Eres un repartidor de la empresa "EntregasD.una" y residente de Polombia, tu rol en la empresa es entregar distintos productos de varias empresas en ciertos puntos de distribucion.
          Para escapar de este lúgubre lugar dominado por fuerzas malignas EntregasD.una le da el beneficio de trabajar en el exterior a sus mejores empleados. 
          Sabes lo que hay en las viejas y deplorables carreteras de este maligno país , sin embargo, tienes que demostrar que eres habilidoso a la hora de conducir para poder escapar de las fosas del mal.
        </p>
      }
      platforms="Android"
      genre="Endless Runner"
      status="Beta"
      poster={poster}
      tasks={["Diseño de Juego", "Narrativa"]}
      images={[
        { src: img1, alt: "Vista 1 del Portal de Empleados" },
        { src: img2, alt: "Vista 2 del Portal de Empleados" },
      ]}
    />
  )
};

export default DeliveryJourney;