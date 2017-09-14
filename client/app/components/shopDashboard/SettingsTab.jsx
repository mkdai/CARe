import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import ShopDashboardSettings from "../../components/shopDashboard/ShopDashboardSettings";
import HoursSettings from "../../components/shopDashboard/HoursSettings";
import ServiceSettings from "./ServiceSettings.jsx";

class SettingsTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
        {!this.props.calId ? (
          <Jumbotron>
            <h3>Create Calendar</h3>
            <ShopDashboardSettings
              handleAttributeChange={this.props.handleAttributeChange}
              handleBuildCalendar={this.props.handleBuildCalendar}
              handleTestSettings={this.props.handleTestSettings}
            />
          </Jumbotron>
        ) : null}
        <Jumbotron>
          <h3>Services</h3>
          <ServiceSettings shopId={this.props.currentUser.shopId} />
        </Jumbotron>
        <Jumbotron>
          <HoursSettings
            {...this.props}
            week={this.props.week}
            daysOfService={this.props.daysOfService}
            shopId={this.props.currentUser.shopId}
            handleDaysOfServiceChange={this.props.handleDaysOfServiceChange}
            handleHoursOfOpChange={this.props.handleHoursOfOpChange}
          />
        </Jumbotron>
      </div>
    );
  }
}

export default SettingsTab;
