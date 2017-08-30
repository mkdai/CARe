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
      times: []
    };
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
          future: "12 hours"
        })
      )
      .then(res => {
        console.log("these are the times", res.data.map(time => time.start));
        let times = res.data.map(time => time.start);

        this.setState({ times }, () => console.log(this.state));
      });

    this.setState({
      services: ["Oil Change", "Detailing", "Diagnostic"],
      times: ["1:00pm", "2:00pm", "3:00pm", "4:00pm"],
      dates: []
    });
  }

  render() {
    return (
      <div>
        <AppointmentInput {...this.state} />
        <AppointmentsList />
      </div>
    );
  }
}

export default Appointments;
