import React from "react";
import "./TextBubble.scss";

const TextBubble = ({ text, role = "" }) => {
  switch (role) {
    case "title":
      return (
        <h3
          className="text-bubble plant-title"
          // style={{ gridArea: "1 / 1 / 2 / 2" }}
        >
          {text}
        </h3>
      );
    case "season":
      return (
        <p
          className="text-bubble top-right-bubble"
          // style={{ gridArea: "1 / 2 / 2 / 3" }}
        >
          {text}
        </p>
      );
    default:
      return (
        <p
          className="text-bubble plant-description"
          // style={{ gridArea: "3 / 1 / 4 / 3" }}
        >
          {text}
        </p>
      );
  }
};

export default TextBubble;
