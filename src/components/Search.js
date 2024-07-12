// src/components/Search.js
import React, { useContext, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { DataContext } from "../context/DataContext";

const Search = () => {
  //
  const {
    setFilterFollowCondition,
    sort,
    setSort
  } = useContext(DataContext);

  const [searchTerm, setSearchTerm] = useState('')


  const handleGenderChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value)
    // console.log(value)
    setFilterFollowCondition(value);
  };

  const changeSort = (e) => {
    console.log(e.target.value)
    setSort(e.target.value)
  }

  return (
    <Form>
    <Row>
      <Col md={8}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search employees by name"
            value={searchTerm}
            onChange={handleGenderChange}
          />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <Form.Check
            type="radio"
            label="asc"
            value={"asc"}
            checked={sort == "asc"}
            name="radio"
            onChange={changeSort}
          />
          <Form.Check
            type="radio"
            label="desc"
            value={"desc"}
            name="radio"
            checked={sort == "desc"}
            onChange={changeSort}
          />
        </Form.Group>
      </Col>
    </Row>
  </Form>
  );
};

export default Search;