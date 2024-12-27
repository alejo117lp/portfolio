import React from "react";
import GameDetails from "../../components/GameDetails/GameDetails";

const DeliveryJourney = () => {
  return(
    <GameDetails 
      name='Delivery Journey'
      videoLink ='https://www.youtube.com/embed/9BaDQfRzFEk?si=thYmUPcwfSI2OGcp'
      downloadLink = 'https://drive.google.com/file/d/1JyK5kubGs8Tu-MeuVVUDfxx5AxqlFruK/view?usp=sharing'
      description={
        <p>
          Eres un repartidor de la empresa "EntregasD.una" y residente de Polombia , tu rol en la empresa es entregar distintos productos de distintas empresas en ciertos puntos de distribucion.
          Para escapar de este lúgubre lugar dominado por fuerzas malignas EntregasD.una le da el beneficio de trabajar en el exterior a sus mejores empleados. 
          Sabes lo que hay en las viejas y deplorables carreteras de este maligno país , sin embargo, tienes que demostrar que eres habilidoso a la hora de conducir para poder escapar de las fosas del mal.
        </p>
      }
    />
  )
};

export default DeliveryJourney;