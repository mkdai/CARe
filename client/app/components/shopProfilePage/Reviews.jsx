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
  Col
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
  }
  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
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
          <div>
            Rating:
            <ButtonToolbar>
              <ToggleButtonGroup
                type="radio"
                name="options"
                defaultValue={5}
                onChange={e => console.log("hello")}
              >
                <ToggleButton value={1}>1</ToggleButton>
                <ToggleButton value={2}>2</ToggleButton>
                <ToggleButton value={3}>3</ToggleButton>
                <ToggleButton value={4}>4</ToggleButton>
                <ToggleButton value={5}>5</ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </div>
          <Modal.Footer>
            <Button>Click</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}

export default connect(mapStateToProps)(Reviews);
