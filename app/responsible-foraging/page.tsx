"use client";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./ResponsibleForaging.scss";

const ResponsibleForaging = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/assets/ResponsibleForaging.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div class="textBox">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default ResponsibleForaging;
