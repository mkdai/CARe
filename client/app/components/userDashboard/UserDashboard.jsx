import React from "react";
import NavigationBar from "../../containers/navBar/NavigationBar.jsx";
import Footer from "../footer/Footer.jsx";
import ProfileHead from "./ProfileHead.jsx";
import CarHead from "./CarHead.jsx";
import AddCar from "./AddCar.jsx";
import DashboardTabs from "./DashboardTabs.jsx";
import { connect } from "react-redux";
import axios from "axios";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  };
}

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("PROPS IN USERDASH", this.props);
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xs-12 col-sm-12">
              <h3 className="section-heading-dashboard">User Dashboard</h3>
              <hr
                className="section-heading-spacer"
                id="custom-section-spacer"
              />
            </div>
            <div className="col-lg-4 col-xs-12 col-sm-12">
              <ProfileHead user={this.props} />
              <button onClick={() => console.log(this.props.currentUser)}>
                Test current user
              </button>
            </div>
            <div className="col-lg-4 col-xs-12 col-sm-12">
              <CarHead />
            </div>
            <div className="col-lg-4 col-xs-12 col-sm-12">
              <AddCar />
            </div>
            <div className="col-lg-12 col-xs-12 col-sm-12">
              <hr
                className="section-heading-spacer"
                id="custom-section-spacer"
              />
            </div>
          </div>
          <div className="row">
            <DashboardTabs />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserDashboard);
