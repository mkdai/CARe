import React from "react";
import Auth from "../../../Auth/Auth.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function mapStateToProps(state) {
  return {
    currentAuth: state.currentAuth.auth
  };
}

class NavBar extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      isAuthed: true
    };
  }

  login() {
    this.props.currentAuth.login();
  }

  logout() {
    this.props.currentAuth.logout();
    this.setState({ isAuthed: false });
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            CARe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">Menu</span>
          </button>
          <div
            className="collapse navbar-collapse navbar-default"
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              {!this.props.currentAuth.isAuthenticated() && (
                <li className="nav-item" onClick={this.login}>
                  <a className="nav-link" href="#">
                    SIGN UP | LOGIN
                  </a>
                </li>
              )}
              {this.props.currentAuth.isAuthenticated() && (
                <li className="nav-item" onClick={this.logout}>
                  <a className="nav-link" href="#">
                    LOGOUT
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
