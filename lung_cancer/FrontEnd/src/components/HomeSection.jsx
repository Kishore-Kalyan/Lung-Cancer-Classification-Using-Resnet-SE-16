import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import lungCancerImage from "../assets/Home.png";

const MyHero = () => {
  return (
    <div id="home" className="hero-section d-flex align-items-center">
      <Container>
        <Row>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center justify-content-md-start"
          >
            <img
              style={{ maxWidth: "70%", height: "auto", width: "100%" }}
              src={lungCancerImage}
              alt="Doctor with microscope"
            />
          </Col>
          <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
            <div className="hero-text">
              <h1>Classification of Lung Cancer</h1>
              <p style={{ fontSize: "18px" }}>
                Welcome to our website dedicated to the classification of lung
                cancer using ResNet SE 16, a deep learning model that provides
                accurate and reliable results. Our website uses advanced
                technology to accurately classify different types of lung
                cancer. Using the ResNet SE 16 deep learning model, we are able
                to provide reliable results in a matter of seconds. Whether you
                are a patient or a medical professional, our platform offers a
                user-friendly interface to easily input data and obtain a
                diagnosis. By providing accurate and timely information, we aim
                to improve the quality of care and ultimately save lives
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyHero;
