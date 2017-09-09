import React, { Component } from "react";
import { Button, Collapse, Col } from "react-bootstrap";
import AppointmentInput from "./AppointmentInput";
import AppointmentsList from "./AppointmentsList";
import TimekitBooking from "timekit-booking";
import axios from "axios";

function log(...props) {
  console.log(...props);
}

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
      openList: false
    };

    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleFindApptClick = this.handleFindApptClick.bind(this);
  }

  componentDidMount() {
    log("Appointments component mounted, getting bookings, props:", this.props);
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
          () =>
            log(
              "Appointments: getBookings responds.  Current State: ",
              this.state
            )
        )
      )
      .catch(err =>
        log("Appointments: getBookings --> could not get shop appointments")
      );
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
    log("Appointments: handleFindAppt: These are the props", this.props);
    axios
      .get("api/shopProfile/getAppointments", {
        params: { calId: this.props.calId }
      })
      .then(res => {
        log("Appointments: handleFindAppt: ", res.data);

        let { app, email, token } = res.data;
        let { time, date } = this.state;
        const widget = new TimekitBooking();
        const ReqDate = new Date(date);
        let year = ReqDate.getFullYear();
        let month = ReqDate.getMonth();
        date = ReqDate.getDate();

        const ReqBooking = new Date(year, month, date, -1, 0, time);

        widget.init({
          app: app,
          email: email,
          apiToken: token,
          calendar: this.props.calId,

          name: this.state.service + " service with " + this.props.name,
          bookingGraph: "confirm_decline",
          availabilityView: "listing",
          timekitFindTime: {
            start: ReqBooking,
            future: "4 hours",
            length: "1 hour"
          }
        });
      })
      .catch(err => log("Appointments: handleFindAppt, could not init widget"));

    //send a request to timekit to find time within 3 hours of time,
    //render 5 within 30 minutes of each other

    this.setState({ openList: true });
  }

  render() {
    return (
      <Col>
        <AppointmentInput
          {...this.state}
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
