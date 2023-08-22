import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";
import classes from "./Homepage.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const data = [
    {
      title: "Naibut Beach",
      price: 200000000,
      type: "Residential",
      roi: 63,
      location: "Lagos",
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
      location: "Lagos",
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

  return (
    <>
      {/* NavBar/Header */}
      <Navbar className={classes["nav-bar"]}>
        <Container fluid>
          <Navbar.Brand href="#home">
            {/* <img src="" alt="logo" width="30%" className={classes.img} /> */}
            <h2>EsusuProp Trade</h2>
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/howitworks">How It Works</Nav.Link>
            <Nav.Link href="#home">FAQ</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          <Nav className="justify-content-end">
            <Link
              to="/demoreg"
              className="btn btn-outline-secondary"
              style={{
                color: "#000",
                background: "#fff",
                border: "1px solid black",
              }}
            >
              Signup
            </Link>{" "}
            <Link to="/demologin" className="btn btn-primary">
              Login
            </Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* Home */}
      <div className={classes["homepage-bg"]}>
        <Container>
          <Row>
            <Col style={{ padding: "4rem", color: "#fff" }}>
              <h4>Empowering Global Real Estate</h4>
              <p>
                Investors with innovative technology and accessible crowdfunding
                for profitable, secure, and transparent investments.
              </p>
              <div>
                <Button href="/demoreg">Signup</Button>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      {/* how it works */}

      <div style={{ background: "#f8f8f8" }}>
        <Container
          style={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Row>
            <Col>
              <div style={{ textAlign: "center" }}>
                <h4>How it works</h4>
                <p>
                  The process of becoming a property owner with us is very
                  simple
                </p>
              </div>
              <Row style={{ paddingTop: "1rem" }}>
                <Col style={{ textAlign: "center" }}>
                  <img
                    src={require("../../../assets/images/create.png")}
                    alt="1"
                  />
                  <h5 className={classes.h5}>Create your account</h5>
                  <p className={classes.p}>
                    Register on the website and get full access to all
                    opportunities.
                  </p>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <img
                    src={require("../../../assets/images/how-works-icon-2.png")}
                    alt="1"
                  />
                  <h5 className={classes.h5}>
                    Select an investment opportunity
                  </h5>
                  <p className={classes.p}>
                    Build your own investment portfolio across different
                    opportunities.
                  </p>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <img
                    src={require("../../../assets/images/how-works-icon-3.png")}
                    alt="1"
                  />
                  <h5 className={classes.h5}>Generate monthly income</h5>
                  <p className={classes.p}>
                    Receive rental income monthly while the asset grows in
                    value.
                  </p>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <img
                    src={require("../../../assets/images/how-works-icon-4.png")}
                    alt="1"
                  />
                  <h5 className={classes.h5}>Exit investment</h5>
                  <p className={classes.p}>
                    When your investment exits, you’ll receive your initial
                    investment, together with the appreciation gains.
                  </p>
                </Col>
              </Row>
              <div style={{ textAlign: "center", paddingTop: "1rem" }}>
                <Button
                  variant="outline-success"
                  size="sm"
                  type="submit"
                  href="/demoreg"
                >
                  Signup
                </Button>{" "}
                <Button type="submit" size="sm" href="demologin">
                  Login
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* opportunity */}
      <div className={classes.properties}>
        <Container style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
          <div
            className={classes.heading}
            style={{ color: "#fff", paddingBottom: "2rem" }}
          >
            <h4>Check out our opportunities</h4>
            <span>Quality Real Estate from emerging and mature markets</span>
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
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      border: "none",
                    }}
                  >
                    <Card.Img
                      src={dt.img1}
                      as={Image}
                      variant="top"
                      fluid={true}
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        {dt.title}
                      </Card.Title>
                      <Card.Text>
                        <div className={classes.spacing}>
                          <strong>Property Type</strong>: <span>{dt.type}</span>
                        </div>
                        <div className={classes.spacing}>
                          <strong>Projected ROI </strong> :{" "}
                          <span>{dt.roi}%</span>
                        </div>
                        <div className={classes.spacing}>
                          <strong>Location </strong> :{" "}
                          <span>{dt.location}</span>
                        </div>
                      </Card.Text>
                      <div className={classes["button-container"]}>
                        <Link
                          className={`btn btn-primary ${classes.button}`}
                          to="/account/demo/opportunity"
                        >
                          Funded
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* Advantage */}

      <div style={{ background: "#f8f8f8" }}>
        <Container
          style={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Row>
            <Col>
              <div style={{ textAlign: "center" }}>
                <h4>Our Advantages</h4>
                <p>What are the advantages of investing in BlockReal?</p>
              </div>
              <Row style={{ paddingTop: "1rem" }}>
                <Col>
                  <div className={`p-3 ${classes.card}`}>
                    <img
                      src={require("../../../assets/images/advantages-icon-1.png")}
                      alt="1"
                      style={{
                        paddingBottom: "1rem",
                      }}
                    />
                    <h5 className={classes.h5}>
                      Small minimum investment required.
                    </h5>
                  </div>
                </Col>
                <Col>
                  <div className={`p-3 ${classes.card}`}>
                    <img
                      src={require("../../../assets/images/advantages-icon-2.png")}
                      alt="1"
                    />
                    <h5 className={classes.h5}>Transactions Made Easy</h5>
                  </div>
                </Col>
                <Col>
                  <div className={`p-3 ${classes.card}`}>
                    <img
                      src={require("../../../assets/images/advantages-icon-3.png")}
                      alt="1"
                      style={{
                        paddingBottom: "1rem",
                      }}
                    />
                    <h5 className={classes.h5}>Investments Liquidity</h5>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homepage;
