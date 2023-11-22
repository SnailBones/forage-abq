import React from 'react';
import './TextBubble.scss';


const TextBubble = ({ text, title }) => {
  if (title) return (
    <h3 className="text-bubble plant-title">{text}</h3>
  );
  else return (
    <p className="text-bubble">{text}</p>
  );
};

export default TextBubble;
