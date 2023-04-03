import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctorImage from "../assets/microscope.png";

const MyHero = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  useEffect(() => {
    const form = document.getElementById("upload-form");
    const fileInput = document.getElementById("image-upload");
    const dp = document.getElementById("dp");

    fileInput.addEventListener("change", function () {
      //img change
      dp.src = URL.createObjectURL(fileInput.files[0]);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const file = fileInput.files[0];
      if (!file) return;

      setLoading(true); // show the processing animation

      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const cf = data.confidence * 100;
          const confi = cf.toFixed(2);
          setResult(`
            <h4>${data.class}</h4>
            <h4>${confi}%</h4>
          `);
          setLoading(false); // hide the processing animation
        })
        .catch((error) => {
          console.error(error);
          setResult("An error occurred while processing the image.");
          setLoading(false); // hide the processing animation
        });
    });
  }, []);
  return (
    <div id="predict" className="hero-section d-flex align-items-center">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
            <div className="hero-text">
              <h1>Step By Step Guide</h1>
              <p style={{ fontSize: "18px" }}>
              1) Navigate to the predict page and check for a form with an "Upload Image" button and a "Submit" button<br/>
              2) Click the "Upload Image" button to select an image file from your device. Selected image file is displayed as a preview on the form, replacing the default sample image.<br/>
              3) Click the "Submit" button to initiate the image classification process.
              4) Wait a few seconds after submitting to get the results.
              </p>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center justify-content-md-center"
          >
            <form id="upload-form">
              <div className="card-con">
                <div className="card">
                  <h3>Upload Image</h3>
                  <img src="sample-dp.webp" alt="" id="dp" />
                  {loading ? (
                    <div className="loading">Processing...</div>
                  ) : (
                    <div className="result" dangerouslySetInnerHTML={{ __html: result }}></div>
                  )}
                  <label htmlFor="image-upload" className="upload-btn">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    hidden
                  />
                  <button type="submit" id="img-submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyHero;
