import * as React from "react";
import "./CardComponent.css";

const CardComponent = () => {
  return (
    <div className="CardContainer">
      <div className="CardBack"></div>
      <div className="CardFront">Carte n°</div>
    </div>
  )
};

export default CardComponent;