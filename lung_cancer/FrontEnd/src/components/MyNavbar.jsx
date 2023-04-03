import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/lung-cancer.png";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        className="navbar"
        variant="dark"
        bg="dark"
        expand="lg"
        fixed="top"
      >
        <Container>
          <a href="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="40" className="logo-img" />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#predict">Predict</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#causes">Causes</Nav.Link>
              <Nav.Link href="#treatments">Treatment</Nav.Link>
              <Nav.Link href="#symptoms">Symptoms</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
