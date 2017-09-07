import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser } from "../../actions/currentUserAction.js";
import axios from "axios";

function mapStateToProps(state) {
  return {
    currentAuth: state.currentAuth.auth,
    currentUser: state.currentUser.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addUser }, dispatch);
}

class LoadingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: 0
    };

    // this.getProfile = this.getProfile.bind(this);
  }

  componentDidMount() {
    this.props.currentAuth.handleAuthentication(authResult => {
      this.setState({ loggedIn: this.props.currentAuth.isAuthenticated() });
      console.log("heres idTokenPayload: ", authResult.idTokenPayload);
      axios
        .post("/api/user/adduser", {
          email: authResult.idTokenPayload.email,
          name: authResult.idTokenPayload.name,
          picture: authResult.idTokenPayload.picture
        })
        .then(({ data }) => {
          console.log(data);
          this.props.addUser(data);
        })
        .catch(err => console.log(err));

      // this.getProfile((err, profile) => {
      //   console.log("IN GET PROFILE", profile);
      //   this.props.addUser(profile);
      // });
    });
  }

  handleRedirect() {
    if (this.state.loggedIn === 0) {
      return <div>YOU'RE ON THIS SHITTY LOADING PAGE~</div>;
    } else if (this.state.loggedIn) {
      return <Redirect to="/" />;
    } else {
      return <Redirect to="/FAIL" />;
    }
  }

  render() {
    return this.handleRedirect();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);
