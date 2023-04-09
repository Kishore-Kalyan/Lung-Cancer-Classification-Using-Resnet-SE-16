import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctorImage from "../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="hero-section d-flex align-items-center">
      <Container>
        <Row>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center justify-content-md-start"
          >
            <img
              style={{ maxWidth: "70%" }}
              src={doctorImage}
              alt="Doctor with microscope"
            />
          </Col>
          <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
            <div className="hero-text">
              <h1>About</h1>
              <p style={{ fontSize: "18px" }}>
                Our website aims to provide a reliable classification of lung
                cancer using advanced deep learning technology. Our model uses
                ResNet SE 16, a powerful and efficient neural network
                architecture that ensures accurate detection and classification
                of lung cancer with high precision. We believe that early
                detection of lung cancer is crucial for successful treatment,
                and our deep learning model can help to achieve this goal. Our
                team has worked tirelessly to develop and refine our model,
                using the latest technology and best practices. We are dedicated
                to providing a comprehensive and user-friendly platform for lung
                cancer classification, and we strive to make a positive impact
                in the fight against this devastating disease.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
