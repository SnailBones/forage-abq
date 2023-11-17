import React from "react";
import TextBubble from "../TextBubble/TextBubble";
import { Link, useNavigate } from "react-router-dom";
import "./PlantCard.scss";

const PlantCard = ({ plant }) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (!isDragging) {
      navigate(`/plant/${plant.dirName}`);
    } else {
      setIsDragging(false);
    }
  };

  return (
    <div
      className="plant-card"
      style={{
        "--dynamic-url": `url('/assets/${plant.dirName}/img/${plant.image}')`,
      }}
      onMouseDown={() => setIsDragging(false)}
      onMouseMove={() => setIsDragging(true)}
      onMouseUp={handleClick}
    >
      <TextBubble text={plant.name} title={true} />
      <TextBubble text={plant.description} />
    </div>
  );
};

export default PlantCard;
