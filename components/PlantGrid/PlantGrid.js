import React from "react";
import PlantCard from "../PlantCard/PlantCard";
import "./PlantGrid.scss";

const plant = {
  name: "Tumbleweed",
  sciName: "Salsola tragus",
  start: 5,
  end: 8,
  description:
    "The prickly tumbleweed makes a good salad green when picked small, with a salty flavor.",
  nativeTo: "Eurasian deserts",
  image: "tips.jpg",
  dirName: "salsola",
};

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
