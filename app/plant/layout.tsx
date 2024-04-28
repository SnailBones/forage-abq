"use client";

import { useState, useEffect } from "react";
import { loadData, PlantData } from "utils/loadPlantData";
import { usePathname } from "next/navigation";
export default function PlantProfile({ children }) {
  const [plant, setPlant] = useState<PlantData>(null);
  const plantName = usePathname().split("/")[2];
  console.log(plantName);
  useEffect(() => {
    async function loadAndSetPlant() {
      setPlant(await loadData(plantName));
    }
    loadAndSetPlant();
  }, [plantName]);

  return (
    <div className="blog-content">
      <h1>{plant?.name}</h1>
      <h2>
        <i>{plant?.sciName}</i>
      </h2>
      {/* <p>{plant?.description}</p> */}
      {children}
    </div>
  );
}
