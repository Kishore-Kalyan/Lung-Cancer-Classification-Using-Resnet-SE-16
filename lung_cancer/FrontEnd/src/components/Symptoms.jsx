import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctorImage from "../assets/microscope.png";

const Symptoms = () => {
  return (
    <div id="symptoms" className="hero-section d-flex align-items-center">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
            <div className="hero-text">
              <h1>Symptoms of Lung Cancer</h1>
              <p style={{ fontSize: "18px" }}>
                1) Persistent cough: A cough that lasts for more than two or
                three weeks and doesn't go away with medication could be a sign
                of lung cancer.
                <br />
                2) Shortness of breath: Difficulty breathing or feeling out of
                breath, especially during physical activity, can be a symptom of
                lung cancer.
                <br />
                3) Chest pain: Pain or discomfort in the chest, shoulders, or
                back can be a symptom of lung cancer. This pain may worsen when
                you cough, laugh, or take a deep breath.
                <br />
                4) Unexplained weight loss: Losing weight without trying can be
                a symptom of lung cancer, especially if you lose 10 pounds or
                more in a short period of time.
                <br />
              </p>  
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <img
              style={{ maxWidth: "70%" }}
              src={doctorImage}
              alt="Doctor with microscope"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Symptoms;
