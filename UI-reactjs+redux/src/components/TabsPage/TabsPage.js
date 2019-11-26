import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";

import EngMovies from "../../components/Movies/English/EngMovies.js";
import HindiMovies from "../../components/Movies/Hindi/HindiMovies.js";
import TeluguMovies from "../../components/Movies/Telugu/TeluguMovies.js";
import "./TabsPage.css";

class TabsPage extends Component {
  render() {
    return (
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="tab"
      >
        <Tab eventKey="profile" title="English">
          <EngMovies />
        </Tab>
        <Tab eventKey="home" title="Hindi">
          <HindiMovies />
        </Tab>
        <Tab eventKey="contact" title="Telugu">
          <TeluguMovies />
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsPage);
