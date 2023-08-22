import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";

const Transaction = () => {
  const username = useRef("");
  return (
    <Container
      style={{ paddingLeft: "4rem", paddingRight: "4rem", paddingTop: "2rem" }}
    >
      <Row>
        <Col sm="3" style={{ textAlign: "left" }}>
          <h3>Transaction</h3>
        </Col>
        <Col sm="9" style={{ textAlign: "right" }}>
          <Button as="input" type="button" value="USD" />{" "}
          <Button as="input" type="submit" value="NGN" />{" "}
          <Button as="input" type="submit" value="Outflows" />{" "}
          <Button as="input" type="button" value="Earning" />{" "}
          <Button as="input" type="button" value="All Data" />
        </Col>
      </Row>
      {/* height: 30px; margin-right: 5px; */}
      <Row
        style={{
          marginTop: "1rem",

          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Col
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <div>
            <Table responsive="sm" striped>
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>TYPE</th>
                  <th>AMOUNT</th>
                  <th>CURRENCY</th>
                  <th>COMMENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2019-12-25 17:47</td>
                  <td>Transfer</td>
                  <td>26,000</td>
                  <td>NGN</td>
                  <td>Obtained from 32 EPT transferred</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: "right", paddingTop: "0.5rem" }}>
        *This report is updated every hour
      </div>
    </Container>
  );
};
export default Transaction;
