import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import ShopDashboardSettings from "../../components/shopDashboard/ShopDashboardSettings";
import HoursSettings from "../../components/shopDashboard/HoursSettings";

class SettingsTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>

        <Jumbotron>
          <ShopDashboardSettings
            week={this.props.week}
            daysOfService={this.props.daysOfService}
            handleAttributeChange={this.props.handleAttributeChange}
            handleBuildCalendar={this.props.handleBuildCalendar}
            handleDaysOfServiceChange={this.props.handleDaysOfServiceChange}
          />
        </Jumbotron>
      </div>
    );
  }
}

export default SettingsTab;
