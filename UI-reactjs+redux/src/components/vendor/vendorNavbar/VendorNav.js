import React, { Component } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Image,
  Dropdown
} from "react-bootstrap";
import "./VendorNav.css";
import { withRouter, Link } from "react-router-dom";
import { USERLOGOUT } from "../../../actions/actions.js";
import { connect } from "react-redux";

class VendorNav extends Component {
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
        {(() => {
          var role = localStorage.getItem("role");
          if (role === "vendor") {
            return (
              <Container>
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
                    <Navbar.Collapse
                      id="basic-navbar-nav"
                      style={{ justifyContent: "right" }}
                    >
                      <Nav className="mr-auto">
                        <Nav.Link>
                          <Link to="/enrolltheatre" className="navlinks">
                            Enroll Theatre
                          </Link>
                        </Nav.Link>
                      </Nav>
                      <Button
                        variant="dark"
                        style={{ padding: 0 }}
                        onClick={() =>
                          this.setState({
                            dropdownStatus: !this.state.dropdownStatus
                          })
                        }
                      >
                        <Image
                          src={require("../../../images/user.png")}
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
  connect(mapStateToProps, mapDispatchToProps)(VendorNav)
);
