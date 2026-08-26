import React, { useContext, useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import Typer from "react-text-typist";
import Lottie from "lottie-react";
import gsap from "gsap";

import "./Hero.css";

import Connect from "../Connect/Connect";
import arrowDarkJson from "../../assets/animLogos/arrowDark.json";
import arrowLightJson from "../../assets/animLogos/arrowLight.json";
import { ThemeContext } from "../../Context/ThemeContex";
import fireIcon from "/iconsImg/fire.png";
import fetchInfo from "../../Utils/GetInfo";
import Img from "../Img/Img";

function Hero(props) {
  const { mode } = useContext(ThemeContext);

  const [infoData, setInfoData] = useState();
  const [animTitle, setAnimTitle] = useState();
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Developer.";

  const getInfo = async () => {
    const info = await fetchInfo();
    setInfoData(info);
    setAnimTitle(info.name);
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId;

    const typeLoop = () => {
      if (!isDeleting) {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
          if (index > fullText.length) {
            isDeleting = true;
            timeoutId = setTimeout(typeLoop, 2400);
            return;
          }
          timeoutId = setTimeout(typeLoop, 100);
        }
      } else {
        if (index > 0) {
          index--;
          setDisplayText(fullText.slice(0, index));
          timeoutId = setTimeout(typeLoop, 45);
        } else {
          isDeleting = false;
          timeoutId = setTimeout(typeLoop, 600);
        }
      }
    };

    timeoutId = setTimeout(typeLoop, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleHoverTextEnter = (e) => {
    gsap.to(e.target, 0.3, {
      y: -25,
      rotate: -50,
      repeat: 0,
    });
  };

  const handleHoverTextLeave = (e) => {
    gsap.to(e.target, 1, {
      rotate: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      repeat: 0,
    });
  };

  return (
    <div className="Hero flex" id="hero">
      <div className="left">
        <div className="heading">Welcome</div>
        <div className="main-titles">
          <div className="main-title flex">
            Hello, I'm
            <b className="flex">
              {animTitle ? (
                <>
                  {animTitle.split("").map((char, i) => (
                    <span
                      key={i}
                      onMouseEnter={handleHoverTextEnter}
                      onMouseLeave={handleHoverTextLeave}
                      className="anim_Title-Char"
                      title="Isn't it cool 😃"
                    >
                      {char == " " ? (
                        <span style={{ margin: "6px" }}></span>
                      ) : (
                        char
                      )}
                    </span>
                  ))}
                </>
              ) : (
                <div className="small-loader"></div>
              )}
            </b>
            {mode == "dark" ? (
              <Lottie
                className="animArrow"
                animationData={arrowDarkJson}
                loop={true}
              />
            ) : (
              <Lottie
                className="animArrow"
                animationData={arrowLightJson}
                loop={true}
              />
            )}
          </div>
          <div className="main-title role-title flex">
            <span className="role-typing-text">
              {displayText}
              <span className="typing-cursor">|</span>
            </span>
          </div>
        </div>
        <div className="sub-heading">
          {infoData?.about || "Passionate and results-driven Software Developer with expertise in developing scalable web applications, intelligent AI-driven solutions, and modern full-stack systems. Dedicated to writing clean, performant code and leveraging AI technologies to solve complex problems."}
        </div>
        <Connect />
      </div>
      <div className="right">
        <Tilt
          perspective={1000}
          glareEnable={true}
          tiltReverse={true}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          scale={1}
          tiltEnable={props.isTilt}
          gyroscope={false}
          glarePosition={"all"}
          glareMaxOpacity={0.05}
          glareColor="white"
          glareBorderRadius="10px"
        >
          <div className="imgWrapper">
            {infoData ? (
              <>
                <img src={fireIcon} alt="" className="imgIcon fireIcon" />
                <Img
                  className="myImg"
                  title="It's me"
                  src={infoData.profileImg}
                  alt="Yash Kshirsagar"
                />
              </>
            ) : (
              <div className="small-loader"></div>
            )}
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Hero;
