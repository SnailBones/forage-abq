"use client";

import React from "react";
import TextBubble from "../TextBubble/TextBubble";
import { useRouter } from "next/navigation";
import "./PlantCard.scss";

const PlantCard = ({ plant }) => {
  const router = useRouter();
  const [isDragging, setIsDragging] = React.useState(false);

  const handleClick = (event) => {
    if (!isDragging) {
      router.push(`/plant/${plant.dirName}`);
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
