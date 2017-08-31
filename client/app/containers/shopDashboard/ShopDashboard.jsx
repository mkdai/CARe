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

// Hi Ethan,

// Booking.js is currently only for making the bookings, i.e. the customers' point of view.

// Although there's no official support for what you're requesting, it shouldn't be too hard to develop yourself - here's how I'd go about it:
// Use our JS SDK (https://github.com/timekit-io/js-sdk) for fetching the bookings for a given resource.
// Use the FullCalendar (http://fullcalendar.io) library, which also is the main component in booking.js, to render the bookings in a calendar view.
// Let me know if you have any luck with it 👍
