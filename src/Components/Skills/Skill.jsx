import React from "react";

function Skill(props) {
  return (
    <div
      className="Skill floating-skill-item"
      style={{ "--skill-color": props.color || "#0191ff" }}
    >
      <a href={props.link} target="_blank" rel="noreferrer" title={props.name}>
        <img
          className="skill-floating-img"
          src={props.imgLink}
          alt={props.name}
        />
        <span className="skill-glow-underline"></span>
      </a>
    </div>
  );
}

export default Skill;
