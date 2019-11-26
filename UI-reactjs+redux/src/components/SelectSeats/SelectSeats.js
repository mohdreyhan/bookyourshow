import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button, Badge, Modal } from "react-bootstrap";
import { SELECTSEATS, USERRESERVEDSEATS } from "../../actions/actions";

import "./SelectSeats.css";

class SelectSeats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false
    };
  }

  modalShow = value => {
    this.setState({
      modalState: value
    });
  };

  saveChanges = (selectedSeats, theatreId, modalState) => {
    this.props.USERRESERVEDSEATS(selectedSeats, theatreId);
    this.modalShow(modalState);
  };

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
              <Container maxWidth="md">
                <Row style={{ display: "flex" }}>
                  <Col sm={6} style={{ justifyContent: "flex-start" }}>
                    <Badge pill variant="secondary" style={{ width: "100%" }}>
                      Row 1
                    </Badge>
                    <Object1
                      SELECTSEATS={this.props.SELECTSEATS}
                      selectedSeats={this.props.selectedSeats}
                      updatedSeats={this.props.updatedSeats}
                      theatreData={this.props.theatreData}
                      id={this.props.match.params.id}
                    />
                  </Col>

                  <Col sm={6} style={{ justifyContent: "flex-end" }}>
                    <Badge pill variant="secondary" style={{ width: "100%" }}>
                      Row 2
                    </Badge>
                    <Object2
                      SELECTSEATS={this.props.SELECTSEATS}
                      selectedSeats={this.props.selectedSeats}
                      updatedSeats={this.props.updatedSeats}
                      theatreData={this.props.theatreData}
                      id={this.props.match.params.id}
                    />
                  </Col>
                  <Button
                    variant="secondary"
                    onClick={() => this.modalShow(!this.state.modalState)}
                  >
                    Next
                  </Button>
                  {this.props.reservedmsg}
                </Row>
                <Row>
                  <Col sm={8}></Col>
                  <Col sm={4}>
                    <GrandTotal
                      theatreData={this.props.theatreData}
                      selectedSeats={this.props.selectedSeats}
                      id={this.props.match.params.id}
                      modalState={this.state.modalState}
                      modalShow={this.modalShow}
                      USERRESERVEDSEATS={this.props.USERRESERVEDSEATS}
                      saveChanges={this.saveChanges}
                    />
                  </Col>
                </Row>
              </Container>
            );
          }
        })()}
      </div>
    );
  }
}

const GrandTotal = props => {
  var data = props.selectedSeats;
  const len = data.length;
  var total = 0;
  var theatreName;
  var theatreId;
  var theatre = props.theatreData.filter(
    item => item.id === parseInt(props.id)
  );
  total = theatre && theatre[0] ? theatre[0].price * len : null;
  theatreName = theatre && theatre[0] ? theatre[0].name : "empty";
  theatreId = theatre && theatre[0] ? theatre[0].id : "empty";
  return (
    <Modal show={props.modalState}>
      <Modal.Header style={{ backgroundColor: "#343a40", color: "white" }}>
        <Modal.Title>Movie Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={8}>
              <div>
                <p>Movie name</p>
                <p style={{ color: "grey" }}>{theatreName}</p>
              </div>
            </Col>
            <Col sm={4}>
              <div>
                <p>{len}Tickets</p>
                <p style={{ color: "grey" }}>{total}</p>
              </div>
            </Col>
          </Row>
          <Modal.Footer />
          <Row>
            <Col sm={8}>
              <div>
                <p>Total Amount</p>
              </div>
            </Col>
            <Col sm={4}>
              <div>
                <p>{total}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#343a40" }}>
        <Button
          variant="outline-light"
          onClick={() => props.modalShow(!props.modalState)}
        >
          Close
        </Button>
        <Button
          variant="outline-light"
          onClick={() =>
            props.saveChanges(props.selectedSeats, theatreId, !props.modalState)
          }
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Object1 = props => {
  var theatre = props.theatreData.filter(
    item => item.id === parseInt(props.id)
  );
  var alreadyselected =
    theatre && theatre[0] ? theatre[0].reservedSeats : "empty";
  console.log("alreadyselected", alreadyselected);
  var object1 = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: []
  };
  for (var a = 1; a <= 10; a++) {
    object1.A.push(a);
    object1.B.push(a);
    object1.C.push(a);
    object1.D.push(a);
    object1.E.push(a);
  }
  var keys = Object.keys(object1);
  var button = [];
  keys.map(key => {
    object1[key].map(value => {
      button.push(
        <Button
          variant={
            props.selectedSeats.includes(key + "" + value)
              ? "danger"
              : "secondary"
          }
          onClick={() => props.SELECTSEATS(key + "" + value)}
          style={{ margin: 2, width: 50 }}
          disabled={
            (alreadyselected && alreadyselected.includes(key + "" + value)) ||
            props.updatedSeats.includes(key + "" + value)
              ? true
              : false
          }
        >
          {key + "" + value}
        </Button>
      );
    });
  });
  return <div>{button}</div>;
};

const Object2 = props => {
  var theatre = props.theatreData.filter(
    item => item.id === parseInt(props.id)
  );
  var alreadyselected =
    theatre && theatre[0] ? theatre[0].reservedSeats : "empty";
  var object2 = {
    F: [],
    G: [],
    H: [],
    I: [],
    J: []
  };
  for (var a = 1; a <= 10; a++) {
    object2.F.push(a);
    object2.G.push(a);
    object2.H.push(a);
    object2.I.push(a);
    object2.J.push(a);
  }
  var keys = Object.keys(object2);
  var button = [];
  keys.map(key => {
    object2[key].map(value => {
      button.push(
        <Button
          variant={
            props.selectedSeats.includes(key + "" + value)
              ? "danger"
              : "secondary"
          }
          onClick={() => props.SELECTSEATS(key + "" + value)}
          style={{ margin: 2, width: 50 }}
          disabled={
            (alreadyselected && alreadyselected.includes(key + "" + value)) ||
            props.updatedSeats.includes(key + "" + value)
              ? true
              : false
          }
        >
          {key + "" + value}
        </Button>
      );
    });
  });
  return <div>{button}</div>;
};

function mapStateToProps(state) {
  return {
    selectedSeats: state.SeatsReducer.selectedSeats,
    theatreData: state.TheatresReducer.theatreData,
    reservedmsg: state.SeatsReducer.reservedmsg,
    updatedSeats: state.SeatsReducer.updatedSeats
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SELECTSEATS: value => {
      dispatch(SELECTSEATS(value));
    },
    USERRESERVEDSEATS: (reservedSeats, theatreId) => {
      dispatch(USERRESERVEDSEATS(reservedSeats, theatreId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectSeats);
