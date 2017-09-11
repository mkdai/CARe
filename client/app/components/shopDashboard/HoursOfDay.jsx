import React, { Component } from "react";
import TimePicker from "react-bootstrap-time-picker";

class HoursOfDay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>{this.props.day}</span>
        <span>
          <TimePicker step={30} />
        </span>
        <span>
          <TimePicker step={30} />
        </span>
      </div>
    );
  }
}

export default HoursOfDay;
