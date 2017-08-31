import React, { Component } from "react";
import TimekitBooking from "timekit-booking";
import timekit from "timekit-sdk";

class AppointmentsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let widget = new TimekitBooking();
    let tmrw = new Date(2017, 8, 7);
    console.log("this is tmrw", tmrw);
    widget.init({
      app: "hack-reactor-124",
      email: "EthanEFung@gmail.com",
      apiToken: "1NFvUV1RLMYfFIKTmwOUeNBaRWMfoj01",
      calendar: "9aefc3b5-f55b-4f41-afd2-ccb2829fdfc8",
      availabilityView: "listing",
      timekitFindTime: {
        start: tmrw,
        future: "5 hours",
        length: "1 Hour"
      }
    });
  }

  render() {
    return <div id="bookingjs" />;
  }
}

export default AppointmentsList;
