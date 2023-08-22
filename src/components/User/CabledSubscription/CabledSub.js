import React, { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";

const CabledSub = () => {
  const options = [
    { value: "MTN", key: "1" },
    { value: "GLO", key: "2" },
    { value: "AIRTEL", key: "3" },
    { value: "9MOBILE", key: "4" },
  ];

  return (
    <Container>
      <Row style={{ width: "60%" }}>
        <h4>Buy Airtime </h4>

        <Form>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Wallet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wallet"
                defaultValue="parse balance from db"
                readOnly
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>TV Subscription</Form.Label>
              <Form.Select>
                {options.map((option) => (
                  <option value={option.value} key={option.key}>
                    {option.value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Package</Form.Label>
              <Form.Select>
                {options.map((option) => (
                  <option value={option.value} key={option.key}>
                    {option.value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>SMARTCARD/IUC Number</Form.Label>
              <Form.Control type="text" name="iucnumber" required />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phnumber" required />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" name="amount" readOnly />
            </Form.Group>
          </Col>

          <Col>
            <Button variant="primary" type="submit">
              Verify IUC Number
            </Button>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Buy Now
            </Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default CabledSub;
