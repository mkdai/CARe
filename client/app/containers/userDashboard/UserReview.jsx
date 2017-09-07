import React, { Component } from "react";
import NavigationBar from "../../containers/navBar/NavigationBar.jsx";
import { connect } from "react-redux";
import axios from "axios";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  };
}

class UserReview extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // axios.get('/api/')
  }

  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserReview);
