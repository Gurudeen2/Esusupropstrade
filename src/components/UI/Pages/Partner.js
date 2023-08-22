import React from "react";
import { Container, Table } from "react-bootstrap";
import classes from "./Partner.module.css";

const Partner = () => {
  return (
    <Container fluid className={classes["partner-content"]}>
      <h2>Our Partner</h2>
      <p>Below is a list of some of our supported service provider(s)</p>
      <Table  size="sm">
        <tr>
          <td>IBEDC</td>
          <td>WAEC</td>
          <td>DSTV</td>
          <td>EEDC</td>
          <td>ECEDC</td>
        </tr>
        <tr>
          <td>GoTv</td>
          <td>WAEC</td>
          <td>StartTimes</td>
          <td>EEDC</td>
          <td>ECEDC</td>
        </tr>
      </Table>
    </Container>
  );
};

export default Partner;
