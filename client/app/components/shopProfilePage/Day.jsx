import React, { Component } from "react";

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: ""
    };
  }

  componentDidMount() {
    let { start, end } = this.props;
    console.log("here are the day props:", this.props);

    let startTime = "";
    let startTimeHours = Math.floor(start / 3600);
    if (startTimeHours > 12) {
      startTime += "PM";
      startTimeHours = startTimeHours - 12;
    } else {
      startTime += "AM";
    }
    let startTimeMinutes = (start % 3600) / 60;
    if (startTimeMinutes < 10) {
      startTimeMinutes = "0" + startTimeMinutes;
    }
    startTime = `${startTimeHours}:${startTimeMinutes}` + startTime;

    console.log("this is the startTime", startTime);

    let endTime = "";
    let endTimeHours = Math.floor(end / 3600);
    if (endTimeHours > 12) {
      endTime += "PM";
      endTimeHours = endTimeHours - 12;
    } else {
      endTime += "AM";
    }
    let endTimeMinutes = (end % 3600) / 60;
    if (endTimeMinutes < 10) {
      endTimeMinutes = "0" + endTimeMinutes;
    }
    endTime = `${endTimeHours}:${endTimeMinutes}` + endTime;

    console.log("this is the endTime", endTime);

    this.setState({ start: startTime, end: endTime });
  }
  render() {
    return (
      <div>
        <div>
          {this.props.value}: {this.state.start} - {this.state.end}
        </div>
      </div>
    );
  }
}

export default Day;
