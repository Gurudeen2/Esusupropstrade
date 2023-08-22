import React from "react";
import classes from "./Feature.module.css";
import { Col, Container, Row } from "react-bootstrap";

const Feature = () => {
  return (
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
              <h4>How it works</h4>
              <p>
                The process of becoming a property owner with us is very simple
              </p>
            </div>
            <Row style={{ paddingTop: "1rem" }}>
              <Col style={{ textAlign: "center" }}>
                <img
                  src={require("../../../assets/images/create.png")}
                  alt="1"
                />
                <h5 className={classes.h5}>Create your account</h5>
                <p className={classes.p}>
                  Register on the website and get full access to all
                  opportunities.
                </p>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <img
                  src={require("../../../assets/images/how-works-icon-2.png")}
                  alt="1"
                />
                <h5 className={classes.h5}>Select an investment opportunity</h5>
                <p className={classes.p}>
                  Build your own investment portfolio across different
                  opportunities.
                </p>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <img
                  src={require("../../../assets/images/how-works-icon-3.png")}
                  alt="1"
                />
                <h5 className={classes.h5}>Generate monthly income</h5>
                <p className={classes.p}>
                  Receive rental income monthly while the asset grows in value.
                </p>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <img
                  src={require("../../../assets/images/how-works-icon-4.png")}
                  alt="1"
                />
                <h5 className={classes.h5}>Exit investment</h5>
                <p className={classes.p}>
                  When your investment exits, you’ll receive your initial
                  investment, together with the appreciation gains.
                </p>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feature;
