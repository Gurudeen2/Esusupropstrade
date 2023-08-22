import React, { useState, useRef } from "react";
import { Col, Form, Row, Button, Container, Modal } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../../../BaseUrl";

function FormNetwork(props) {
  const methods = useForm();

  const providerId = useRef();
  const providerName = useRef();
  const [error, setError_] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  // const [description, setDescription] = useState();

  const onChangeHandler = (e) => {
    const re = /^[0-9\b]+$/;
    const id = re.test(e.target.value.replace(/\s/g, ""));
    if (id) {
      providerId.current.value = e.target.value.replace(/\s/g, "");
      setError_(false);
    } else {
      providerId.current.value = "";
      setError_(true);
    }
  };

  const onSubmitHandler = () => {
    props.onHide();
    const data = {
      providerID: providerId.current.value,
      providerName: providerName.current.value,
    };
    axios
      .post(baseUrl + "addnetwork/", data)
      .then((res) => {
        alert("Network Added");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="example-modal-sizes-title-lg"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Network
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Network ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Network ID"
                      name="provideID"
                      ref={providerId}
                      onChange={onChangeHandler}
                      required
                    />
                    {error && (
                      <span
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontSize: "0.8rem",
                        }}
                      >
                        Enter Number Only
                      </span>
                    )}
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Network Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Network Name"
                      name="networkName"
                      ref={providerName}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col
                  style={{
                    textAlign: "right",
                  }}
                >
                  <Button variant="primary" type="submit">
                    Add
                  </Button>
                </Col>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormNetwork;
