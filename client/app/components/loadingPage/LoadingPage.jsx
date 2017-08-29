import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoggedIn: 0
    }
  }

  handleRedirect() {
    if (this.state.LoggedIn === 0) {
      return (
        <div>
          YOU'RE ON THIS SHITTY LOADING PAGE~
        </div>
      )
    } else if (this.state.LoggedIn){
      return <Redirect to="/" />
    } else {
      return <Redirect to="/FAIL" />
    }
  }

  componentDidMount() {
    this.props.auth.handleAuthentication(() => {
      this.setState({ LoggedIn: this.props.auth.isAuthenticated() })
    });
  }

  render() {
    return this.handleRedirect()
  }
}