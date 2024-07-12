import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Form } from "react-bootstrap";

function DataCha() {
  //
  const { dataCha, dataFilter, dataFilterV2, setDataFilter, setDataFilterV2 } =
    useContext(DataContext);
  //
  const [checkedUsers, setCheckedUsers] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;

    if(value) {
      // '1'
      setDataFilter(value);
    } else {
      // ['1', '2', '3']
      setDataFilter(dataFilterV2);
    }
  };

  return (
    <div>
      <h4>Departments</h4>
      <Form.Check
          type="radio"
          name="radio"
          label={"All"}
          value={""}
          onChange={(e) => handleChange(e)}
        />
      {dataCha.map((user) => (
        <Form.Check
          key={user.id}
          type="radio"
          name="radio"
          label={user.name}
          value={user.id}
          onChange={(e) => handleChange(e)}
        />
      ))}
    </div>
  );
}

export default DataCha;

{
  /* <Table striped bordered hover>
<thead>
  <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
</thead>
<tbody>
  {filteredData.map((todo) => {
    return (
      <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{user ? user.name : "Unknown User"}</td>
        <td>
          {todo.completed ? (
            <td style={{ color: "blue" }}>Finished</td>
          ) : (
            <td style={{ color: "red" }}>UnFinished</td>
          )}
        </td>
        <td>
          <Button
            variant="success"
            // onClick={() => changeStatus(todo.id)}
          >
            Change
          </Button>
        </td>
      </tr>
    );
  })}
</tbody>
</Table> */
}

{/* <div>
  <h5>Work</h5>
  <Form.Check
    type="radio"
    label="All"
    name="fullTimeFilter"
    value=""
    onChange={(e) => setFilterFullTime(e.target.value)}
    checked={filterFullTime === ""}
  />
  <Form.Check
    type="radio"
    label="Full Time"
    name="fullTimeFilter"
    value="true"
    onChange={(e) => setFilterFullTime(e.target.value)}
    checked={filterFullTime === "true"}
  />
  <Form.Check
    type="radio"
    label="Part Time"
    name="fullTimeFilter"
    value="false"
    onChange={(e) => setFilterFullTime(e.target.value)}
    checked={filterFullTime === "false"}
  />
</div> */}
