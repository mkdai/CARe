import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../containers/landingPage/LandingPage.jsx";
import LoadingPage from "./loadingPage/LoadingPage.jsx";
import Auth from "../../Auth/Auth.js";
import ShopProfilePage from "../containers/shopProfilePage/ShopProfilePage.jsx";
import ShopDashboard from "../containers/shopDashboard/ShopDashboard.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addAuth } from "../actions/authAction.js";
import SearchResults from "./searchResults/searchResults.jsx";
import UserDashBoard from "./userDashboard/UserDashboard.jsx";

function mapStateToProps(state) {
  return {
    currentAuth: state.currentAuth.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addAuth }, dispatch);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.props.addAuth(new Auth());
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/loadingpage"
            render={() => <LoadingPage auth={this.props.currentAuth} />}
          />
          <Route path="/search" component={SearchResults} />
          <Route path="/shops/:yelpid" component={ShopProfilePage} />
          <Route path="/userdash" component={UserDashBoard} />
          <Route path="/shopdashboard" component={ShopDashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
