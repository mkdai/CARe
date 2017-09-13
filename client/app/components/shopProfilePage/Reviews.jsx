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
    currentAuth: state.currentAuth.auth,
    currentUser: state.currentUser.currentUser
  };
}
class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentUser: this.props.currentUser
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    console.log("receiving props: ", nextProps);
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
    axios
      .post("/api/shopProfile/postReviewEntry", {
        userId: this.state.currentUser.id,
        shopId: this.props.dbShopId,
        rating: this.state.rating,
        review: this.state.review
      })
      .then(() => this.props.getShopData(this.props.profileProps));
    this.closeModal();
  }

  render() {
    return (
      <Col>
        {this.props.currentAuth.isAuthenticated() &&
        !!this.props.currentUser.id ? (
          <Button
            onClick={this.openModal}
            disabled={this.props.currentUser.shopId === this.props.dbShopId}
          >
            {this.props.currentUser.shopId === this.props.dbShopId ? (
              `You own this shop!`
            ) : (
              `Post a Review`
            )}
          </Button>
        ) : (
          <Button onClick={this.props.currentAuth.login}>
            Sign in to post a review!
          </Button>
        )}
        {this.props.reviews.length === 0 ? (
          <div>
            There are no reviews for this shop yet!<div>Be the first to review it!</div>
          </div>
        ) : (
          this.props.reviews.map(review => {
            return <ReviewEntry review={review} />;
          })
        )}
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
