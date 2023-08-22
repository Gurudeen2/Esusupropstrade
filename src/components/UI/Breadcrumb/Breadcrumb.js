import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Breadcrum = (props) => {
  return (
    <Breadcrumb
      separator={props.separator}
    >
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{props.pageName}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export default Breadcrum;
