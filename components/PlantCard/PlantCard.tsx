"use client";

import React from "react";
import TextBubble from "../TextBubble/TextBubble";
import { getMonthName } from "utils/format";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
      onMouseDown={() => setIsDragging(false)}
      onMouseMove={() => setIsDragging(true)}
      onMouseUp={handleClick}
    >
      <div className="plant-image-container">
        <Image
          src={`/assets/${plant.dirName}/img/${plant.image}`}
          alt=""
          width={432}
          height={432}
          className="plant-image"
        />
      </div>
      <div className="top-row">
        <TextBubble text={plant.name} role="title" />
        <TextBubble
          text={getMonthName(plant.start) + " - " + getMonthName(plant.end)}
          role="season"
        />
      </div>
      <TextBubble text={plant.description} />
    </div>
  );
};

export default PlantCard;
