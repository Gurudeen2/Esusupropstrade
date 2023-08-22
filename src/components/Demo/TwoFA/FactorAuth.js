import React, { useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Setup from "./Setup";

const FactorAuth = () => {
  const username = useRef("");
  return (
    <Container
      style={{ paddingLeft: "6rem", paddingRight: "6rem", paddingTop: "2rem" }}
    >
      {/* <Setup /> */}
      <Row>
        <Col>
          <h3>Two-Factor Authentication</h3>
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
              <p>
                Two-factor authentication is not enabled for your account.
                Enable two-factor authentication for enhanced account security.
              </p>
              <Card.Text>
                <Row>
                  <Col style={{ textAlign: "left" }}>
                    <Button
                      as="input"
                      type="button"
                      value="Enable"
                      size="sm"
                      style={{ border: "none" }}
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
export default FactorAuth;
