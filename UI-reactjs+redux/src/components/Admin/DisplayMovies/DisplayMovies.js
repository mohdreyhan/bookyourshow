import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Tabs, Tab } from "react-bootstrap";

import EngMovies from "../English/EngMovies.js";
import HindiMovies from "../Hindi/HindiMovies.js";
import TeluguMovies from "../Telugu/TeluguMovies.js";

class DisplayMovies extends Component {
  render() {
    var engmvoies = this.props.fetchedMovies.filter(
      item => item.lang === "English"
    );
    var hinmovies = this.props.fetchedMovies.filter(
      item => item.lang === "Hindi"
    );
    var telmovies = this.props.fetchedMovies.filter(
      item => item.lang === "Telugu"
    );
    return (
      <Container>
        {(() => {
          var role = localStorage.getItem("role");
          if (role === null || role === "" || role === undefined) {
            return this.props.history.replace({
              pathname: "/"
            });
          } else {
            return (
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="tab"
              >
                <Tab eventKey="profile" title="English">
                  <EngMovies engmvoies={engmvoies} />
                </Tab>
                <Tab eventKey="home" title="Hindi">
                  <HindiMovies hinmovies={hinmovies} />
                </Tab>
                <Tab eventKey="contact" title="Telugu">
                  <TeluguMovies telmovies={telmovies} />
                </Tab>
              </Tabs>
            );
          }
        })()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchedMovies: state.NewMoviesReducer.fetchedMovies
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovies);
