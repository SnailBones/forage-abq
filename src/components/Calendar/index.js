import React, { useEffect, useState } from "react";
import YAML from "js-yaml";
import { loadData } from "../../utils/loadPlantData";
import { getCurrentMonth, getMonthName } from "../../utils/format";
import PlantList from "../PlantList/PlantList";
import "./Calendar.scss";

const Calendar = () => {
  const [plants, setPlants] = useState([]);
  const currentMonth = getCurrentMonth();

  useEffect(() => {
    const loadAndSetPlants = async () => {
      const plantListResponse = await fetch("/assets/plantList.yml");
      const plantListYAML = await plantListResponse.text();
      const plantNames = YAML.load(plantListYAML);

      const newPlants = [];
      for (const plantName of plantNames) {
        const plantData = await loadData(plantName);
        if (
          (plantData.start <= currentMonth && plantData.end >= currentMonth) ||
          // account for winter plants with season including the new year
          (plantData.end < plantData.start &&
            (plantData.start <= currentMonth || plantData.end >= currentMonth))
        ) {
          plantData.dirName = plantName;
          newPlants.push(plantData);
        }
      }
      setPlants(newPlants);
    };

    loadAndSetPlants();
  }, []);

  return (
    <div className="calendar">
      <h2>What's in Season in {getMonthName(currentMonth)}?</h2>
      <PlantList plants={plants} />
    </div>
  );
};

export default Calendar;
