import React, { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import ModalClass from "../../UI/Modal/Modal";
import { baseUrl } from "../../../BaseUrl";

const BuyAirtime = () => {
  const methods = useForm();

  const [modalShow, setModalShow] = useState(false);
  const [description, setDescription] = useState();

  const [bonus, setBonus] = useState();
  const [hidden, setHidden] = useState(true);
  const [airValue, setairValue] = useState();
  const [mobileNumber, setMobileNumber] = useState();

  const options = [
    { value: "MTN", id: "1" },
    { value: "GLO", id: "2" },
    { value: "AIRTEL", id: "3" },
    { value: "9MOBILE", id: "4" },
  ];

  const bonusOptions = [
    { value: "MTN", id: 1 },
    { value: "GLO", id: 2 },
    { value: "AIRTEL", id: 3 },
    { value: "9MOBILE", id: 4 },
  ];

  const networkHandler = (e) => {
    const handler = e.target;
    if (handler.value === "2" || handler.value === "1") {
      const filtered = options.find(
        (netwk) => netwk.id === handler.value
      ).value;

      setBonus(filtered);
      setHidden(false);
    } else {
      setHidden(true);
      setBonus(handler.value);
    }
  };

  const airtimeValueHandler = (e) => {
    setairValue(+e.target.value);
  };

  const MobileNumberHandler = (e) => {
    setMobileNumber(+e.target.value);
  };

  const submitHanlder = () => {
    const data = {
      network: bonus,
      amount: airValue,
      mobile_number: mobileNumber,
    };

    axios
      .post(baseUrl + "airtime/", data)
      .then((res) => {
        if (res.statusText === "OK") {
          setModalShow(true);
          setDescription(res.data);
        } else {
          console.log("Error");
          // return Promise.reject(res.status)
          // code: "ERR_NETWORK";
        }
      })
      .catch((err) => {
        setModalShow(true);
        setDescription(err);
        console.log("erross");
      });
  };

  return (
    <>
      <ModalClass
        show={modalShow}
        onHide={() => setModalShow(false)}
        description={description}
      />

      <Container>
        <Row style={{ width: "60%" }}>
          <h4>Buy Airtime </h4>

          <Form onSubmit={methods.handleSubmit(submitHanlder)}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Wallet</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Wallet"
                  defaultValue="parse balance from db"
                  readOnly
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Network</Form.Label>
                <Form.Select onChange={networkHandler}>
                  <option value="---select---">---select---</option>

                  {options.map((option) => (
                    <option value={option.id} key={option.id}>
                      {option.value}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Airtime Value(50-50,000)</Form.Label>
                <Form.Control
                  type="text"
                  name="airtimevalue"
                  onChange={airtimeValueHandler}
                  required
                />
              </Form.Group>
            </Col>

            <Col hidden={hidden}>
              <Form.Group className="mb-3">
                <Form.Label>{bonus} Bonus</Form.Label>
                <Form.Select>
                  <option value="---select---">---select---</option>

                  {bonusOptions.map((option) => (
                    <option value={option.id} key={option.id}>
                      {option.value}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="number"
                  onChange={MobileNumberHandler}
                  required
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Airtime Amount</Form.Label>
                <Form.Control type="text" name="airtimeamount" readOnly />
              </Form.Group>
            </Col>

            <Col style={{ textAlign: "right" }}>
              <Button variant="primary" type="submit">
                Buy Now
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default BuyAirtime;
