import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import classes from "./Deposit.module.css";

const Deposit = () => {
  return (
    <Container>
      <Row
        style={{
          paddingBottom: "2rem",
          paddingTop: "2rem",
        }}
      >
        <Col>
          <h3>Deposit</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body style={{ textAlign: "justify" }}>
              <Card.Title>
                <i className="">icon</i> USD
              </Card.Title>
              <Card.Text>
                <div className={classes["padding-div"]}>
                  <a
                    href="/"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    Make Payment
                  </a>
                  <p className={classes["padding-p"]}>
                    * Click on the button to make payment in USD.
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body style={{ textAlign: "justify" }}>
              <Card.Title>
                <i className="">icon</i> NGN
              </Card.Title>
              <Card.Text>
                <div className={classes["padding-div"]}>
                  <a
                    href="/"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    Make Payment
                  </a>
                  <p className={classes["padding-p"]}>
                    * Click on the button to generate your address where you can
                    send NGN to the platform.
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        style={{
          paddingTop: "4rem",
          paddingBottom: "2rem",
        }}
        id="withdraw"
      >
        <Col>
          <h3>Withdrawal</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title>
                <p>You can withdraw the amount you want from your balance</p>
              </Card.Title>

              <Card.Text>
                {/* <div
                  className="alert alert-warning"
                  role="alert"
                  style={{ fontSize: "14px" }}
                >
                  Please confirm that you are sending your funds to USDT token
                  from <strong>Ethereum network enabled wallet</strong>. USDT
                  sent to non-compatible addresses may be non-retrievable by the
                  recipient.
                </div> */}
                <Form>
                  <Row className="mb-3">
                    <Col sm="4">
                      <Form.Group controlId="Account Number">
                        <Form.Label column sm="4" className="text-left">
                          Account Number
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control
                            type="text"
                            name="Account Number"
                            placeholder="0"
                            // ref={register}
                          />
                        </Col>
                      </Form.Group>
                    </Col>

                    <Col sm="8">
                      <Form.Group controlId="bankname">
                        <Form.Label column sm="4" className="text-left">
                          Account Name
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control
                            type="text"
                            name="walletaddress"
                            // ref={register}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm="4">
                      <Form.Group controlId="Bank Name">
                        <Form.Label column sm="4" className="text-left">
                          Bank Name
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control
                            type="text"
                            name="Bank Name"
                            placeholder="0"
                            // ref={register}
                          />
                        </Col>
                      </Form.Group>
                    </Col>

                    <Col sm="8"></Col>
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ textAlign: "right", width: "100%" }}>
                        <Button size="sm">Send</Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Deposit;
