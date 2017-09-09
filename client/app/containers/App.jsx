import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage.jsx";
import LoadingPage from "./loadingPage/LoadingPage.jsx";
import Auth from "../../Auth/Auth.js";
import ShopProfilePage from "../components/shopProfilePage/ShopProfilePage.jsx";
import ShopDashboard from "../containers/shopDashboard/ShopDashboard.jsx";
import ShopDashboardSettings from "../components/shopDashboard/ShopDashboardSettings.jsx";
import ShopDashboardCalendarForm from "../components/shopDashboard/ShopDashboardCalendarForm.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addAuth } from "../actions/authAction.js";
import { addUser } from "../actions/currentUserAction.js";
import SearchResults from "../components/searchResults/searchResults.jsx";
import UserDashBoard from "./userDashboard/UserDashboard.jsx";
import InputMaintenanceHistory from "../components/shopDashboard/InputMaintenanceHistory.jsx";
import UserReviews from "./userDashboard/UserReviews.jsx";
import UserFavorites from "../components/userDashboard/UserFavorites.jsx";
import axios from "axios";

function mapStateToProps(state) {
  return {
    currentAuth: state.currentAuth.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addAuth, addUser }, dispatch);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.props.addAuth(new Auth());
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentAuth.isAuthenticated()) {
      nextProps.currentAuth.getProfile((err, profile) => {
        axios
          .post("/api/user/adduser", {
            email: profile.email,
            name: profile.name,
            picture: profile.picture
          })
          .then(({ data }) => {
            this.props.addUser(data);
          })
          .catch(err => console.log(err));
      });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/loadingpage" render={() => <LoadingPage />} />
          <Route path="/search" component={SearchResults} />
          <Route path="/shops" component={ShopProfilePage} />
          <Route path="/userdash" component={UserDashBoard} />
          <Route path="/shopdashboard" component={ShopDashboard} />
          <Route path="/shopdashsettings" component={ShopDashboardSettings} />
          <Route
            path="/shopdashcalform"
            component={ShopDashboardCalendarForm}
          />
          <Route path="/user-reviews" component={UserReviews} />
          <Route path="/user-favorites" component={UserFavorites} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
