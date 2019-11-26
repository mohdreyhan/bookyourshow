import React, { Component } from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LOGININPUTS, USERLOGIN } from "../../actions/actions";
import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedoutmsg: ""
    };
  }

  componentDidMount() {
   if(localStorage.getItem("role") === "admin")
   {
     return this.props.history.replace("/dashboard")
   }
   else if(localStorage.getItem("role") === "user")
   {
     return this.props.history.replace("/mainpage")
   }
  }

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
                <Form ref="form">
                  <Form.Group>
                    <Form.Label className="textFieldHeader">
                      Email address
                    </Form.Label>
                    <Form.Control
                      className="textField"
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={this.props.LOGININPUTS}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="textFieldHeader">
                      Password
                    </Form.Label>
                    <Form.Control
                      className="textField"
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onChange={this.props.LOGININPUTS}
                      required
                    />
                  </Form.Group>
                  <span className="formbtn">
                    <Button
                      className="submitBtn"
                      variant="outline-light"
                      type="submit"
                      onClick={event =>
                        this.props.USERLOGIN(
                          event,
                          this.props.loginInputs,
                          this.props.history
                        )
                      }
                    >
                      Log In
                    </Button>
                  </span>
                  <p className="existingusertext">
                    Not a User ?{"  "}
                    <span>
                      <Link to="/signin">Sign Up</Link>
                    </span>
                  </p>
                </Form>
              </div>
              <p className="textmsg">{this.props.loginerrormsg.message}</p>
              {(() => {
                if (
                  this.props.loggedoutmsg === "" ||
                  this.props.loggedoutmsg === null ||
                  this.props.loggedoutmsg === undefined
                ) {
                  return null;
                } else {
                  return <p className="textmsg">{this.props.loggedoutmsg}</p>;
                }
              })()}
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
    loginInputs: state.LogInReducer.loginInputs,
    loginerrormsg: state.LogInReducer.message,
    loggedoutmsg: state.LogOutReducer.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    LOGININPUTS: event => {
      const name = event.target.name;
      const value = event.target.value;
      dispatch(LOGININPUTS(name, value));
    },
    USERLOGIN: (event, loginInputs, history) => {
      event.preventDefault();
      dispatch(USERLOGIN(event, loginInputs, history));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
