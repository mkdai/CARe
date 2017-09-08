import React, { Component } from "react";

export default class UserReview extends Component {
  render() {
    return (
      <div>
        Review: {this.props.review.review}
        Rating: {this.props.review.rating}
        Response: {this.props.review.response}
      </div>
    );
  }
}
