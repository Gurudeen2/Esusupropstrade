import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./About.module.css";

const FAQ = () => {
  return (
    <div className={classes["about-bg"]}>
      <Container>
        <Row>
          <Col style={{ padding: "4rem", color: "#fff" }}>
            <h4>Frequently Asked Questions</h4>
            <p>Your questions answered</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <div style={{ background: "#f8f8f8" }}>
        <Container
          style={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Row>
            <Col>
              <div style={{ textAlign: "center" }}>
                <h4>FAQ</h4>
              </div>
              <p className={classes.justify}>
                Think of us as the bridge connecting customers with a perfect
                asset. Using blockchain technology, we provide an innovative way
                of investing in real estate projects around the world faster and
                easier than ever before. Our crowdfunding platform makes the
                funding process safe and accessible from anywhere in the world.
                It is alsocompletely transparent.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FAQ;
