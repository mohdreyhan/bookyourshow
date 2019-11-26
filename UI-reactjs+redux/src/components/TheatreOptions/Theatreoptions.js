import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, ListGroup, Col, Row } from "react-bootstrap";
import { THEATREFETCHING } from "../../actions/actions.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import "./TheatreOptions.css";

class TheatreOptions extends Component {
  componentDidMount() {
    this.props.THEATREFETCHING();
  }
  render() {
    return (
      <div>
        {(() => {
          var value = localStorage.getItem("token");
          if (value === null || value === "" || value === undefined) {
            return this.props.history.replace({
              pathname: "/"
            });
          } else {
            return (
              <Container>
                <div>
                  <ListGroup variant="flush">
                    {this.props.theatreData.map((data, index) => (
                      <ListGroup.Item>
                        <Row>
                          <Col sm={8}>
                            <Link
                              to={"/SelectSeats/" + data.id}
                              className="threatrelist"
                            >
                              {" "}
                              {data.name}
                            </Link>
                          </Col>
                          <Col sm={4}>
                            <FontAwesomeIcon icon={faTicketAlt} />
                            {"  "}
                            {data.price}/-
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              </Container>
            );
          }
        })()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    theatreData: state.TheatresReducer.theatreData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    THEATREFETCHING: () => {
      dispatch(THEATREFETCHING());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TheatreOptions);
