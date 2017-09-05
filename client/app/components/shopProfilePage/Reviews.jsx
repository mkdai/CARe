import React, { Component } from "react";
import ReviewEntry from "./ReviewEntry.jsx";
class Reviews extends Component {
  render() {
    return (
      <div>
        <div>I AM REVIEWS</div>
        {this.props.reviews.map(review => {
          return <ReviewEntry review={review} />;
        })}
      </div>
    );
  }
}

export default Reviews;
