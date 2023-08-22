import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./About.module.css";

const Contact = () => {
  return (
    <>
      <Container></Container>
      <div className={classes["about-bg"]}>
        <Container>
          <Row>
            <Col style={{ padding: "4rem", color: "#fff" }}>
              <h4>
                Blockreal is proud to employ professionals with a successful
                track record in their respective fields.
              </h4>
              <p>
                Professionals bringing the new way of Real Estate investment
              </p>
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
                  <h4>ABOUT US</h4>
                </div>
                <p className={classes.justify}>
                  Think of us as the bridge connecting customers with a perfect
                  asset. Using blockchain technology, we provide an innovative
                  way of investing in real estate projects around the world
                  faster and easier than ever before. Our crowdfunding platform
                  makes the funding process safe and accessible from anywhere in
                  the world. It is alsocompletely transparent.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Contact;
