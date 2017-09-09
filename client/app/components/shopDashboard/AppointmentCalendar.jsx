import React, { Component } from "react";
import { Well } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";
import fullCalendar from "fullcalendar";

function l(...props) {
  console.log(...props);
}

class AppointmentCalendar extends Component {
  /* ShopDashboard Appointment Calendar should
 *  // be able to render month, week, day, and daylist views of all the shops bookings
 *     month view should simply have an indicator of appointments (not listed)
 *   be able to click each individual appointments, and see relevant info about the booking
 *   be able to set the week hours
 *     should have the capability to set different days
 *     should be able to set different hours
 *     should query bookingjs, and set the settings
 */

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("mounting appointment calendar", this.props);
    axios
      .get(`api/shopdashboard/getCalendar`, {
        params: { id: this.props.calId }
      })
      .then(res => {
        l("AppointmentCalendar: getCalendar: ", res.data);
        $("#calendar").fullCalendar({
          header: {
            left: "prev,next today title",
            right: "month basicWeek basicDay listDay"
          },
          events: res.data,
          defaultView: "basicWeek"
        });
      })
      .catch(err =>
        console.log("could not receive response from server of calendar", err)
      );
  }
  render() {
    return (
      <Well>
        <div id="calendar" />
      </Well>
    );
  }
}

export default AppointmentCalendar;
