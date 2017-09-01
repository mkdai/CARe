import React, { Component } from "react";
import AppointmentCalendar from "../../components/shopDashboard/AppointmentCalendar.jsx";

class ShopDashboard extends Component {
  render() {
    return (
      <div>
        <h1>I am the shop dashboard</h1>
        <AppointmentCalendar />
      </div>
    );
  }
}

export default ShopDashboard;
