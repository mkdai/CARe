import React, { Component } from "react";

export default class UserReview extends Component {
  render() {
    return (
      <div>
        Review: {this.props.review}
        Rating: {this.props.rating}
        Response: {this.props.response}
      </div>
    );
  }
}
