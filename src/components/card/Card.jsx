import React from "react";
import '../card/card.css';

const Card = ( props ) => {

  return(
    <div className="card-container">
      <div className="card-head">
        <h5>{props.title}</h5>
      </div>
      {props.items.map((item, index) => (
        <div className="card-body" key={index}>
          <i className={`icon-card ${(item.iconName)}`}></i>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
};

export default Card;