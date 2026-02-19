import React, { useEffect, useState } from "react";

import "./Footer.css";

import Connect from "../Connect/Connect";
import heartIcon from "/iconsImg/heart.png";
import fetchInfo from "../../Utils/GetInfo";

function Footer() {
  const [infoData, setInfoData] = useState();

  const getInfo = async () => {
    const info = await fetchInfo();
    setInfoData(info);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="Footer flex">
      <img src={heartIcon} alt="" className="imgIcon heartIcon" />
      <div className="logo flex">
        <svg
          className="icon"
          width="61.133"
          height="36.572"
          viewBox="0 0 61.133 36.572"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            id="svgGroup"
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="30"
            fontWeight="bold"
            className="logo-text"
          >
            YK
          </text>
        </svg>
        &copy; 2026. All rights reserved by
        {infoData ? (
          <a href={infoData.links.linkedin} className="link sign">
            {infoData.name}
          </a>
        ) : (
          <div className="small-loader"></div>
        )}
      </div>
      <Connect />
    </div>
  );
}

export default Footer;
