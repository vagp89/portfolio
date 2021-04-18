import React from 'react'
import "./Footer.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Footer = () => {
  return (
    <div className="footer-section">
      <Container  fluid={true}>
        <Row className=" ">
          <Col className="p-0"  >
            Berlin 2021
          </Col>
          <Col className="" md={3.5}>
            This site was made by VG ♥️
          </Col>

        </Row>
      </Container>

    </div>
  )
}

export default Footer;
