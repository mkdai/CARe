import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  HelpBlock
} from "react-bootstrap";
import DatePicker from "react-bootstrap-date-picker";
import TimePicker from "react-bootstrap-time-picker";

const l = console.log;

class AppointmentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: "9:00",
      end: "23:00"
    };
  }

  componentDidMount() {
    l("AppointmentInput Mounted, received props: ", this.props);
    if (this.props.daysOfService.length > 0) {
      let days = this.props.daysOfService;
      let startTime = days.reduce((startTime, day) => {
        return startTime > day.start ? day.start : startTime;
      }, days[0].start);
      let endTime = days.reduce((endTime, time) => {
        return endTime < time.end ? time.end : endTime;
      }, days[0].end);

      let startTimeHours = startTime / 3600;
      let startTimeMinutes = (startTime % 3600) / 60;
      if (startTimeMinutes < 10) {
        startTimeMinutes = "0" + startTimeMinutes;
      }
      startTime = `${startTimeHours}:${startTimeMinutes}`;
      l("this is the start time", startTime);

      let endTimeHours = endTime / 3600;
      let endTimeMinutes = (endTime % 3600) / 60;
      if (endTimeMinutes < 10) {
        endTimeMinutes = "0" + endTimeMinutes;
      }
      endTime = `${endTimeHours}:${endTimeMinutes}`;

      this.setState({ start: startTime, end: endTime });

      // this.setState(
      //   {
      //     start: `${startTimeHours.toString()}:${startTimeMinutes.toString()}`,
      //     end: endTime
      //   },
      //   () => l("this is the state after setting start", this.state)
      // );
    }
  }

  render() {
    return (
      <Form inline>
        <FormGroup controlId="cars">
          {"  "}
          <FormControl
            componentClass="select"
            onChange={this.props.handleCarChange}
          >
            {this.props.currentUser.cars ? (
              this.props.currentUser.cars.map((car, i) => (
                <option value={car} key={i}>
                  {car}
                </option>
              ))
            ) : null}
          </FormControl>
        </FormGroup>
        <FormGroup controlId="service">
          {"  "}
          <FormControl
            componentClass="select"
            onChange={this.props.handleServiceChange}
          >
            {this.props.services.map((service, i) => (
              <option value={service} key={i}>
                {service}
              </option>
            ))}
          </FormControl>
        </FormGroup>

        <FormGroup controlId="time">
          {"  "}
          <TimePicker
            start={this.state.start}
            end={this.state.end}
            onChange={this.props.handleTimeChange}
            value={this.props.time}
          />
        </FormGroup>

        <FormGroup controlId="date">
          <DatePicker
            id="datepicker"
            value={this.props.date}
            onChange={this.props.handleDateChange}
          />
        </FormGroup>

        <Button type="submit" onClick={this.props.handleFindApptClick}>
          Find Appointments
        </Button>
      </Form>
    );
  }
}

export default AppointmentInput;
