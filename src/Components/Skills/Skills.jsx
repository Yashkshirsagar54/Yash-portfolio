import { useEffect } from "react";
import React, { useState } from "react";

import "./Skills.css";

import Skill from "./Skill";
import trophyIcon from "/iconsImg/trophy.png";
import fetchSkills from "../../Utils/GetSkills";

function Skills() {
  const [skills, setSkills] = useState();

  const getSkills = async () => {
    setSkills(await fetchSkills());
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="Skills" id="skills">
      <div className="main-title">
        <img src={trophyIcon} alt="" className="imgIcon trophyIcon" />
        Skills
      </div>
      <div className="heading">
        <b>Technologies I often play with</b>
      </div>
      <div className="all-skills flex">
        <div className="section">
          <ul className="skills-grid">
            <li className="skill-glow-card" style={{ "--glow-delay": "0s" }}>
              <div className="skill-content flex">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="Python"
                  className="skill-card-img"
                />
                <span className="skill-name">Python</span>
              </div>
            </li>
            <li className="skill-glow-card" style={{ "--glow-delay": "0.7s" }}>
              <div className="skill-content flex">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="skill-card-img"
                />
                <span className="skill-name">JavaScript</span>
              </div>
            </li>
            <li className="skill-glow-card" style={{ "--glow-delay": "1.4s" }}>
              <div className="skill-content flex">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt="React"
                  className="skill-card-img"
                />
                <span className="skill-name">React</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <ul className="skills-grid">
            <li className="skill-glow-card" style={{ "--glow-delay": "2.1s" }}>
              <div className="skill-content flex">
                <img
                  src="/iconsImg/nodejs.svg"
                  alt="Node.js"
                  className="skill-card-img"
                />
                <span className="skill-name">Node.js</span>
              </div>
            </li>
            <li className="skill-glow-card" style={{ "--glow-delay": "2.8s" }}>
              <div className="skill-content flex">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                  alt="Git"
                  className="skill-card-img"
                />
                <span className="skill-name">Git & GitHub</span>
              </div>
            </li>
            <li className="skill-glow-card" style={{ "--glow-delay": "3.5s" }}>
              <div className="skill-content flex">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
                  alt="SQL & Databases"
                  className="skill-card-img"
                />
                <span className="skill-name">SQL & Databases</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="skills-single-track">
        {skills ? (
          <div className="track-inner">
            <div className="track-group">
              {skills.map((skill, index) => (
                <Skill
                  key={`${skill.name}-g1-${index}`}
                  link={skill.link}
                  imgLink={skill.imgLink}
                  name={skill.name}
                  color={skill.color}
                />
              ))}
            </div>
            <div className="track-group" aria-hidden="true">
              {skills.map((skill, index) => (
                <Skill
                  key={`${skill.name}-g2-${index}`}
                  link={skill.link}
                  imgLink={skill.imgLink}
                  name={skill.name}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="small-loader"></div>
        )}
      </div>
    </div>
  );
}

export default Skills;
