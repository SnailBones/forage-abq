import yaml from "js-yaml";

export interface PlantData {
  start: number;
  end: number;
  dirName: string;
}

export const loadData = async (plantName: string): Promise<PlantData> => {
  const path = `/assets/${plantName}/data.yml`;
  return await fetch(path)
    .then((response) => response.text())
    .then((data) => {
      if (data.startsWith("<!DOCTYPE html>")) {
        console.error("Fetched an HTML document instead of YAML at:", path);
      }
      return yaml.load(data);
    });
};
