import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import classes from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar className={classes["nav-bar"]}>
        <Container>
          <Navbar.Brand href="/">
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
            </Link>
            {"  "}
            <Link to="/demologin" className="btn btn-primary">
              Login
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <div className={classes["about-bg"]}>
        <Container>
          <Row>
            <Col style={{ padding: "4rem", color: "#fff" }}>
              <h4>Welcome to Esusu Prop Trade</h4>
              <p>
                where we revolutionize the world of real estate investment with
                a touch of innovation and a team of exceptional professionals.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>

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
                <h4>ABOUT US</h4>
              </div>
              {/* <p className={classes.justify}>
                Welcome to Esusu Prop Trade, where we revolutionize the world of
                real estate investment with a touch of innovation and a team of
                exceptional professionals.
              </p> */}
              <p className={classes.justify}>
                At Esusu Prop Trade, we are not just another real estate
                company; we are the bridge that connects you to your perfect
                asset. Utilizing cutting-edge technology, we have created an
                innovative crowdfunding platform that allows you to invest in
                real estate projects around the globe faster and easier than
                ever before. Say goodbye to the traditional barriers and hello
                to a new era of accessible and transparent investing.
              </p>
              <p className={classes.justify}>
                But what truly sets us apart is our people. We take immense
                pride in our team of handpicked professionals who bring their
                wealth of experience and expertise to the table. Every member of
                our workforce boasts a proven track record of success in their
                respective fields. We see ourselves as a family, fostering an
                environment that nurtures excellence and encourages
                collaboration.
              </p>
              <p className={classes.justify}>
                {" "}
                Our vision extends far beyond the present. At Esusu Prop Trade,
                we aspire to create a world where real estate investment
                opportunities are abundant and within reach for everyone.
                Through the power of mobile technology, we strive to make
                transactions quicker, easier, and more secure, injecting
                liquidity into the real estate market like never before.
              </p>
              <p className={classes.justify}>
                Traditionally, private investments in real estate have suffered
                from a lack of liquidity, with no significant secondary market.
                But at Esusu Prop Trade, we have unlocked the potential for
                liquidity by breaking down barriers and fostering connections
                between buyers and sellers worldwide.
              </p>
              <p className={classes.justify}>
                {" "}
                Join us on this exhilarating journey as we redefine the
                landscape of real estate investment. Experience the thrill of
                investing in a market that was once inaccessible and witness the
                value of your private investments soar.
              </p>
              <p className={classes.justify}>
                {" "}
                Together, let's seize the opportunities that lie ahead and
                unlock the true potential of global real estate investment.
              </p>
              <p>
                {" "}
                Audit Transaction: Empowering global real estate investors with
                innovative technology and accessible crowdfunding for
                profitable, secure, and transparent investments.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
