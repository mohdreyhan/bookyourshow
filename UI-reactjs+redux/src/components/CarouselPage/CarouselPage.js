import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./CarouselPage.css";

class CarouselPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <div className="carousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slideImg"
                    src="https://i0.wp.com/www.heyuguys.com/images/2013/05/Man-of-Steel-Banner-UK.jpg?fit=2366%2C1088&ssl=1"
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slideImg"
                    src="https://vistapointe.net/images/night-at-the-museum-secret-of-the-tomb-4.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slideImg"
                    src="http://3.bp.blogspot.com/-ZEAzuyzfcJc/UfB-AS9A3zI/AAAAAAAARwY/4YAm85A3SDQ/s1600/pacific-rim-poster-banner.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarouselPage);
