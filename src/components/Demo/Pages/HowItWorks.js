import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import classes from "./About.module.css";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <Navbar className={classes["nav-bar"]}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src="" alt="logo" width="30%" className={classes.img} /> */}
            <h2>EsusuProp Trade</h2>
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/howitworks">How It Works</Nav.Link>
            <Nav.Link href="#home">FAQ</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          <Nav className="justify-content-end">
            <Link
              to="/demoreg"
              className="btn btn-outline-secondary"
              style={{
                color: "#000",
                background: "#fff",
                border: "1px solid black",
              }}
            >
              Signup
            </Link>
            {"  "}
            <Link to="/demologin" className="btn btn-primary">
              Login
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <div style={{ background: "#f8f8f8" }}>
        <Container
          style={{
            paddingTop: "2rem",
            paddingBottom: "14rem",
          }}
        >
          <Row>
            <Col>
              <div style={{ textAlign: "center" }}>
                <h4>HOW IT WORKS</h4>
              </div>
              <p className={classes.justify}>
                Step 1: Create your account and deposit funds in Naira or USD by
                transferring to your bank account.
              </p>
              <p className={classes.justify}>
                Step 2: Choose from a range of investment opportunities and
                start growing your real estate portfolio with as little as NGN
                10,000.
              </p>
              <p className={classes.justify}>
                Step 3: Track your investments, transactions, and profits
                conveniently on your personalized dashboard.
              </p>
              <p className={classes.justify}>
                Step 4: Exit your investment through property sales, selling
                shares to other users, or selling participation on exchanges.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HowItWorks;
