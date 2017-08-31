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
      dates: [],
      date: new Date(),
      times: []
    };
    this.handleFindApptClick = this.handleFindApptClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
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
          filters: {
            and: [{ specific_time: { start: 9, end: 24 } }]
          },
          length: "1 Hour"
        })
      )
      .then(res => {
        let times = res.data.map(time => {
          return time.start.split("T")[1].split("-")[0];
        });

        let { dates, date, services } = this.state;

        this.setState({
          times: times,
          dates: [],
          date: new Date(),
          services: ["Oil Change", "Detailing", "Diagnostic"]
        });
      });
  }

  handleDateChange(date, formattedDate) {
    console.log("Appt: this is the date", date, "and it is a", typeof date);
    let { service, time } = this.state;
    this.setState({
      time,
      service,
      date,
      formattedDate
    });
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
          handleFindApptClick={this.handleFindApptClick}
          handleDateChange={this.handleDateChange}
        />
        <AppointmentsList />
      </div>
    );
  }
}

export default Appointments;
