import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, ListGroup } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Dashboard from "../Dasboard/Dashboard.js";
import AddMovies from "../AddMovies/AddMovies.js";
import DisplayMovies from "../DisplayMovies/DisplayMovies.js";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <SideBar />
      </div>
    );
  }
}

const SideBar = () => {
  return (
    <Row>
      <Col sm={3}>
        <ListGroup style={{ borderRadius: 4 }}>
          <ListGroup.Item style={{ backgroundColor: "#343a40" }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              {" "}
              Dashboard
            </Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: "#343a40" }}>
            <Link
              to={"/addmovie"}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Add Movie
            </Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: "#343a40" }}>
            <Link
              to={"/displaymovies"}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Show Movies
            </Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: "#343a40" }}>
            <Link
              to={"/SelectSeats"}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Add Movie
            </Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: "#343a40" }}>
            <Link
              to={"/SelectSeats"}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Add Movie
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col sm={9}>
     
 
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/addmovie">
              <AddMovies />
            </Route>
            <Route path="/displaymovies">
              <DisplayMovies />
            </Route>
          </Switch>

      </Col>
    </Row>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
