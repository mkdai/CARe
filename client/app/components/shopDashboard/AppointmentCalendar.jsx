import React, { Component } from "react";
import { Well } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";
import fullCalendar from "fullcalendar";
<<<<<<< HEAD

class AppointmentCalendar extends Component {
  /* ShopDashboard Appointment Calendar should
 *  // be able to render month, week, day, and daylist views of all the shops bookings
 *     month view should simply have an indicator of appointments (not listed)
 *   be able to click each individual appointments, and see relevant info about the booking
=======
import timekit from "timekit-sdk";
import {
  timekitApp,
  timekitEmail,
  timekitPassword
} from "../../../../env/config";

class AppointmentCalendar extends Component {
  /* ShopDashboard Appointment Calendar should
<<<<<<< HEAD
 *   be able to render month, week, day, and daylist views of all the shops bookings
>>>>>>> have psuedo code of shop apptCal expectations
=======
 *  // be able to render month, week, day, and daylist views of all the shops bookings
 *   be able to click each individual appointments, and see relevant info about the booking
>>>>>>> Render button or Appointment Calendar views
 *   be able to set the week hours
 *     should have the capability to set different days
 *     should be able to set different hours
 *     should query bookingjs, and set the settings
 */

  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    console.log("mounting appointment calendar", this.props);
    axios
      .get(`api/shopdashboard/getCalendar`, {
        params: { id: this.props.calId }
      })
=======
    timekit.configure({
      app: timekitApp,
      inputTimestampFormat: "U",
      outputTimestampFormat: "U"
    });
    // Timestamps coming and going to timekit sdk must be unicode

    timekit
      .auth({ email: timekitEmail, password: timekitPassword })
      .then(() => timekit.include("attributes").getBookings())
>>>>>>> have psuedo code of shop apptCal expectations
      .then(res => {
        console.log("successfully received calandar from server", res.data);
        this.setState({ bookings: res.data });
      })
      .then(() => {
        $("#calendar").fullCalendar({
          header: {
            left: "prev,next today title",
            right: "month basicWeek basicDay listDay"
          },
          events: this.state.bookings,
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
