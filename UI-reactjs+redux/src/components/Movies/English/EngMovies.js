import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardDeck, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { FETCHMOVIESCREATOR } from "../../../actions/actions.js";

import "./EngMovies.css";

class EngMovies extends Component {
  componentDidMount() {
    this.props.FETCHMOVIESCREATOR();
  }

  render() {
    var engmvoies = this.props.fetchedMovies.filter(
      item => item.lang === "English"
    );
    return (
      <div>
        <CardDeck>
          {engmvoies.map((item, index) => (
            <Card className="cardSize">
              <Card.Img
                className="cardImg"
                variant="top"
                src={item.poster_url}
              />
              <Card.Body className="cardBod">
                <Card.Title className="cardtitle">{item.name}</Card.Title>
                <Button
                  variant="danger"
                  className="cardBtn"
                  onClick={() => this.props.history.replace("/theatreoptions")}
                >
                  Book Tickets
                </Button>
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                {item.rating}
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EngMovies)
);
