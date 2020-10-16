import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(keyword);
  };

  return (
    <div className="text-centre">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchKeyword">
          <Form.Label>Search For Books</Form.Label>
          <Form.Control
            type="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Form.Group>
        <h2>{keyword && "Searching for keyword:" + keyword}</h2>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Search;
