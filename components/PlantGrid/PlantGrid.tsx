import React from "react";
import PlantCard from "../PlantCard/PlantCard";
import "./PlantGrid.scss";

const PlantGrid = ({ plants }) => {
  return (
    <ul className="plant-grid">
      {plants.map((plant, index) => (
        <PlantCard plant={plant} key={index} />
      ))}
    </ul>
  );
};

export default PlantGrid;
