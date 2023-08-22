import React, { useState, useRef, useContext } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import classes from "./ChangePassword.module.css";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import axios from "axios";
import { baseUrl } from "../../../BaseUrl";
import PageHeader from "../../UI/PageHeader/pageHeader";

const ChangePassword = () => {
  const methods = useForm();
  const phone = useRef();
  const password = useRef();
  const [isVisible, setIsVisible] = useState("password");
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
      .put(baseUrl + "changepassword/", data)
      .then((res) => {
        const expirationTime = new Date(
          new Date().getTime() + +res.expiresIn * 1000
        );
        // authCtx.login(res.data, expirationTime);
        console.log("change", res.data);
      })
      .catch((err) => {
        console.log("err login", err.response.data);
      });
  };

  return (
    <div>
      <PageHeader />
      <Container className={classes["change-container"]}>
        <Row>
          <h2>Change Password</h2>
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
                <Form.Label>New Password</Form.Label>
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

            <Col className={classes["button-align"]}>
              <Button variant="primary" type="submit">
                Change Password
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default ChangePassword;
