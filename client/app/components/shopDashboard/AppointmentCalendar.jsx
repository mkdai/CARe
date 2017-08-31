import React, { Component } from "react";
import $ from "jquery";
import fullCalendar from "fullcalendar";
import timekit from "timekit-sdk";
import { timekitEmail, timekitPassword } from "../../../../env/config";

class AppointmentCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
  }

  componentDidMount() {
    timekit.configure({
      app: "hack-reactor-124",
      inputTimestampFormat: "U",
      outputTimestampFormat: "U"
    });

    timekit
      .auth({ email: timekitEmail, password: timekitPassword })
      .then(() => timekit.include("attributes").getBookings())
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
          events: this.state.bookings,
          defaultView: "listWeek"
        });
      })
      .catch(err => console.log("could not get calendars", err));
  }
  render() {
    return (
      <div>
        <div id="calendar" />
      </div>
    );
  }
}

export default AppointmentCalendar;
