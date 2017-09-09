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

function log(...props) {
  console.log(...props);
}

class AppointmentInput extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  render() {
    return (
      <Form inline>
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
