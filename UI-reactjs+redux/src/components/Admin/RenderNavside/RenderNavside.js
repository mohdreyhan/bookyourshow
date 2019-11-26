import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.js";
import AdminNavbar from "../AdminNavbar/AdminNavbar.js";


class RenderNavside extends Component {
  render() {
    return (
      <div>
        <Container>
          {(() => {
            var role = localStorage.getItem("role");
            if (role === "admin") {
              return (
                <div>
                  <Row>
                    <Col sm={12}>
                      <AdminNavbar />
                    </Col>
                  </Row>
                  <Sidebar />
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
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RenderNavside)
);

