import React, { Component } from "react";
import $ from "jquery";
import fullCalendar from "fullcalendar";

class AppointmentCalendar extends Component {
  componentDidMount() {
    $("#calendar").fullCalendar({});
  }
  render() {
    return (
      <div>
        <h1>I am the appointment Calendar</h1>
        <div id="calendar" />
      </div>
    );
  }
}

export default AppointmentCalendar;
