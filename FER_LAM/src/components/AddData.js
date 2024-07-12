// src/components/AdddataForm.js
import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

const AddData = () => {
  const { dataCha, dataList, addData } = useContext(DataContext);

  const [data, setData] = useState({
    name: "",
    startDate: "",
    description: "",
    type: "",
    department: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in data) {
      if (!data[key]) {
        alert("Please fill in all the fields before submitting the form.");
        return;
      }
    }

    data.id = dataList.length + 1;
    data.department = Number.parseInt(data.department)

    console.log(data);
    addData(data);

    alert("create success")
    // setData({ name: "", dob: "", gender: "", position: "", department: "" });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}> List</h1>
      <Link to="/">
            <div>Go home</div>
          </Link>
      <Form onSubmit={handleSubmit}>
        {/* NAME */}
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Description */}
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={data.description}
            onChange={handleChange}
            // required
          />
        </Form.Group>

        {/* DATE */}
        <Form.Group>
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={data.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* type */}
        <Form.Group>
          <Form.Label>type</Form.Label>
          <Form.Control
            type="text"
            name="type"
            value={data.type}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* DATA CHA */}
        <Form.Group>
          <Form.Label>department</Form.Label>
          <Form.Control
            as="select"
            name="department"
            value={data.department}
            onChange={handleChange}
            required
          >
            <option value="">Select department</option>
            {dataCha.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/*  */}
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </>
  );
};

export default AddData;
