import React from "react";
import "../styles.css";

const Project = ({ name, url_path, description }) => {
  return (
    <div className="boxContainer">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default Project;
