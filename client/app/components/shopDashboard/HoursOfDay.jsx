import React, { Component } from "react";
import TimePicker from "react-bootstrap-time-picker";
const l = console.log;

class HoursOfDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0
    };
  }

  componentDidMount() {
    l(this.props.day);
  }
  render() {
    return (
      <div>
        <span>{this.props.day}</span>
        <span>
          <TimePicker
            step={30}
            value={this.state.start}
            onChange={e => {
              this.setState({ start: e }, () =>
                this.props.handleHoursOfOpChange(
                  this.props.day,
                  e,
                  this.state.end
                )
              );
            }}
          />
        </span>
        <span>
          <TimePicker
            step={30}
            value={this.state.end}
            onChange={e => {
              this.setState({ end: e }, () =>
                this.props.handleHoursOfOpChange(
                  this.props.day,
                  this.state.start,
                  e
                )
              );
            }}
          />
        </span>
      </div>
    );
  }
}

export default HoursOfDay;
