import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./EngMovies.css";

class EngMovies extends Component {
  render() {
    const { engmvoies } = this.props;

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
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EngMovies);
