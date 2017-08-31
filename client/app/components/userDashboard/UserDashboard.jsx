import React from "react";
import NavigationBar from "../../containers/navBar/NavigationBar.jsx";
import Footer from "../footer/Footer.jsx";
import ProfileHead from "./ProfileHead.jsx";
import CarHead from "./CarHead.jsx";
import AddCar from "./AddCar.jsx";
import DashboardTabs from "./DashboardTabs.jsx";

export default class UserDashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <section className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xs-12 col-sm-12">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h3 className="section-heading-dashboard">User Dashboard</h3>
                <hr
                  className="section-heading-spacer"
                  id="custom-section-spacer"
                />
              </div>
              <div className="col-lg-4 col-xs-12 col-sm-12">
                <ProfileHead />
                <hr
                  className="section-heading-spacer"
                  id="custom-section-spacer"
                />
                <CarHead />
                <AddCar />
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
        </section>
        <Footer />
      </div>
    );
  }
}
