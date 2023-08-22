import React, { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";

const BuyData = () => {
  const [bonus, setBonus] = useState();

  const options = [
    { value: "MTN", key: "1" },
    { value: "GLO", key: "2" },
    { value: "AIRTEL", key: "3" },
    { value: "9MOBILE", key: "4" },
  ];

  const DataOptions = [
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
  ];

  const networkHandler = (e) => {
    const handler = e.target.value;
    if (handler === "GLO" || handler === "MTN") {
      setBonus(handler);
      return;
    }
  };

  return (
    <Container style={{ paddingTop: "1.5rem" }}>
      <Row style={{ width: "70%" }}>
        <h4>Buy Databundle </h4>

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
              <Form.Label>Network</Form.Label>
              <Form.Select onChange={networkHandler}>
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
              <Form.Label>DataBundle Plan</Form.Label>
              <Form.Select onChange={networkHandler}>
                {DataOptions.map((option) => (
                  <option value={option.value} key={option.key}>
                    {option.value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" name="number" required />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" name="amount" readOnly />
            </Form.Group>
          </Col>

          <Col style={{textAlign:"right"}}>
            <Button variant="primary" type="submit">
              Buy Now
            </Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default BuyData;
