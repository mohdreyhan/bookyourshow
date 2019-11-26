import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

class vendorpage extends Component {
  render() {
    return (
      <Container>
        {(() => {
          var role = localStorage.getItem("role");
          if (role === null || role === "" || role === undefined) {
            return this.props.history.replace({
              pathname: "/"
            });
          } else {
            return <div>Register your theatre with us</div>;
          }
        })()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(vendorpage);
