import React, { useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Profile = () => {
  const username = useRef("");
  return (
    <Container
      style={{ paddingLeft: "6rem", paddingRight: "6rem", paddingTop: "2rem" }}
    >
      <Row>
        <Col>
          <h3>Profile</h3>
        </Col>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
              width: "80%",
            }}
          >
            <Card.Body>
              <Card.Text>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Row} controlId="email">
                      <Form.Label column sm="4" className="text-left">
                        Email
                      </Form.Label>
                      <Col sm="8">
                        <Form.Label>Load Email Here</Form.Label>
                      </Col>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Row} controlId="ic4proMenuId">
                      <Form.Label column sm="4" className="text-left">
                        Password
                      </Form.Label>
                      <Col sm="8">
                        <Form.Label>Load Password Here</Form.Label>
                      </Col>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Col style={{ textAlign: "right" }}>
                      <Button variant="success" size="sm">
                        Change
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Row} controlId="username">
                      <Form.Label column sm="4" className="text-left">
                        Username
                      </Form.Label>
                      <Col sm="5">
                        <Form.Control
                          type="text"
                          name="username"
                          // ref={register}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "right" }}>
                      <Button size="sm">Save</Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;

// <Row
//   style={{
// boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
// border: "none",
//   }}
// >
//   <Col>
//     <Card
//       style={{
//         border: "none",
//       }}
//     >
//       <Card.Body>
//         <Card.Title>Please keep your data updated</Card.Title>
//         <Card.Text>
//           <Form>
//             <Col>
//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>{" "}
//                 <Form.Label>Load Username Here</Form.Label>
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group className="mb-3">
//                 <Form.Label>Password</Form.Label>{" "}
//                 <Form.Label>Load Password Here in ***</Form.Label>
//               </Form.Group>
//             </Col>
//             <Col>
//               <div style={{ textAlign: "right" }}>
//                 <Button size="sm">Check</Button>
//               </div>
//             </Col>
// <Col>
//   <Form.Group className="mb-3">
//     <Form.Label>Email</Form.Label>
//     <Form.Control
//       name="username"
//       type="text"
//       defaultValue=""
//       required
//       ref={username}
//     />
//   </Form.Group>
// </Col>
//           </Form>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   </Col>

//   <div style={{ textAlign: "right", marginBottom: "2rem" }}>
//     <Button size="sm">Save</Button>
//   </div>
// </Row>;
