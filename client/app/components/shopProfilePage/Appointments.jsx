import React, { Component } from "react";
import { Button, Collapse, Col } from "react-bootstrap";
import AppointmentInput from "./AppointmentInput";
import AppointmentsList from "./AppointmentsList";
import TimekitBooking from "timekit-booking";
import axios from "axios";
// import {
//   timekitApp,
//   timekitEmail,
//   timekitPassword,
//   timekitApiToken
// } from "../../../../env/config";
import timekit from "timekit-sdk";

const l = console.log;

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      service: "",
      date: new Date().toISOString(),
      times: [],
      time: 0,
      shopLocation: "",
      openList: false,
      car: {} //needs to be the car object (from the database);
    };

    this.handleCarChange = this.handleCarChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleFindApptClick = this.handleFindApptClick.bind(this);
  }

  componentDidMount() {
    // l("Appointments component mounted, getting bookings, props:", this.props);
    axios
      .get(`api/shopProfile/getBookings`, {
        params: { calId: this.props.calId }
      })
      .then(res =>
        this.setState(
          {
            times: res.data,
            services: ["Oil Change", "Detailing"]
          },
          () => l("Appointments: getBookings responds. State: ", this.state)
        )
      )
      .catch(err =>
        l("Appointments: getBookings --> could not get shop appointments", err)
      );
  }

  handleCarChange(e) {
    e.preventDefault();
    this.setState({ car: e.target.value });
  }

  handleServiceChange(e) {
    e.preventDefault();
    this.setState({ service: e.target.value });
  }

  handleTimeChange(e) {
    this.setState({ time: e });
  }

  handleDateChange(date, formattedDate) {
    this.setState({ date });
  }

  handleFindApptClick(e) {
    e.preventDefault();
    l("Appointments: handleFindAppt: These are the props", this.props);
    axios
      .get("api/shopProfile/getAppointments", {
        params: { calId: this.props.calId }
      })
      .then(res => {
        l("Appointments: handleFindAppt: ", res.data);
        let { tk_token, email } = this.props;
        let { app } = res.data;
        let { time, date } = this.state;

        const widget = new TimekitBooking();
        const ReqDate = new Date(date);
        let year = ReqDate.getFullYear();
        let month = ReqDate.getMonth();
        date = ReqDate.getDate();

        const ReqBooking = new Date(year, month, date, -1, 0, time);

        timekit.configure({ app: app });
        widget.init({
          app: app,
          email: this.props.email,
          apiToken: tk_token,
          calendar: this.props.calId,
          name: this.state.service + " service with " + this.props.name,
          bookingGraph: "confirm_decline",
          availabilityView: "listing",
          timekitFindTime: {
            start: ReqBooking,
            future: "4 hours",
            length: "1 hour"
          },
          callbacks: {
            createBookingStarted: response => {
              console.log("create booking was started", response);
            },
            showBookingPage: response => {
              console.log("showBookingPage", response);
            },
            submitBookingForm: response => {
              console.log("submitBookingForm", response);
            },
            createBookingSuccessful: response => {
              console.log("create booking was successful", response);
              axios
                .post("/api/shopProfile/postAppointment", {
                  service: this.state.service,
                  userId: this.props.currentUser.id,
                  shopId: this.props.dbpk,
                  carId: this.state.car.id,
                  calendarId: response.data.attributes.event_info.calendar_id,
                  bookingId: response.data.id,
                  time: response.data.attributes.event_info.start
                })
                .then(resp => console.log("appt posted to database", resp))
                .catch(err => console.log("appt failed to post on db", err));
            },
            createBookingFailed: response => {
              console.log("create booking was FAIL", response);
            }
          }
        });
      })
      .catch(err =>
        l("Appointments: handleFindAppt, could not init widget", err)
      );

    //send a request to timekit to find time within 3 hours of time,
    //render 5 within 30 minutes of each other

    this.setState({ openList: true });
  }

  render() {
    return (
      <Col>
        <AppointmentInput
          {...this.state}
          {...this.props}
          handleCarChange={this.handleCarChange}
          handleServiceChange={this.handleServiceChange}
          handleDateChange={this.handleDateChange}
          handleTimeChange={this.handleTimeChange}
          handleFindApptClick={this.handleFindApptClick}
        />
        <Collapse in={this.state.openList}>
          {/* <Button onClick={() => this.setState({ openList: false })}>x</Button> */}
          <AppointmentsList findingAppt={this.state.openList} />
        </Collapse>
      </Col>
    );
  }
}

export default Appointments;
