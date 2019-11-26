import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import "./MainPage.css";
import CarouselPage from "../CarouselPage/CarouselPage.js";
import TabsPage from "../TabsPage/TabsPage.js";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Container>
          {(() => {
            var value = localStorage.getItem("token");
            if (value === null || value === "" || value === undefined) {
              return this.props.history.replace({
                pathname: "/"
              });
            } else {
              return (
                <div>
                  <div>
                    <CarouselPage />
                  </div>
                  <div>
                    <TabsPage />
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
