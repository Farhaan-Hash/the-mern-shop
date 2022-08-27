import React, {useState} from "react";
import {Form, Button, Col, Row} from "react-bootstrap";

const SearchBox = ({history}) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row className="align-items-center">
        <Col sm={7} className="my-1">
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            className="mr-sm-2 ml-sm-5"
          />
        </Col>

        <Col class="btn btn-primary" type="submit">
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
