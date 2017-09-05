import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
class ReviewEntry extends Component {
  render() {
    return (
      <Row>
        <Col lg={3} md={3} xs={3} sm={3}>
          {this.props.review.user.name}
        </Col>
        <Col lg={9} md={9} xs={9} sm={9}>
          <div>Rating: {this.props.review.rating}</div>
          <div>Review: {this.props.review.review}</div>
          <div>Shop Response: {this.props.review.response}</div>
        </Col>
      </Row>
    );
  }
}

export default ReviewEntry;
