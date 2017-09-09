import React, { Component } from "react";
import NavigationBar from "../../containers/navBar/NavigationBar.jsx";
import { connect } from "react-redux";
import axios from "axios";
import UserReview from "./UserReview.jsx";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  };
}

class UserReviews extends Component {
  constructor(props) {
    super(props);
    this.state = { userReviews: [] };
  }

  componentDidMount() {
    axios
      .get(`/api/userProfile/getAllReviews/${this.props.currentUser.id}`)
      .then(({ data }) => this.setState({ userReviews: data }))
      .catch(err => console.log(`Error getting user reviews! ${err}`));
  }

  componentWillReceiveProps(nextProps) {
    axios
      .get(`/api/userProfile/getAllReviews/${nextProps.currentUser.id}`)
      .then(({ data }) => this.setState({ userReviews: data }))
      .catch(err => console.log(`Error getting user reviews! ${err}`));
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <br />
        <br />
        <br />
        {this.state.userReviews.length ? (
          this.state.userReviews.map(review => (
            <UserReview review={review} key={review.id} />
          ))
        ) : (
          <div>Looks like you have no reviews!</div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserReviews);
