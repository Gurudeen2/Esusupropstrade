import React, { useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Setup = () => {
  return (
    <Container
      style={{ paddingLeft: "6rem", paddingRight: "6rem", paddingTop: "2rem" }}
    >
      <Row>
        <Col>
          <h3>Enable</h3>
        </Col>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body>
              <p style={{ fontSize: "15px" }}>
                You about to take account security to the next level. Follow the
                steps in the wizard to enable two-factor authentication.
              </p>
              <Card.Text>
                <Row>
                  <Col style={{ textAlign: "left" }}>
                    <Button
                      as="input"
                      style={{
                        background: "white",
                        color: "#000",
                      }}
                      type="button"
                      variant="secondary"
                      value="Back"
                    />{" "}
                    <Button as="input" type="button" value="Next" />
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <Button
                      as="input"
                      type="button"
                      style={{
                        background: "#fff",
                        border: "none",
                        color: "#000",
                      }}
                      variant="secondary"
                      value="Cancel"
                    />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Setup;
