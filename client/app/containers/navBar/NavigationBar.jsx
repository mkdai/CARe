import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem,
  Button,
  FormControl,
  Form,
  FormGroup
} from "react-bootstrap";

function mapStateToProps(state) {
  return {
    currentAuth: state.currentAuth.auth,
    currentUser: state.currentUser.currentUser
  };
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    // this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.state = {
      isAuthed: true,
      searchUrl: "/search?term=",
      location: "",
      term: ""
    };
  }
  handleTermChange(e) {
    let searchRoute = "/search?";
    if (this.state.location !== "") {
      searchRoute += `location=${this.state.location}`;
      searchRoute += `&term=${e.target.value}`;
    } else {
      searchRoute += `&term=${e.target.value}`;
    }
    this.setState({ term: e.target.value, searchUrl: searchRoute });
  }
  handleLocationChange(e) {
    let searchRoute = "/search?";
    if (e.target.value !== "") {
      searchRoute += `location=${e.target.value}`;
      searchRoute += `&term=${this.state.term}`;
    } else {
      searchRoute += `term=${this.state.term}`;
    }
    this.setState({ location: e.target.value, searchUrl: searchRoute });
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
      <Navbar fixedTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              CAR<span id="e-span">E</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        {!this.props.currentAuth.isAuthenticated() && (
          <Navbar.Collapse>
            <Nav pullRight>
              <Navbar.Form onSubmit={this.search} pullLeft>
                <FormGroup>
                  <FormControl
                    type="text"
                    value={this.state.term}
                    placeholder="Search"
                    onChange={this.handleTermChange}
                  />
                  <FormControl
                    type="text"
                    value={this.state.location}
                    placeholder="Current Location"
                    onChange={this.handleLocationChange}
                  />
                </FormGroup>
                <Link to={this.state.searchUrl}> SEARCH </Link>
              </Navbar.Form>
              <NavItem onClick={this.login}>SIGNUP | LOGIN</NavItem>
            </Nav>
          </Navbar.Collapse>
        )}
        {this.props.currentAuth.isAuthenticated() && (
          <Navbar.Collapse>
            <Nav pullRight>
              <Navbar.Form onSubmit={this.search} pullLeft>
                <FormGroup>
                  <FormControl
                    type="text"
                    value={this.state.term}
                    placeholder="Search"
                    onChange={this.handleTermChange}
                  />
                  <FormControl
                    type="text"
                    value={this.state.location}
                    placeholder="Current Location"
                    onChange={this.handleLocationChange}
                  />
                </FormGroup>
                <Link to={this.state.searchUrl}> SEARCH </Link>
              </Navbar.Form>
              <NavItem>
                <Link to="userdash">USER DASHBOARD</Link>
              </NavItem>
              {this.props.currentUser && this.props.currentUser.shopId ? (
                <NavItem>
                  <Link to="shopdashboard">SHOP DASHBOARD</Link>
                </NavItem>
              ) : null}
              <NavItem onClick={this.logout}>
                <Link to="/">LOGOUT</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>
    );
  }
}

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default connect(mapStateToProps)(NavigationBar);
