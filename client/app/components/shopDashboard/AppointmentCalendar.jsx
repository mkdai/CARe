import React, { Component } from "react";
import { Well } from "react-bootstrap";
import $ from "jquery";
import fullCalendar from "fullcalendar";
import timekit from "timekit-sdk";
import {
  timekitApp,
  timekitEmail,
  timekitPassword
} from "../../../../env/config";

class AppointmentCalendar extends Component {
  /* ShopDashboard Appointment Calendar should
 *  // be able to render month, week, day, and daylist views of all the shops bookings
 *   be able to click each individual appointments, and see relevant info about the booking
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
    timekit.configure({
      app: timekitApp,
      inputTimestampFormat: "U",
      outputTimestampFormat: "U"
    });
    // Timestamps coming and going to timekit sdk must be unicode

    timekit
      .auth({ email: timekitEmail, password: timekitPassword })
      .then(() => timekit.getCalendar({ id: this.props.calendar_id }))
      .then(
        res => res.data.getBookings()
        // timekit.include("attributes")
        // .getBookings()
      )
      .then(res => {
        let bookings = [];
        res.data.forEach(booking => {
          if (!booking.completed && booking.state === "confirmed") {
            let { start, end, what } = booking.attributes.event;
            let title = what;
            bookings.push({ start, end, title });
          }
        });
        this.setState({ bookings }, () =>
          console.log("this is the state after getting bookings", this.state)
        );
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
      .catch(err => console.log("could not get calendars", err));
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
