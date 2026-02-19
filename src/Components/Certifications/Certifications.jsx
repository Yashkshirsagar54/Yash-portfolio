import React, { useEffect, useState } from "react";

import "./Certifications.css";

import Certificate from "./Certificate";
import fetchCertificates from "../../Utils/GetCertificates";

function Certifications(props) {
  const [certificatesData, setCertificatesData] = useState();
  const [activeType, setActiveType] = useState("all");
  const [loadAll, setLoadAll] = useState(false);

  const getCertificates = async () => {
    setCertificatesData(await fetchCertificates());
  };

  useEffect(() => {
    getCertificates();
  }, []);

  const handleCertificates = (e) => {
    setActiveType(e.target.innerText.toLowerCase());
  };

  const handleLoadAll = () => {
    setLoadAll((prev) => {
      return !prev;
    });
  };

  return (
    <div className="Certifications">
      <div className="main-title">
        {/* <img src={boyIcon} alt="" className="imgIcon boyIcon" /> */}
        Certifications
      </div>
      <div className="heading">
        <b>here are some of my Certificates</b>
      </div>
      <div className="buttons flex">
        <div
          className={activeType === "all" ? "button active" : "button"}
          onClick={() => setActiveType("all")}
        >
          All
        </div>
        {certificatesData && Object.keys(certificatesData).map((key) => (
          <div
            key={key}
            className={activeType === key ? "button active" : "button"}
            onClick={() => setActiveType(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </div>
        ))}
      </div>
      <div
        className={
          loadAll
            ? "all-certificates flex"
            : "all-certificates all-certificates-open flex"
        }
      >
        {certificatesData ? (
          <>
            {activeType == "all"
              ? Object.keys(certificatesData).map((key, i) => (
                <div key={i} className="container flex">
                  {certificatesData[key].map((certificate, i) => (
                    <Certificate
                      key={i}
                      isTilt={props.isTilt}
                      name={certificate.name}
                      credLink={certificate.credLink}
                      imgSrc={certificate.imgSrc}
                    />
                  ))}
                </div>
              ))
              : certificatesData[activeType] ? (
                <div className="container flex">
                  {certificatesData[activeType].map((certificate, i) => (
                    <Certificate
                      key={i}
                      isTilt={props.isTilt}
                      name={certificate.name}
                      credLink={certificate.credLink}
                      imgSrc={certificate.imgSrc}
                    />
                  ))}
                </div>
              ) : undefined}
          </>
        ) : (
          <div className="small-loader"></div>
        )}
      </div>
      <div className="button loadButton" onClick={handleLoadAll}>
        {loadAll ? "Show less" : "Show more"}
      </div>
    </div>
  );
}

export default Certifications;
