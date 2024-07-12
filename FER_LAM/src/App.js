import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DataProvider from "./context/DataContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataCha from "./components/DataCha";
import DataList from "./components/DataList";
import DataListV2 from "./components/DataListV2";
import AddData from "./components/AddData";
import DetailData from "./components/DetailData";
import Search from "./components/Search";

function App() {
  return (
    <DataProvider>
      <Router>
        <Container>
          <Routes>
            {/* route */}
            <Route
              path="/"
              element={
                <Row>
                  {/*  */}
                  <Col md={3}>
                    <DataCha />
                  </Col>
                  {/*  */}
                  <Col md={9}>
                  <DataList />
                  </Col>
                </Row>
              }
            />
            {/* route */}
            {/* route */}
            <Route
              path="/departments/:id/employees"
              element={
                <Row>
                  {/*  */}
                  <Col md={12}>
                    <DataListV2 />
                  </Col>
                </Row>
              }
            />
            {/* route */}
            {/* route */}
            <Route
              path="/projects/add"
              element={
                <Row>
                  {/*  */}
                  <Col md={12}>
                    <AddData />
                  </Col>
                </Row>
              }
            />
            {/* route */}
            {/* route */}
            <Route
              path="/projects/detail/:id"
              element={
                <Row>
                  {/*  */}
                  <Col md={12}>
                    <DetailData />
                  </Col>
                </Row>
              }
            />
            {/* route */}
          </Routes>
        </Container>
      </Router>
    </DataProvider>
  );
}

export default App;
