import React, { useEffect, useState } from "react";
import {
  Carousel,
  Col,
  Container,
  Row,
  OverlayTrigger,
  Tooltip,
  Image,
  Card,
  Table,
  Button,
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { currency } from "../Util/currencyConvert";
import classes from "./Market.module.css";

const SecondaryMarket = () => {
  const { appartmentName } = useParams();
  const { dataContent, setDataContent_ } = useState();
  console.log("match SecondaryMarket", appartmentName);
  const data = [
    {
      title: "Krabi Beach Apartment",
      price: 200000000,
      type: "Apartment",
      roi: 45.63,
      img1: "D1.jpg",
      img2: "D2.jpg",
      img3: "D6.jpg",
      img: [
        {
          img1: "D6.jpg",
          img2: "D6.jpg",
          img3: "D6.jpg",
        },
      ],
    },
    {
      title: "Land at Lekki",
      price: 340000000,
      type: "Apartment",
      roi: 25.31,
      img1: "D6.jpg",
      img2: "D6.jpg",
      img3: "D6.jpg",
      img: [
        {
          img1: "D6.jpg",
          img2: "D6.jpg",
          img3: "D6.jpg",
        },
      ],
    },
  ];

  const tooltip = (
    <Tooltip id="tooltip">
      <strong>Internal Rate of Return</strong>
    </Tooltip>
  );

  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Row>
        <Col
          sm="4"
          style={{
            fontSize: "14px",
          }}
        >
          <Card
            style={{
              // width: "18rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Img src="/D2.jpg" as={Image} variant="top" fluid={true} />

            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Land at Lekki
              </Card.Title>
              <Card.Text>
                <div className={classes.spacing}>
                  <strong>Price in NGN</strong>: <span>200,000,000</span>
                </div>
                <div className={classes.spacing}>
                  <strong>Total EPT</strong>: <span>30,000</span>
                </div>
                <div className={classes.spacing}>
                  <strong>Price Per EPT</strong> : <span>6,700</span>
                </div>
                <div
                  style={{
                    display: "table",
                    width: "100%",
                    padding: "0",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Col
                    style={{
                      display: "table-cell",
                      width: "50%",
                      background: "#f7f7f7",
                      borderRight: "solid 1px #ffffff",
                      textAlign: "center",
                      padding: "15px 5px",
                    }}
                  >
                    <h5>7.03 %</h5>
                    <span>
                      <strong>IRR</strong>{" "}
                      <OverlayTrigger placement="top" overlay={tooltip}>
                        <i
                          bsStyle="default"
                          className="bi bi-question-circle-fill"
                        ></i>
                      </OverlayTrigger>
                    </span>
                  </Col>
                  <Col
                    style={{
                      display: "table-cell",
                      width: "50%",
                      background: "#f7f7f7",
                      borderRight: "solid 1px #ffffff",
                      textAlign: "center",
                      padding: "15px 5px",
                    }}
                  >
                    <h5>{currency.format(200000000)}</h5>
                    <span>NGN</span>
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      Average price per sqm
                    </span>
                  </Col>
                </div>
                <div className={classes.spacing}>
                  <strong>Project Type</strong>: <span>Residential</span>
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
                <div className={classes.spacing}>
                  <strong>Rental Yield</strong>: <span>Yield</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm="8">
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body>
              <p>EPT transfer offers list</p>
              <Card.Text>
                <div>
                  <Table responsive="sm" striped>
                    <thead>
                      <tr>
                        <th>EPT</th>
                        <th>% of total (5,000)</th>
                        <th>USD/NGN</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.02%</td>
                        <td>894</td>
                        <td>
                          {" "}
                          <Button
                            as="input"
                            type="button"
                            variant="success"
                            value="BUY"
                          />
                        </td>
                        <td>
                          {" "}
                          <Button
                            as="input"
                            type="button"
                            variant="danger"
                            value="SELL"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondaryMarket;
