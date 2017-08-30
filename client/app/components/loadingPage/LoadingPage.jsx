import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    currentAuth: state.currentAuth.auth
  };
}

class LoadingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoggedIn: 0
    };
  }

  handleRedirect() {
    if (this.state.LoggedIn === 0) {
      return <div>YOU'RE ON THIS SHITTY LOADING PAGE~</div>;
    } else if (this.state.LoggedIn) {
      return <Redirect to="/" />;
    } else {
      return <Redirect to="/FAIL" />;
    }
  }

  componentDidMount() {
    this.props.currentAuth.handleAuthentication(() => {
      this.setState({ LoggedIn: this.props.currentAuth.isAuthenticated() });
    });
  }

  render() {
    return this.handleRedirect();
  }
}

export default connect(mapStateToProps)(LoadingPage);
