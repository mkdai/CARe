<<<<<<< d0e6344688e825adf0f603805e6e526b0021def6
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../containers/landingPage/LandingPage.jsx';
import LoadingPage from './loadingPage/LoadingPage.jsx';
import Auth from '../../Auth/Auth.js';
import ShopProfilePage from '../containers/shopProfilePage/ShopProfilePage.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAuth } from '../actions/authAction.js';
import SearchResults from './searchResults/searchResults.jsx';
=======
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../containers/landingPage/LandingPage.jsx";
import LoadingPage from "./loadingPage/LoadingPage.jsx";
import Auth from "../../Auth/Auth.js";
import ShopProfilePage from "../containers/shopProfilePage/ShopProfilePage.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addAuth } from "../actions/authAction.js";
>>>>>>> Changed some formating

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
<<<<<<< d0e6344688e825adf0f603805e6e526b0021def6
          <Route path="/loadingpage" render={() => <LoadingPage auth={this.props.currentAuth} />} />
          <Route path="/search" component={SearchResults}/>

=======
          <Route
            path="/loadingpage"
            render={() => <LoadingPage auth={this.props.currentAuth} />}
          />
>>>>>>> Changed some formating
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
