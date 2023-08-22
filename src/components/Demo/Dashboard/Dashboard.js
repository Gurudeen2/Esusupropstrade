import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Tooltip,
  OverlayTrigger,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Tota } from "react-bootstrap-icons";

import classes from "./Dashboard.module.css";

const DemoDashboard = () => {
  const tooltip = (
    <Tooltip id="tooltip">
      Return on investment after sale, including rental profit and expected
      annual appreciation of the area.
    </Tooltip>
  );
  return (
    <Container style={{ paddingBottom: "4rem" }}>
      <Row style={{ marginTop: "3rem" }}>
        <Col>Dashboard</Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Col>
          <div className={classes["icon-container"]}>
            <div style={{ textAlign: "center" }}>
              <div className={classes["table-cell"]}>
                {/* <i className="bi bi-currency-dollar"></i> */}
              </div>
              <div
                className={classes["table-cell"]}
                style={{ textAlign: "left" }}
              >
                <span className="">Total Assets</span>
              </div>

              <div>
                <span>500000 NGN</span>
              </div>
            </div>
          </div>
        </Col>
        {/* vertical-align: middle; icon style
        media only 
        display: block;
    text-align: center;
    margin: 0;
    margin-bottom: 15px;
         */}
        <Col>
          <div className={classes["icon-container"]}>
            <div style={{ textAlign: "center" }}>
              <div className={classes["table-cell"]}>
                {/* <i className="">icon</i> */}
              </div>
              <div
                className={classes["table-cell"]}
                style={{ textAlign: "left" }}
              >
                <span className="">Properties</span>
              </div>
              <div>
                <span>0</span>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className={classes["icon-container"]}>
            <div style={{ textAlign: "center" }}>
              <div className={classes["table-cell"]}>
                {/* <i className="">icon</i> */}
              </div>
              <div
                className={classes["table-cell"]}
                style={{ textAlign: "left" }}
              >
                <span className="">Available</span>
              </div>

              <div>
                <span>500000 NGN</span>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className={classes["icon-container"]}>
            <div style={{ textAlign: "center" }}>
              <div className={classes["table-cell"]}>
                {/* <i className="">icon</i> */}
              </div>
              <div
                className={classes["table-cell"]}
                style={{ textAlign: "left" }}
              >
                <span className="">Invested</span>
              </div>

              <div>
                <span>0 NGN</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "3rem" }}>
        <Col>
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Text>
                Investment by property
                <br />
                Total invested 0 NGN
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
            <Card.Body>
              <Card.Text>Properties by country</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "3rem" }}>
        {/* <div style={{ textAlign: "center" }}>
          <h3>Opportunities </h3>
          <span>Selection of investment opportunities</span>
        </div> */}
        <Card
          style={{
            width: "18rem",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            border: "none",
          }}
        >
          <Card.Img src="/D2.jpg" as={Image} variant="top" fluid={true} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Naibut Beach
            </Card.Title>
            <Card.Text>
              <div className={classes.spacing}>
                <strong>Price in NGN</strong>: <span> ₦200,000,000.00</span>
              </div>
              <div className={classes.spacing}>
                <strong>Property Type</strong>: <span>Residential</span>
              </div>
              <div className={classes.spacing}>
                <strong>Projected ROI Transfer</strong>{" "}
                <OverlayTrigger placement="top" overlay={tooltip}>
                  <i
                    bsStyle="default"
                    className="bi bi-question-circle-fill"
                  ></i>
                </OverlayTrigger>{" "}
                : <span>63%</span>
              </div>
            </Card.Text>
            <div className={classes["button-container"]}>
              <Link className={`btn btn-primary ${classes.button}`} to="">
                More Details
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default DemoDashboard;
