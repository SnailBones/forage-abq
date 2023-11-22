import yaml from "js-yaml";

export const loadData = async (plantName) => {
  const path = `/assets/${plantName}/data.yml`;
  return await fetch(path)
    .then((response) => response.text())
    .then((data) => {
      if (data.startsWith("<!DOCTYPE html>")) {
        console.error("Fetched an HTML document instead of YAML at:", path);
      }
      // console.log("data is", data)
      return yaml.load(data);
    });
};
