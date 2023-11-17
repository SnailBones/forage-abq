import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { loadData } from "../../utils/loadPlantData";
import "./PlantProfile.scss";

const fetchMarkdown = async (plantID) => {
  const response = await fetch(`/assets/${plantID}/about.md`);
  return await response.text();
};

const PlantProfile = () => {
  const { plantID } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  const [plantData, setPlantData] = useState("");

  useEffect(() => {
    fetchMarkdown(plantID).then((text) => setMarkdownContent(text));
    loadData(plantID).then((data) => setPlantData(data));
  }, [plantID]);

  const renderers = {
    img: ({ alt, src, title }) => (
      <figure>
        <img src={src} alt={alt} />
        <figcaption>{title}</figcaption>
      </figure>
    ),
  };

  return (
    <div className="blog-content">
      <h2>{plantData.name}</h2>
      <h3>{plantData.sciName}</h3>
      <ReactMarkdown components={renderers} children={markdownContent} />
    </div>
  );
};

export default PlantProfile;
