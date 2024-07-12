import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function DataListV2() {
  //
  const {
    dataCha,
    dataList,
    dataListV2,
    dataFilter,
    filterFollowCondition,
    setCart,
    cart,
    getNameCha,
  } = useContext(DataContext);

  const { id } = useParams();

  const filteredData = dataListV2.filter((it) => it.department == id);

  return (
    <>
      {id && (
        <div>
          <h1 style={{ textAlign: "center" }}> List Employee</h1>
          <Link to="/">
            <div>Go home</div>
          </Link>
          <h3> Departments: {getNameCha(id)?.name}</h3>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Employee name</th>
                <th>dob</th>
                <th>gender</th>
                <th>position</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                    <td>{todo.dob}</td>
                    <td>{todo.gender}</td>
                    <td>{todo.position}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default DataListV2;
