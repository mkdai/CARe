import React, { Component } from "react";
import AppointmentInput from "./AppointmentInput";
import AppointmentsList from "./AppointmentsList";
import timekit from "timekit-sdk";
import { timekitEmail, timekitPassword } from "../../../../env/config";

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      service: "",
      date: new Date().toISOString(),
      times: [],
      time: ""
    };
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleFindApptClick = this.handleFindApptClick.bind(this);
  }

  componentDidMount() {
    timekit.configure({
      app: "hack-reactor-124"
    });

    timekit
      .auth({ email: timekitEmail, password: timekitPassword })
      .then(() =>
        timekit.findTime({
          calendar_ids: ["9aefc3b5-f55b-4f41-afd2-ccb2829fdfc8"],
          future: "12 hours",
          // filters: {
          //   and: [{ specific_time: { start: 9, end: 24 } }]
          // },
          length: "1 Hour"
        })
      )
      .then(res => {
        let times = res.data.map(time => {
          return time.start.split("T")[1].split("-")[0];
        });

        let { time, dates, date, services, service } = this.state;

        this.setState({
          time,
          times,
          dates,
          date,
          services: ["Oil Change", "Detailing"],
          service
        });
      });
  }

  handleServiceChange(e) {
    e.preventDefault();

    let service = e.target.value;
    let { services, dates, date, times, time } = this.state;

    this.setState({ services, service, dates, date, times, time });
  }

  handleTimeChange(e) {
    e.preventDefault();

    let time = e.target.value;
    let { services, service, dates, date, times } = this.state;

    this.setState({ services, service, dates, date, times, time });
  }

  handleDateChange(date, formattedDate) {
    let { services, service, dates, times, time } = this.state;

    this.setState({ services, service, dates, date, times, time }, () =>
      console.log(this.state, "this is the state of appointments")
    );
  }

  handleFindApptClick(e) {
    e.preventDefault();
    console.log("i hear you");
  }

  render() {
    return (
      <div>
        <AppointmentInput
          {...this.state}
          handleServiceChange={this.handleServiceChange}
          handleDateChange={this.handleDateChange}
          handleTimeChange={this.handleTimeChange}
          handleFindApptClick={this.handleFindApptClick}
        />
        <AppointmentsList />
      </div>
    );
  }
}

export default Appointments;
