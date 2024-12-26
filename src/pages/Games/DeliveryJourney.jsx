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
          A short Description about Somenthing
        </p>
      }
    />
  )
};

export default DeliveryJourney;