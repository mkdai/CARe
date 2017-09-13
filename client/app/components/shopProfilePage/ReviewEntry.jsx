import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Rating from "react-rating";

class ReviewEntry extends Component {
  render() {
    return (
      <Row>
        <Col lg={3} md={3} xs={3} sm={3}>
          {this.props.review.user.name}
        </Col>
        <Col lg={9} md={9} xs={9} sm={9}>
          <div>
            <Rating
              readonly
              initialRate={this.props.review.rating}
              empty={<img src="img/wrench-empty.png" className="icon" />}
              full={<img src="img/wrench-full.png" className="icon" />}
            />
          </div>
          <div>Review: {this.props.review.review}</div>
          <div>
            {this.props.review.response !== "" ? (
              `Shop Response: ${this.props.review.response}`
            ) : null}
          </div>
        </Col>
      </Row>
    );
  }
}

export default ReviewEntry;
