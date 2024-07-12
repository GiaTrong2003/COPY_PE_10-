import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./Search";

function DataList() {
  //
  const {
    dataCha,
    dataList,
    dataFilter,
    filterFollowCondition,
    setCart,
    cart,
    getNameCha,
    deleteData,
    sort,
  } = useContext(DataContext);

  //
  const filteredData = dataList
    .filter((data) => {
      const userFilter = dataFilter.includes(data.department.toString()); // true
      const completedFilter =
        filterFollowCondition == "" ||
        data.name.includes(filterFollowCondition);
      return userFilter && completedFilter;
    })
    .sort((a, b) => {
      if (sort == "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    })
    .sort((a, b) => {
      if (sort == "asc") {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });

  const handleDelete = (id) => {
    deleteData(id);
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}> List</h1>
        <Link to={"/projects/add"}>
          <Button variant="success">Create new projects</Button>
        </Link>

        <Search />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Project name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>Type</th>
              <th>Departments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.startDate}</td>
                  <td>{todo.type}</td>
                  <td>
                    <Link to={`/departments/${todo.department}/employees`}>
                      {getNameCha(todo.department).name}
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/projects/detail/${todo.id}`}>
                      <Button variant="warning">Detail</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* <div>
<h1 style={{ textAlign: "center" }}> List</h1>
{" "}
<div style={{ textAlign: "right", marginBottom: "30px" }}>
  Cart: [<Link to="/cart">{cart.length}</Link>]
</div>
<Row>
  {filteredData.map((it) => (
    <Col key={it.id} md={4}>
      <Card style={{ padding: "5px", marginBottom: "20px" }}>
        <Card.Img style={{height: "200px"}} src={`/assets/images/${it.images[0].name}`} />
        <Card.Body>
          <Card.Title style={{maxWidth: "200px"}}>{it.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: {it.price}</ListGroup.Item>
          <ListGroup.Item>
            Brand: {getNameCha(it.brand).name}
          </ListGroup.Item>
          <ListGroup.Item>
            Status:{" "}
            {it.status ? (
              <span style={{ color: "green" }}>In Stock</span>
            ) : (
              <span style={{ color: "red" }}>Out Stock</span>
            )}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={`/product/${it.id}`}>
            <Button variant="danger" style={{ marginRight: "15px" }}>
              Detail
            </Button>
          </Link>
          <Button variant="success" onClick={() => handleCart(it)}>
            Add to cart
          </Button>
          <Button variant="warning" onClick={() => handleDelete(it)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</div> */} 
    </>
  );
}

export default DataList;
