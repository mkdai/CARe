import React, { Component } from "react";
import { Button, Collapse, Col } from "react-bootstrap";
import AppointmentInput from "./AppointmentInput";
import AppointmentsList from "./AppointmentsList";
import TimekitBooking from "timekit-booking";
import axios from "axios";

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      service: "",
      date: new Date().toISOString(),
      times: [],
      time: 0,
      shopCalendar: "9aefc3b5-f55b-4f41-afd2-ccb2829fdfc8",
      shopLocation: "",
      openList: false
    };

    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleFindApptClick = this.handleFindApptClick.bind(this);
  }

  componentDidMount() {
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
          () => console.log("set the times", this.state)
        )
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
    let widget = new TimekitBooking();
    let { time, date } = this.state;
    const ReqDate = new Date(date);
    const ReqBooking = new Date(
      ReqDate.getFullYear(),
      ReqDate.getMonth(),
      ReqDate.getDate(),
      0,
      0,
      time
    );
    widget.init({
      app: timekitApp,
      email: timekitEmail,
      apiToken: timekitApiToken,
      name: "Appt",
      calendar: "9aefc3b5-f55b-4f41-afd2-ccb2829fdfc8",
      availabilityView: "listing",
      timekitFindTime: {
        start: ReqBooking,
        future: "2 hours",
        length: "1 hour"
      }
    });

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
