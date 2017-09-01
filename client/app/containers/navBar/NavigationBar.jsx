import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

function mapStateToProps(state) {
  return {
    currentAuth: state.currentAuth.auth
  };
}

class NavigationBar extends React.Component {
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
      <Navbar fixedTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              CAR<span id="e-span">e</span>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        {!this.props.currentAuth.isAuthenticated() && (
          <Nav pullRight>
            <NavItem onClick={this.login}>SIGNUP | LOGIN</NavItem>
          </Nav>
        )}
        {this.props.currentAuth.isAuthenticated() && (
          <Nav pullRight>
            <NavItem>
              <Link to="search">SEARCH</Link>
            </NavItem>
            <NavItem>
              <Link to="userdash">USER DASHBOARD</Link>
            </NavItem>
            <NavItem onClick={this.logout}>
              <Link to="/">LOGOUT</Link>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(NavigationBar);
