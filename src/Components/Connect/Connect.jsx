import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./connect.css";
import fetchInfo from "../../Utils/GetInfo";

function Connect() {
  const [infoData, setInfoData] = useState();

  const getInfo = async () => {
    const info = await fetchInfo();
    setInfoData(info);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="connect">
      <div className="heading">Connect with me</div>

      {infoData ? (
        <div className="buttons flex">
          <a
            target="_blank"
            rel="noreferrer"
            href={infoData.links.github}
            className="social-btn github-btn"
            title="Follow me on GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={infoData.links.linkedin}
            className="social-btn linkedin-btn"
            title="Connect with me on LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={infoData.links.instagram}
            className="social-btn instagram-btn"
            title="Follow me on Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={infoData.links.youtube}
            className="social-btn youtube-btn"
            title="Subscribe to my YouTube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      ) : (
        <div className="small-loader"></div>
      )}
    </div>
  );
}

export default Connect;
