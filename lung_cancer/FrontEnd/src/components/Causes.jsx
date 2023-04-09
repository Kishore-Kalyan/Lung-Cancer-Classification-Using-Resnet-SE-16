import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctorImage from "../assets/causes.jpg";

function Causes() {
  return (
    <div id="causes" className="hero-section d-flex align-items-center">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
            <div className="hero-text">
              <h1>Causes of Lung Cancer</h1>
              <p style={{ fontSize: "18px" }}>
                1) Smoking: The most common cause of lung cancer is smoking.
                When tobacco smoke is inhaled, it damages the cells in the
                lungs, leading to the development of cancer.
                <br />
                2) Radon exposure: Radon is a radioactive gas that is found in
                the soil and rocks. When radon is released into the air, it can
                be inhaled and cause damage to the lungs, leading to cancer.
                <br />
                3) Air pollution: Exposure to air pollution, both indoors and
                outdoors, has been linked to lung cancer. This includes exposure
                to chemicals, smoke, and other toxins. <br />
                4) Asbestos exposure: Asbestos is a mineral that was commonly
                used in construction materials. When asbestos fibers are
                inhaled, they can cause damage to the lungs, leading to cancer.
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
              style={{ maxWidth: "55%" }}
              src={doctorImage}
              alt="Doctor with microscope"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Causes;
