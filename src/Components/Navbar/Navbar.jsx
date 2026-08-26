import { Link } from "react-scroll";
import { Link as NormalLink } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

import "./Navbar.css";

import { ThemeContext } from "../../Context/ThemeContex";

export default function Navbar(props) {
  const { mode, toggleMode } = useContext(ThemeContext);

  const [menuToggle, setMenuToggle] = useState(false);

  function toggleNav() {
    if (menuToggle) {
      setMenuToggle(!menuToggle);
    } else {
      setMenuToggle(true);
    }
  }

  function sideClick() {
    setMenuToggle(false);
  }

  return (
    <div className={`Navbar flex`}>
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
        <NormalLink to="/" className="link" title="refresh">
          <b>{`<`}</b>Yash Kshirsagar<b>{`/>`}</b>
        </NormalLink>
      </div>
      <div onClick={toggleNav} className="menuToggle flex">
        <div className={menuToggle ? "hamburger hamburgerClose" : "hamburger"}>
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </div>
      <div
        className={menuToggle ? "overlay" : "overlay overlayClose"}
        onClick={sideClick}
      ></div>
      <div className={`right flex ${menuToggle ? "menuOpen" : "menuClose"}`}>
        {props.isNav && (
          <>
            <div className="links flex">
              <Link
                to="hero"
                spy={true}
                offset={-200}
                duration={500}
                className="link"
                title="go to home section"
              >
                Home
              </Link>
              <Link
                to="projects"
                spy={true}
                offset={-100}
                duration={500}
                className="link"
                title="go to projects section"
              >
                Projects
              </Link>
              <Link
                to="skills"
                spy={true}
                offset={-100}
                duration={500}
                className="link"
                title="go to skills section"
              >
                Skills
              </Link>

              <Link
                to="about"
                spy={true}
                offset={-180}
                duration={500}
                className="link"
                title="go to about section"
              >
                About
              </Link>
            </div>
            <div className="container flex">
              <Link
                to="contact"
                spy={true}
                offset={-100}
                duration={500}
                title="go to contact section"
                className="nav-contact-link"
              >
                <span className="nav-contact-btn">Contact</span>
              </Link>
              <NormalLink to={"resume"} title="see resume" className="nav-contact-link">
                <span className="nav-contact-btn">Resume</span>
              </NormalLink>
            </div>
          </>
        )}

        <button
          onClick={toggleMode}
          className="theme-toggle-btn flex"
          title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
          aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        >
          {mode === "light" ? (
            <svg
              className="theme-icon moon-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#90CAF9" />
                  <stop offset="50%" stopColor="#64B5F6" />
                  <stop offset="100%" stopColor="#1E88E5" />
                </linearGradient>
                <radialGradient id="moonGlow" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#E3F2FD" />
                  <stop offset="60%" stopColor="#90CAF9" />
                  <stop offset="100%" stopColor="#42A5F5" />
                </radialGradient>
              </defs>
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                fill="url(#moonGlow)"
                stroke="url(#moonGrad)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <circle cx="8" cy="11" r="1.1" fill="#BBDEFB" opacity="0.65" />
              <circle cx="12" cy="15" r="1.4" fill="#BBDEFB" opacity="0.65" />
              <circle cx="14" cy="9" r="0.9" fill="#BBDEFB" opacity="0.65" />
              <path
                d="M19 3.5L19.4 4.8L20.7 5.2L19.4 5.6L19 6.9L18.6 5.6L17.3 5.2L18.6 4.8L19 3.5Z"
                fill="#FFD54F"
              />
            </svg>
          ) : (
            <svg
              className="theme-icon sun-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF9C4" />
                  <stop offset="45%" stopColor="#FFCA28" />
                  <stop offset="100%" stopColor="#FF8F00" />
                </radialGradient>
                <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE082" />
                  <stop offset="100%" stopColor="#FF6F00" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="5.2" fill="url(#sunGlow)" />
              <path
                d="M12 2V4.4M12 19.6V22M4.22 4.22L5.92 5.92M18.08 18.08L19.78 19.78M2 12H4.4M19.6 12H22M4.22 19.78L5.92 18.08M18.08 5.92L19.78 4.22"
                stroke="url(#rayGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
