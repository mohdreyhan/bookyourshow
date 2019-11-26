import React, { Component } from "react";
import { Form, Button, Image, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SIGNININPUTS, USERSIGNUP } from "../../actions/actions";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="signupimage">
        <Container>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <div className="formContainer">
                <div className="title">
                  Book<span style={{ color: "red" }}>your</span>Show
                </div>
                <div style={{ display: "flex" }}>
                  <Image
                    src={require("../../images/user.png")}
                    style={{ width: 100, height: 100, margin: "auto" }}
                    roundedCircle
                  />
                </div>
                <Form
                  ref="form"
                  onSubmit={event =>
                    this.props.USERSIGNUP(
                      event,
                      this.refs.form,
                      this.props.signinInputs
                    )
                  }
                >
                  <Form.Group>
                    <Form.Label className="textFieldHeader">
                      Username
                    </Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Username"
                      name="username"
                      onChange={this.props.SIGNININPUTS}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="textFieldHeader">
                      Email address
                    </Form.Label>
                    <Form.Control
                      className="textField"
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={this.props.SIGNININPUTS}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="textFieldHeader">
                      Password
                    </Form.Label>
                    <Form.Control
                      className="textField"
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onChange={this.props.SIGNININPUTS}
                      required
                    />
                  </Form.Group>

                  <Form.Check
                    className="textFieldHeader"
                    type="checkbox"
                    label="User"
                    name="user"
                    onChange = {this.props.SIGNININPUTS}
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    className="textFieldHeader"
                    type="checkbox"
                    label="Vendor"
                    name="vendor"
                    onChange = {this.props.SIGNININPUTS}
                    id="formHorizontalRadios2"
                  />

                  <span className="formbtn">
                    <Button
                      className="submitBtn"
                      variant="outline-light"
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </span>
                  <p className="existingusertext">
                    Already a User ?{"  "}
                    <span>
                      <Link to="/login">Log In</Link>
                    </span>
                  </p>
                </Form>
              </div>
              <p className="textmsg">{this.props.message.message}</p>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signinInputs: state.SignUpReducer.signinInputs,
    message: state.SignUpReducer.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SIGNININPUTS: event => {
      const name = event.target.name;
      const value = event.target.value;
      dispatch(SIGNININPUTS(name, value));
    },
    USERSIGNUP: (event, form, signinInputs) => {
      dispatch(USERSIGNUP(event, form, signinInputs));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
