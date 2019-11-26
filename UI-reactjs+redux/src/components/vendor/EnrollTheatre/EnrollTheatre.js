import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Toast, Container } from "react-bootstrap";

class EnrollTheatre extends Component {
  render() {
    return (
      <div>
        {(() => {
          var role = localStorage.getItem("role");
          if (role === null || role === "" || role === undefined) {
            return this.props.history.replace({
              pathname: "/"
            });
          } else {
            return (
              <Container>
                <Form ref="form">
                  <Form.Group>
                    <Form.Label>Theatre Name</Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Theatre Name"
                      name="TheatreName"
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Location"
                      name="Location"
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Capacity"
                      name="Capacity"
                      required
                    />
                  </Form.Group>

                  <Button  variant="dark" type="submit">
                    Register Theatre
                  </Button>
                </Form>
                {/* <Toast show={this.state.displayToast}>
                  <Toast.Header>
                    New Movie
                  </Toast.Header>
                  <Toast.Body>{this.props.message}</Toast.Body>
                </Toast> */}
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
    // addmovieInputs: state.NewMoviesReducer.addmovieInputs,
    // message: state.NewMoviesReducer.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // ADDMOVIESINPUTS: event => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   dispatch(ADDMOVIESINPUTS(name, value));
    // },
    // MOVIESCREATOR: (event, form, addmovieInputs) => {
    //   dispatch(MOVIESCREATOR(event, form, addmovieInputs));
    // }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EnrollTheatre);
