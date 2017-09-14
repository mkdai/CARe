import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { addUser } from "../../actions/currentUserAction.js";
import { bindActionCreators } from "redux";
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addUser }, dispatch);
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
    this.props.addUser({});
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
          <Navbar.Form onSubmit={this.search} pullLeft className="search-form">
            <FormGroup id="search-bar">
              <FormControl
                type="text"
                value={this.state.term}
                placeholder="Search"
                onChange={this.handleTermChange}
                id="search-field"
              />
              <FormControl
                type="text"
                value={this.state.location}
                placeholder="Current Location"
                onChange={this.handleLocationChange}
                id="location-search"
              />
            </FormGroup>
            <Link to={this.state.searchUrl} id="search-button">
              {" "}
              SEARCH{" "}
            </Link>
          </Navbar.Form>
          <Navbar.Toggle />
        </Navbar.Header>
        {!this.props.currentAuth.isAuthenticated() && (
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={this.login}>SIGNUP | LOGIN</NavItem>
            </Nav>
          </Navbar.Collapse>
        )}
        {this.props.currentAuth.isAuthenticated() && (
          <Navbar.Collapse>
            <Nav pullRight>
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
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
