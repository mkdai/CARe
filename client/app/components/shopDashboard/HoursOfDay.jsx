import React, { Component } from "react";
import TimePicker from "react-bootstrap-time-picker";

class HoursOfDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0
    };
  }
  render() {
    return (
      <div>
        <span>{this.props.day}</span>
        <span>
          <TimePicker step={30} onChange={this.state.start} />
        </span>
        <span>
          <TimePicker step={30} onChange={this.state.end} />
        </span>
      </div>
    );
  }
}

export default HoursOfDay;
