import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import classes from "./Account.module.css";

function Account() {
  return (
    <>
      <Container fluid className={classes["account-container"]}>
        <Row>
          <Col md="12" sm="12" lg="12" xs="12">
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
              <h3
                style={{
                  textAlign: "right",
                }}
              >
                Akeem Fatai
                <a href="/" className={classes.achor}>
                  Logout
                </a>
              </h3>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
              <span style={{ background: "#028a0f", color: "#fff" }}>
                Wallet Balance
              </span>
              <h2>N1000</h2>
              <a href="/">Deposit</a>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
              <span style={{ background: "#028a0f", color: "#fff" }}>
                Commission
              </span>
              <h2>N0.00</h2>
              <div>
                <a href="/">Withdraw Commission</a>
              </div>
              <div>
                <a href="/">View Commission History</a>
              </div>
              <div>
                <a href="/">View Referral/Downline</a>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
              <span style={{ background: "#028a0f", color: "#fff" }}>
                Membership
              </span>
              <h2>FREE Member</h2>
              <b>
                <a href="/">Upgrade Membership</a>
              </b>
              <a href="/">KYC Verification</a>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
              <span style={{ background: "#028a0f", color: "#fff" }}>
                Service
              </span>
              <p>
                Service we render such as <a href="/">Buy Data</a>,{" "}
                <a href="/airtime">Buy Airtime</a>, <a href="/">Cabled Sub</a>,{" "}
                <a href="/">Electricity</a>
              </p>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
              <span style={{ background: "#028a0f", color: "#fff" }}>
                Transaction History
              </span>
              <h2>Transaction History</h2>

              <div>
                <a href="/">Click Here </a>
              </div>
            </Card>
          </Col>
          <Col>
            {/* <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
              <span style={{ background: "#028a0f", color: "#fff" }}>
                Membership
              </span>
              <h2>FREE Member</h2>
              <b>
                <a href="/">Upgrade Membership</a>
              </b>
              <a href="/">KYC Verification</a>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
