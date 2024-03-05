"use client";

import React, { useEffect, useState } from "react";
import YAML from "js-yaml";
import { loadData } from "utils/loadPlantData";
import { getCurrentMonth } from "utils/format";
import PlantGrid from "components/PlantGrid/PlantGrid";
import "./FullPlantList.scss";

const FullPlantList = () => {
    const [plants, setPlants] = useState([]);
    const currentMonth = getCurrentMonth();

    useEffect(() => {
        const loadAndSetPlants = async () => {
            const plantListResponse = await fetch("/plantList.yml");
            const plantListYAML = await plantListResponse.text();
            const plantNames = YAML.load(plantListYAML);

            const newPlants = await Promise.all(
                plantNames.map(async (plantName) => {
                    const plantData = await loadData(plantName);
                    plantData.dirName = plantName;
                    return plantData;
                })
            );

            setPlants(newPlants);
        };

        loadAndSetPlants();
    }, []);

    return (
        <div className="calendar">
            <h2>All Plants:</h2>
            <PlantGrid plants={plants} />
        </div>
    );
};

export default FullPlantList;
