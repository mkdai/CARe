import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Rating from "react-rating";

class ReviewEntry extends Component {
  render() {
    console.log("PROPS IN REVIEW ENTRY: ", this.props);
    return (
      <div className="single-review">
        <hr />
        <Row>
          <Col lg={2} md={2} xs={12} sm={12}>
            <div className="review-name">{this.props.review.user.name}</div>
            <div>
              <img id="review-pic" src={this.props.review.user.profilePic} />
            </div>
          </Col>
          <Col lg={6} md={6} xs={9} sm={9}>
            <div className="review-rating">
              <Rating
                readonly
                initialRate={this.props.review.rating}
                empty={<img src="img/wrench-empty.png" className="icon" />}
                full={<img src="img/wrench-full.png" className="icon" />}
              />
            </div>
            <div className="review-review">{this.props.review.review}</div>
            <div className="review-response">
              {this.props.review.response !== null &&
              this.props.review.response !== "" ? (
                `Shop Response: ${this.props.review.response}`
              ) : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ReviewEntry;
