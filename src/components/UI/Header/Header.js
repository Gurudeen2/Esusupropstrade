import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/account/demo/dashboard">
          {/* <img src="" alt="logo" width="30%" className={classes.img} /> */}
          <h2>SimTopper </h2>
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* <div
            style={{ paddingRight: "1rem", color: "#fff", paddingLeft: "1rem" }}
          >
            <span>My Balance</span>
            <h5>4,000,000</h5>
          </div> */}
          <Link
            // tag="a"
            className={`btn btn-success ${classes.link}`}
            to="/account/demo/deposit"
          >
            Deposit
          </Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link disabled style={{ color: "#fff" }}>
            Akeem
          </Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
