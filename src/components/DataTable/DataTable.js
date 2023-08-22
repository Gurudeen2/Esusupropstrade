import React from "react";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from "react-bs-datatable";
import { Col, Row, Table, Button, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

// Create table headers consisting of 4 columns.
const header = [
  {
    prop: "",
    title: "",
  },
  {
    prop: "providerID",
    title: "ID",
    isFilterable: true,
  },
  {
    title: "Name",
    prop: "providerName",
    isFilterable: true,
  },
  {
    prop: "button",

    cell: (row) => (
      <div style={{ textAlign: "center", right: "30%" }}>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => {
            alert(`${row.providerID}'s score is ${row.providerName}`);
          }}
        >
          Delete
        </Button>
      </div>
    ),
  },
];

const body = [];

// Then, use it in a component.
function TableComponent(props) {
  return (
    <Container
      style={{
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      <DatatableWrapper
        body={props.body}
        headers={props.header}
        paginationOptionsProps={{
          initialState: {
            rowsPerPage: 5,
            options: [5, 10],
          },
        }}
      >
        <Row className="mb-4">
          <Col
            xs={12}
            lg={4}
            className="d-flex flex-col justify-content-end align-items-end"
          >
            <Filter />
          </Col>
          <Col
            xs={12}
            sm={6}
            lg={4}
            className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
          >
            <PaginationOptions />
          </Col>
          <Col
            xs={12}
            sm={6}
            lg={4}
            className="d-flex flex-col justify-content-end align-items-end"
          >
            <Pagination />
          </Col>
        </Row>
        <Col
          xs={12}
          sm={12}
          lg={12}
          className="d-flex flex-col justify-content-lg-center align-items-center
        justify-content-sm-start mb-2 mb-sm-0"
        >
          <Table>
            <TableHeader />
            <TableBody />
          </Table>
        </Col>
      </DatatableWrapper>
    </Container>
  );
}

export default TableComponent;
