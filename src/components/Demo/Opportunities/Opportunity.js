import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Opportunities.module.css";

const Opportunity = () => {
  const data = [
    {
      title: "Naibut Beach",
      price: 200000000,
      type: "Residential",
      roi: 63,
      img1: "/D1.jpg",
      img2: "/D2.jpg",
      img3: "/D6.jpg",
      img: [
        {
          img1: "/D6.jpg",
          img2: "/D6.jpg",
          img3: "/D6.jpg",
        },
      ],
    },
    {
      title: "Land at Lekki",
      price: 340000000,
      type: "Residential",
      roi: 25,
      img1: "/D6.jpg",
      img2: "/D6.jpg",
      img3: "/D6.jpg",
      img: [
        {
          img1: "/D6.jpg",
          img2: "/D6.jpg",
          img3: "/D6.jpg",
        },
      ],
    },
  ];

  let NGN = Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  const tooltip = (
    <Tooltip id="tooltip">
      Return on investment after sale, including rental profit and expected
      annual appreciation of the area.
    </Tooltip>
  );
  return (
    <Container style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
      <div className={classes.heading}>
        <h5>Opportunities</h5>
        <span>Selection of investment opportunities</span>
      </div>

      <Row>
        {data.map((dt) => {
          return (
            <Col
              sm="4"
              xs="4"
              md="4"
              lg="4"
              xl="4"
              style={{ marginBottom: "1.5rem" }}
            >
              <Card
                style={{
                  width: "18rem",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  border: "none",
                }}
              >
                <Card.Img src={dt.img1} as={Image} variant="top" fluid={true} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {dt.title}
                  </Card.Title>
                  <Card.Text>
                    <div className={classes.spacing}>
                      <strong>Price in NGN</strong>:{" "}
                      <span>{NGN.format(dt.price)}</span>
                    </div>
                    <div className={classes.spacing}>
                      <strong>Property Type</strong>: <span>{dt.type}</span>
                    </div>
                    <div className={classes.spacing}>
                      <strong>Projected ROI Transfer</strong>{" "}
                      <OverlayTrigger placement="top" overlay={tooltip}>
                        <i
                          bsStyle="default"
                          className="bi bi-question-circle-fill"
                        ></i>
                      </OverlayTrigger>{" "}
                      : <span>{dt.roi}%</span>
                    </div>
                  </Card.Text>
                  <div className={classes["button-container"]}>
                    <Link
                      className={`btn btn-primary ${classes.button}`}
                      to={`${dt.title}`}
                    >
                      More Details
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Opportunity;
