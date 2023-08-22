import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col, InputGroup, Nav, Navbar } from "react-bootstrap";
import classes from "./Register.module.css";
import { useForm } from "react-hook-form";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalClass from "../../../UI/Modal/Modal";
import PageHeader from "../../../UI/PageHeader/pageHeader";
import { baseUrl } from "../../../../BaseUrl";

function Register() {
  const methods = useForm();
  const navigate = useNavigate();
  const [visible, setVisible] = useState("password");
  const [req, setReq] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [description, setDescription] = useState();

  const conpass = useRef();
  const pass = useRef();
  const username = useRef();
  const email = useRef();

  const passwordVisible = () => {
    setVisible("text");
    if (visible === "text") {
      setVisible("password");
    }
  };

  const passMatch = async () => {
    const data = {
      username: username.current.value,
      email: email.current.value,
      password: pass.current.value,
    };
    if (conpass.current.value !== pass.current.value) {
      setReq(true);
    } else {
      // await axios
      //   .post(baseUrl + "createuser/", data)

      //   .then((res) => {
      //     alert(res.data);
      //     navigate("/login");
      //   })
      //   .catch((err) => {
      //     setDescription(err.response.data);
      //     setModalShow(true);
      //   });
      // setReq(false);
      navigate("/demologin");
    }

    pass.current.value = "";
    username.current.value = "";
    email.current.value = "";
    conpass.current.value = "";
  };

  const onSubmitHandler = () => {
    passMatch();
  };
  return (
    <div>
      <ModalClass
        show={modalShow}
        onHide={() => setModalShow(false)}
        description={description}
      />
      <Navbar bg="primary" variant="dark">
        <Container >
          <Navbar.Brand href="/">
            {/* <img src="" alt="logo" width="30%" className={classes.img} /> */}
            <h2>EsusuProp Trade</h2>
          </Navbar.Brand>

          {/* <Nav className="justify-content-end">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="#home">How It Works</Nav.Link>
            <Nav.Link href="#home">FAQ</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav> */}

          <Nav className="justify-content-end">
            {/* <Link
              to="#home"
              className="btn btn-outline-secondary"
              style={{
                color: "#000",
                background: "#fff",
                border: "1px solid black",
              }}
            >
              Signup
            </Link>{" "} */}
            <Link to="/demologin" className="btn btn-primary">
              Login
            </Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <PageHeader />
      <Container className={classes["reg-container"]}>
        <Row>
          <h2>Register</h2>
          <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  required
                  ref={username}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" ref={email} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control
                    type={visible}
                    name="password"
                    required
                    ref={pass}
                  />
                  <InputGroup.Text onClick={passwordVisible}>
                    {visible === "text" ? <EyeFill /> : <EyeSlashFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control
                    type={visible}
                    name="con_pass"
                    required={req}
                    ref={conpass}
                  />
                  <InputGroup.Text onClick={passwordVisible}>
                    {visible === "text" ? <EyeFill /> : <EyeSlashFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              {req && (
                <i
                  style={{
                    color: "red",
                  }}
                >
                  Password Do not Match
                </i>
              )}
            </Col>
            <Col>
              <Form.Check type="checkbox">
                <Form.Check.Input type="checkbox" isValid />
                <Form.Check.Label>
                  {" "}
                  By clicking register, you agree to our{" "}
                  <a href="/">Terms of Use</a> and{" "}
                  <a href="/">Privacy Policy</a>
                </Form.Check.Label>
              </Form.Check>
            </Col>
            <br />
            <div className={classes["align-button"]}>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
          {/* <br /> */}
        </Row>
      </Container>
    </div>
  );
}

export default Register;
