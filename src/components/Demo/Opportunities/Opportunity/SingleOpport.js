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
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { currency } from "../../Util/currencyConvert";
import classes from "../Opportunities.module.css";
import Opportunity from "../Opportunity";

const SingleOpport = () => {
  const { appartmentName } = useParams();
  const { dataContent, setDataContent_ } = useState();
  console.log("match singleOpport", appartmentName);
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

  // useEffect(() => {
  //   const contentData = data.find((dt) => dt.title === appartmentName);
  //   setDataContent_(contentData)
  //   console.log("Content", contentData);
  // }, [appartmentName, data]);

  return (
    <Container
      style={{
        paddingTop: "2rem",
      }}
    >
      <Row>
        <Col sm="8">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src="/D1.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src="/D2.jpg" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/D6.jpg" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
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
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Naibut Beach
              </Card.Title>
              <Card.Text>
                <div className={classes.spacing}>
                  <strong>Price in NGN</strong>: <span>price</span>
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
                  <strong>Project Type</strong>: <span>Residential </span>
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
              <div className={classes["button-container"]}>
                <Link
                  className={`btn btn-primary ${classes.button}`}
                  to="/account/demo/secondarymarket"
                >
                  Secondary Market
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "3rem" }}>
        <Col
          style={{
            textAlign: "justify",
          }}
        >
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title style={{ textAlign: "justify" }}>
                <h5>Property location info</h5>
              </Card.Title>
              <Card.Text>
                <p>
                  Naibut Beach, Lagos, Nigeria, offers a perfect blend of
                  pristine beaches, hotels, beach bars, and is a favorite spot
                  for filmmakers and diving enthusiasts. It boasts renowned
                  establishments such as Rayton Reserve Hotel, Mustle, Sontel,
                  and Elements Lagos. Located near Lekki and Lagos Town, it
                  provides easy access to a variety of dining, shopping, and
                  nightlife options. Mustle offers a tranquil and private escape
                  while remaining close to the vibrant city life.
                  <br />
                  Additionally, it is conveniently located just 40 minutes away
                  from Lagos Airport and offers a one-hour flight to Abuja,
                  making it accessible to domestic and international travelers.
                </p>
               
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
              <Card.Title>
                <h5>Location</h5>
              </Card.Title>
              <Card.Text>Map Image</Card.Text>
            </Card.Body>
          </Card>
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
              <Card.Title>
                <h5>Description</h5>
              </Card.Title>
              <Card.Text>
                <p>The property</p>
                <p>
                  This apartment is in a project of 11,246 sq.m., made up of 5
                  buildings, with 3 to 5 stories and 167 units. Set slight back
                  from the ocean on an inclined piece of land. Which offers a
                  180-degree panoramic view of the surrounding landscape and
                  crystal clear water of Andaman sea. The property includes
                  pools, onsite parking, 24-hour front desk and security. The
                  types of units found at the project include 65 sqm suits with
                  private pools, 31 and 33 sqm standard rooms. The site will be
                  run as a Condotel, fully managed and maintained by the
                  developer after construction.
                </p>
                <p>Why this property is a good investment</p>
                <p>
                  Beachfront areas will always hold their value and draw high
                  levels of demand. All beaches in Thailand are owned by the
                  crown property bureau and can’t be held privately, an only
                  property next to the beach can be bought and sold on freehold,
                  because of this there is no such thing as a private beach in
                  Thailand and land next to beaches hold high value and demand.
                  The property is a very affordable option in an area with such
                  high-end real estate and expensive hotels. Which means it can
                  easily be rented and rooms filled. The management company will
                  run the property as a hotel which takes care of the headaches
                  of maintenance and managing guests. Making it a full turn-key
                  investment, remove all the hassle for owners.
                </p>
                <p>INVESTMENT DATA</p>
                <p>Rental payments</p>
                <p>
                  Rental payments for investors on this opportunity will start
                  in February 2020. Economy Thailand finished gross domestic
                  product (GDP) grew by 4.1 percent in 2018. This rate is 1
                  -tenth of one percent higher than the figure of 4% published
                  in 2017. Now ranked 26th largest GDP. Ranked 3rd of the ASEAN
                  countries, only being outperformed on a per capita by Malaysia
                  and Singapore. The number of tourists visiting Thailand
                  increased from 35.35 million in 2017 to 38.28 million in 2018.
                  Bangkok was also the number one visited citysSurpassing Paris
                  and London in Mastercard's list of "Global Destination Cities
                  Index 2019" with 22.78 million visitors. Phuket (next to
                  Krabi) was 14th with 9.89 million visitors. Tourist accounts
                  for one-fifth of Thailands GDP.
                </p>
                <p>Market Stats</p>
                <p>
                  The Thai baht continued to remain strong in Q3 2019, hitting a
                  6-year high against the USD and a 10% Y-o-Y increase against
                  the CNY. Single-detached house prices in 2019 rose by 3.1% and
                  3% for land according to the the Bank of Thailand. Due to the
                  strength of the Thai Baht, we’ve seen investors focusing more
                  on income-generating properties. Demand has grown the most for
                  hotel, condotel, serviced apartments and office space
                  investments. Thailand just approved Phukets 2nd airport in
                  Phang Nga and the highspeed rail from Bangkok which is
                  targeted to go live around 2025; this will continue to help
                  the growth of the southern region. Plus new rules and
                  regulations for the types of buildings that can be built in
                  and around Phuket. Zoning will come into action allowing for
                  taller structures to be allowed to be built.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
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
              <Card.Title>
                <h5>Documentation</h5>
              </Card.Title>
              <Card.Text>
                <p>
                  Please find some confidential investment data. Note its
                  distribution is prohibited and will result in the termination
                  of your account.
                </p>
                <p>
                  ( pdf icons here) with following text Financial Information
                  Paris Addendum The Based Returns
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
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
              <Card.Title></Card.Title>
              <Card.Text>
                <Table>
                  <thead>
                    <td>Date</td>
                    <td>Profit</td>
                    <td>Profit Type</td>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Row style={{ marginTop: "3rem" }}>
        <Col>
          <h3>Opportunities</h3>
          <span>Selection of investment opportunities</span>
          <div></div>
          <Opportunity />
        </Col>
      </Row> */}
    </Container>
  );
};

export default SingleOpport;
