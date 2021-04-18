import React from "react";
import logo from "../logo.png"
import  "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll'



const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar-fixed">
  <div className="container">
    <a class="navbar-brand" href="#"><img className="logo" src={logo} alt=""/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <FontAwesomeIcon icon={faBars} style={{ color:" #ccf2f4" }} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <Link className="nav-link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={2000}
          >
          Home
        </Link>
        <Link className="nav-link"
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={1500}
          >
          About me
        </Link>
        <Link className="nav-link"
          activeClass="active"
          to="my-skills"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          >
          My Skills
        </Link>
        <Link className="nav-link"
          activeClass="active"
          to="my-work"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          >
          My work
        </Link>
        <Link className="nav-link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={1500}
          >
          Contact
        </Link>
       </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
