import React from 'react';
import "./Header.css";
import Typed from "react-typed";
import Particles from "react-particles-js";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Header() {
  return (
    <div className="header-wraper" id="home">
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "square",
              stroke:{
              width: 6,
              color: "#ff75a0"
              }
            }
          }
         }}
        />
      <div className="main-info">
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Frontend-Developer", "Backend-Developer"," Fullstack-Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link className="btn-main-offer"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={2000}
          >
          Contact Me
        </Link>

      </div>
    </div>
  )
}

export default Header;
