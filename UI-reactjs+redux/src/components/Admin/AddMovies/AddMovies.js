import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Toast } from "react-bootstrap";

import { ADDMOVIESINPUTS, MOVIESCREATOR } from "../../../actions/actions";

class AddMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayToast: false,
    }
  }

  handleSubmit = (event) => {
    this.props.MOVIESCREATOR(
      event,
      this.refs.form,
      this.props.addmovieInputs
    )
    this.setState({displayToast: true })
  }

  render() {
    if(this.state.displayToast) {
      setTimeout(() => {
        this.setState({ displayToast: false })
      }, 3000)
    }
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
              <div>
                <Form
                  ref="form"
                  onSubmit={this.handleSubmit}
                >
                  <Form.Group>
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Movie Name"
                      name="MovieName"
                      onChange={this.props.ADDMOVIESINPUTS}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Language</Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Language"
                      name="Language"
                      onChange={this.props.ADDMOVIESINPUTS}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Genre"
                      name="Genre"
                      onChange={this.props.ADDMOVIESINPUTS}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Release Date</Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Release Date"
                      name="ReleaseDate"
                      onChange={this.props.ADDMOVIESINPUTS}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Rating"
                      name="Rating"
                      onChange={this.props.ADDMOVIESINPUTS}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Poster Url</Form.Label>
                    <Form.Control
                      className="textField"
                      type="text"
                      placeholder="Enter Poster Url"
                      name="PosterUrl"
                      onChange={this.props.ADDMOVIESINPUTS}
                      required
                    />
                  </Form.Group>
                  <Button className="submitBtn" variant="dark" type="submit">
                    Add Movie
                  </Button>
                </Form>
                <Toast show={this.state.displayToast}>
                  <Toast.Header>
                    New Movie
                  </Toast.Header>
                  <Toast.Body>{this.props.message}</Toast.Body>
                </Toast>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addmovieInputs: state.NewMoviesReducer.addmovieInputs,
    message: state.NewMoviesReducer.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ADDMOVIESINPUTS: event => {
      const name = event.target.name;
      const value = event.target.value;
      dispatch(ADDMOVIESINPUTS(name, value));
    },
    MOVIESCREATOR: (event, form, addmovieInputs) => {
      dispatch(MOVIESCREATOR(event, form, addmovieInputs));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMovies);
