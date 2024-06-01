import { Container, Row, Col, Button } from "react-bootstrap";
import { SliderLanguages } from "./SliderLanguages";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{background:'#001f54'}}>
      <Container>
        <Row className="align-items-center">
          <SliderLanguages />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/andyfer004/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/andyfeer.fuentesvelasquez"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/andyf_fuentes/"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/Andyfer004"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
