import React, { Component } from "react";
import { Well } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";
import fullCalendar from "fullcalendar";

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
=======
>>>>>>> Clean front end dashboard components of timekit

class AppointmentCalendar extends Component {
  /* ShopDashboard Appointment Calendar should
<<<<<<< HEAD
 *   be able to render month, week, day, and daylist views of all the shops bookings
>>>>>>> have psuedo code of shop apptCal expectations
=======
 *  // be able to render month, week, day, and daylist views of all the shops bookings
 *   be able to click each individual appointments, and see relevant info about the booking
>>>>>>> Render button or Appointment Calendar views
=======

class AppointmentCalendar extends Component {
  /* ShopDashboard Appointment Calendar should
 *  // be able to render month, week, day, and daylist views of all the shops bookings
 *     month view should simply have an indicator of appointments (not listed)
 *   be able to click each individual appointments, and see relevant info about the booking
>>>>>>> 81ea3afcd55040922411f692878bb29ab7fcddf4
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
    console.log("mounting appointment calendar", this.props);
    axios
      .get(`api/shopdashboard/getCalendar`, {
        params: { id: this.props.calId }
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
