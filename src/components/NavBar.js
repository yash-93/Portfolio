import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand>
        <Link to="/">
          Yashdeep Bachhas{" "}
          {/* <img
            src="https://avatars2.githubusercontent.com/u/23582791?s=400&u=eddb806106f8238ca2695ada9d9a500d12ef8729&v=4"
            height="50"
            width="50"
          /> */}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link style={{ transition: "0.3s" }}>
            <Link to="/projects">Projects</Link>
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1Fjvc0WoxA1bCSSjF6mzF_U-yQHDjNGt-/view?usp=sharing",
                "_blank"
              );
            }}
            style={{ transition: "0.3s" }}
          >
            Resume
          </Nav.Link>
          <Nav.Link to="/contact" style={{ transition: "0.3s" }}>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
