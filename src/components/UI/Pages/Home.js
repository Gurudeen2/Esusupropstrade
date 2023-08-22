import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Container fluid className={classes["header-section"]}>
      <Row className={classes["row-section"]}>
        <Col
          className={classes[".col-order-1"]}
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
          lg={{ span: 5, order: 1 }}
          style={{ paddingTop: "1rem" }}
        >
          <h2>The Best Platform For VTU Services</h2>
          <small className={`d-sm-none ${classes.span}`}>
            We offer instant recharge of Airtime, Databundle, CableTV (DStv,
            GOtv &amp; Startimes), Electricity Bill Payment and more
          </small>
          <p className={classes.span}></p>
          <Button className={classes.button} style={{ borderRadius: "3rem" }}>
            Button
          </Button>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
          lg={{ span: 7, order: 2 }}
        >
          <Row style={{ textAlign: "center" }}>
            <Col>
              
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i
                        className={`bi bi-telephone-inbound-fill ${classes.icon}`}
                      ></i>
                      <p>Buy Airtime</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i className={`bi bi-wifi ${classes.icon}`}></i>
                      <p>Buy Data</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i className={`bi bi-lightbulb ${classes.icon}`}></i>
                      <p>Buy Electricity</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i className={`bi bi-tv ${classes.icon}`}></i>
                      <p>Cable TV</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={{ textAlign: "center", paddingTop: "1rem" }}>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i
                        className={`bi bi-telephone-inbound-fill ${classes.icon}`}
                      ></i>
                      <p>Buy Airtime</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i className={`bi bi-wifi ${classes.icon}`}></i>
                      <p>Buy Data</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i className={`bi bi-lightbulb ${classes.icon}`}></i>
                      <p>Buy Electricity</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i className={`bi bi-tv ${classes.icon}`}></i>
                      <p>Cable TV</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
