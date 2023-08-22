import React from "react";
import { Spinner } from "react-bootstrap";

const Preloader = () => {
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        background: "#000",
        height: "500rem",
        textAlign: "center",
        paddingTop: "20rem",
      }}
    >
      <Spinner animation="border" variant="primary" /> <br />
      {/* With Grow Animation:
      <Spinner animation="grow" variant="warning" /> */}
    </div>
  );
};
export default Preloader;
