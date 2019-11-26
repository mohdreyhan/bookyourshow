import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  Image,
  Dropdown,
  Container
} from "react-bootstrap";
import "./NavbarPage.css";
import { withRouter, Link } from "react-router-dom";
import { USERLOGOUT } from "../../actions/actions";
import { connect } from "react-redux";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownStatus: false
    };
  }

  logout = () => {
    this.setState({
      dropdownStatus: !this.state.dropdownStatus
    });
    this.props.USERLOGOUT(localStorage.getItem("email"), this.props.history);
  };

  render() {
    return (
      <div>
        <Container>
          {(() => {
            var role = localStorage.getItem("role");
            if (role === "user") {
              return (
                <div>
                  <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand>
                      <Link to="/mainpage" className="navbartitle">
                        <span>
                          {" "}
                          Book<span style={{ color: "red" }}>
                            your
                          </span>Show{" "}
                        </span>
                      </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link>
                          {/* <Link to="/engmovies" className="navlinks">
                    English Movies
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/engmovies" className="navlinks">
                    Hindi Movies
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/engmovies" className="navlinks">
                    Telugu Movies
                  </Link> */}
                        </Nav.Link>
                      </Nav>
                      <Button
                        variant="dark"
                        className="mr-sm-4"
                        style={{ padding: 0 }}
                        onClick={() =>
                          this.setState({
                            dropdownStatus: !this.state.dropdownStatus
                          })
                        }
                      >
                        <Image
                          src={require("../../images/user.png")}
                          style={{ width: 40, height: 40 }}
                          roundedCircle
                        />
                      </Button>
                      <Dropdown.Menu
                        show={this.state.dropdownStatus}
                        alignRight
                      >
                        <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="3" onClick={this.logout}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Navbar.Collapse>
                  </Navbar>
                </div>
              );
            }
          })()}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.LogOutReducer.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    USERLOGOUT: (email, history) => {
      dispatch(USERLOGOUT(email, history));
    }
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarPage)
);
