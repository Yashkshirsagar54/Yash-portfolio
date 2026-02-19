import React, { useEffect, useState } from "react";
import "./About.css";
import boyIcon from "/iconsImg/boy.png";
import fetchInfo from "../../Utils/GetInfo";

function About() {
  const [infoData, setInfoData] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const info = await fetchInfo();
      setInfoData(info);
    };
    getInfo();
  }, []);

  return (
    <div className="About">
      <div className="main-title">
        <img src={boyIcon} alt="" className="imgIcon boyIcon" />
        About Me
      </div>
      <div className="heading">
        <b>here are some things about me...</b>
      </div>
      <div className="about-info" id="about">
        {infoData ? (
          infoData.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <div className="small-loader"></div>
        )}
      </div>
    </div>
  );
}

export default About;
