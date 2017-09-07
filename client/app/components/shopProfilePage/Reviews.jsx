import React, { Component } from "react";
import ReviewEntry from "./ReviewEntry.jsx";
import { connect } from "react-redux";
import axios from "axios";
import {
  Modal,
  Button,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  };
}
class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }

  handleRating(e) {
    this.setState({ rating: e.currentTarget.dataset.name });
  }

  handleReview(e) {
    this.setState({ review: e.target.value });
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <Col>
        <Button onClick={this.openModal}>Post a Review</Button>
        {this.props.reviews.map(review => {
          return <ReviewEntry review={review} />;
        })}
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <h2>Post a Review!</h2>
          </Modal.Header>
          <Form>
            Rating:
            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="options" defaultValue={5}>
                <ToggleButton onClick={this.handleRating} data-name={1}>
                  1
                </ToggleButton>
                <ToggleButton onClick={this.handleRating} data-name={2}>
                  2
                </ToggleButton>
                <ToggleButton onClick={this.handleRating} data-name={3}>
                  3
                </ToggleButton>
                <ToggleButton onClick={this.handleRating} data-name={4}>
                  4
                </ToggleButton>
                <ToggleButton onClick={this.handleRating} data-name={5}>
                  5
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
            <FormGroup>
              <ControlLabel> Review:</ControlLabel>
              <FormControl
                componentClass="textarea"
                type="text"
                onChange={this.handleReview}
              />
            </FormGroup>
          </Form>
          <Modal.Footer>
            <Button onClick={this.handleSubmit}>Click</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}

export default connect(mapStateToProps)(Reviews);
