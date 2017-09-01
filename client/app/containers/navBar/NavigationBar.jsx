import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem,
  Button,
  FormGroup,
  FormControl
} from "react-bootstrap";

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
    this.search = this.search.bind(this);
    this.state = {
      isAuthed: true,
      searchUrl: "/search?term="
    };
  }
  search() {
    this.context.router.history.push("search");
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
              <Navbar.Form>
                <FormGroup bsSize="sm">
                  <FormControl bsSize="sm" />
                  <FormControl bsSize="sm" />
                  <Link to={this.state.searchUrl}>SEARCH</Link>
                </FormGroup>
              </Navbar.Form>
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

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default connect(mapStateToProps)(NavigationBar);
