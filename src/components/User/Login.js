import React, { useState, useRef, useContext } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./Login.module.css";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import axios from "axios";
import { baseUrl } from "../../BaseUrl";
import AuthContext from "../store/authContext";
import PageHeader from "../UI/PageHeader/pageHeader";
import ModalClass from "../UI/Modal/Modal";

function Login() {
  const authCtx = useContext(AuthContext);
  const methods = useForm();
  const phone = useRef();
  const password = useRef();
  const [isVisible, setIsVisible] = useState("password");
  const [modalShow, setModalShow] = useState(false);
  const [description, setDescription] = useState();

  const navigate = useNavigate();

  const passwordVisible = () => {
    setIsVisible("text");
    if (isVisible === "text") {
      setIsVisible("password");
    }
  };
  const onSubmitHandler = () => {
    const data = {
      phone: phone.current.value,
      password: password.current.value,
    };

    axios
      .post(baseUrl + "loginuser/", data)
      .then((res) => {
        const expirationTime = new Date(
          new Date().getTime() + +res.expiresIn * 1000
        );
        authCtx.login(res.data, expirationTime);
        navigate("/");
      })
      .catch((err) => {
        console.log("err login", err.response.data);
        setDescription(err.response.data);
        setModalShow(true);
      });
  };

  return (
    <div>
      <ModalClass
        show={modalShow}
        onHide={() => setModalShow(false)}
        description={description}
      />
      <PageHeader />
      <Container className={classes["login-container"]}>
        <Row>
          <h2>Login</h2>
          <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phone"
                  type="text"
                  placeholder="Enter Phone Number"
                  required
                  ref={phone}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={isVisible}
                    name="password"
                    required
                    ref={password}
                  />
                  <InputGroup.Text onClick={passwordVisible}>
                    {isVisible === "text" ? <EyeFill /> : <EyeSlashFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Password" />
              </Form.Group>
            </Col>
            <Col className={classes["button-align"]}>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Col>
          </Form>
          <Col>
            <p>
              By clicking register, you agree to our
              <a href="/">Terms of Use</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
