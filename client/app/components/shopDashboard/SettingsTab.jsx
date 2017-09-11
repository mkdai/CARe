import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import ShopDashboardSettings from "../../components/shopDashboard/ShopDashboardSettings";

class SettingsTab extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <Jumbotron>
          <ShopDashboardSettings
            handleAttributeChange={this.props.handleAttributeChange}
            handleBuildCalendar={this.props.handleBuildCalendar}
          />
        </Jumbotron>
      </div>
    );
  }
}

export default SettingsTab;
