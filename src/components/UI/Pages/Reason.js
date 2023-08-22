import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import classes from "./Reason.module.css";
import image from "../../../assets/images/photo-1624411024074-18a756682b50.jfif";

const Reason = () => {
  return (
    <Container fluid className={classes.reason}>
      <Row>
        <Col className={classes["justify-content2"]}>
          <h2>Why Choose Us?</h2>
          <p>
            We offer instant recharge of Airtime, Databundle, CableTV (DStv,
            GOtv & Startimes), Electricity Bill Payment and more...
            <br />
            We're Fast <br />
            Automated Services <br />
            100% Secured <br />
            We're Reliable
            <br />
            Always Online <br />
            24/7 Customer Support
          </p>
        </Col>
        <Col className={classes["justify-content"]}>
          <img src={image} className={classes["round-img"]} alt="choose us" />
        </Col>
      </Row>

      <Row>
        <Col className={classes["justify-content"]}>
          <img src={image} className={classes["round-img"]} alt="choose us" />
        </Col>
        <Col
          className={classes["justify-content2"]}
          style={{ textAlign: "justify" }}
        >
          <h2>We Provide Awesome Services</h2>
          <p>
            Certain things are hard 😓 but making payments shouldn't be one of
            them 😋💗. SIMTOPPER helps you make payments for services you enjoy
            right from the comfort of your home or office. The experience of
            total convenience,fast service delivery and easy payment is just at
            your fingertips.
          </p>
        </Col>
      </Row>

      <Row>
        <Col
          className={classes["justify-content2"]}
          style={{ textAlign: "justify" }}
        >
          <h2>Become An Agent</h2>
          <p>
            Join our network of outstanding entrepreneurs patnering with
            SIMTOPPER. Bring the SIMTOPPER 'easy-payments' experience closer to
            your network and earn a commission for every transaction you perform
            for your customers.
            <p></p>
            We offer our Referrers the best referral program incentives to
            encourage entrepreneurial and managerial skill acquisition; enhance
            growth and development and general empowerment among our students on
            campuses of higher learning and youths in diaspora. Finally, to
            promote technology via the use of ICT tools in our society.
          </p>
          <Button>Get Started</Button>
        </Col>
        <Col className={classes["justify-content"]}>
          <img src={image} className={classes["round-img"]} alt="choose us" />
        </Col>
      </Row>
    </Container>
  );
};

export default Reason;
