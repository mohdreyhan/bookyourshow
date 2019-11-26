import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import DoughnutChart from "../Stats/DoughnutChart.js";

import { FETCHMOVIESCREATOR } from "../../../actions/actions.js";

class Dasboard extends Component {
  componentDidMount() {
    this.props.FETCHMOVIESCREATOR();
  }
  render() {
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
              <div>
                <DoughnutChart fetchedMovies={this.props.fetchedMovies} />
              </div>
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
  return {
    FETCHMOVIESCREATOR: () => {
      dispatch(FETCHMOVIESCREATOR());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dasboard);
