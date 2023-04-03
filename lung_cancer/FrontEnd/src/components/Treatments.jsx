import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctorImage from "../assets/microscope.png";

const Treatments = () => {
  return (
    <div id="treatments" className="hero-section d-flex align-items-center">
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
              <h1>Treatments for Lung Cancer</h1>
              <p style={{ fontSize: "18px" }}>
                1) <strong>Surgery</strong> is often the preferred treatment for early-stage lung
                cancer. During surgery, the tumor and surrounding tissue are
                removed. The type of surgery depends on the size and location of
                the tumor.
                <br />
                2) <strong>Radiation</strong> therapy uses high-energy X-rays to kill cancer
                cells. It can be used as the primary treatment for small lung
                cancers or as an adjuvant therapy after surgery to kill any
                remaining cancer cells.
                <br />
                3) <strong>Chemotherapy</strong> involves the use of drugs to kill cancer cells.
                It is often used in combination with other treatments, such as
                surgery and radiation therapy, to treat advanced or metastatic
                lung cancer.
                <br />
                4) <strong>Targeted therapy</strong> is a type of cancer
                treatment that targets specific genes or proteins that are
                involved in the growth and spread of cancer cells. Targeted
                therapy drugs are designed to block the action of these genes or
                proteins and can be used to treat certain types of lung cancer.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Treatments;
