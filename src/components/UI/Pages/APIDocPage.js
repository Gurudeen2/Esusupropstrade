import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import classes from "./APIDocPage.module.css";

const APIDocPage = () => {
  return (
    <Container fluid className={classes.apicontent}>
      <Row>
        <Col>
          <h2>Integrate Our API</h2>
          <p>
            With our ready-to-use and developer friendly API, you can easily
            integrate with your website or app for FREE to start receiving
            payments in a breeze.
          </p>

          <Button className={classes.button}>API DOC</Button>
        </Col>
        <Col>documentation image here</Col>
      </Row>
    </Container>
  );
};

export default APIDocPage;
