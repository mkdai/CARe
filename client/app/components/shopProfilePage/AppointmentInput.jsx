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

class AppointmentInput extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {}

  componentWillReceiveProps() {
    console.log(
      document.getElementById("datepicker").getAttribute("data-formattedvalue")
    );
  }

  render() {
    console.log("ApptInput: these are the props of appt input", this.props);
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
          <FormControl
            componentClass="select"
            onChange={this.props.handleTimeChange}
          >
            {this.props.times.map((hour, i) => (
              <option value={hour} key={i}>
                {hour}
              </option>
            ))}
          </FormControl>
        </FormGroup>

        <FormGroup controlId="date">
          <ControlLabel>Date</ControlLabel>
          <DatePicker
            id="datepicker"
            value={this.props.date}
            onChange={this.props.handleDateChange}
          />
          <HelpBlock>Help</HelpBlock>
        </FormGroup>

        <Button type="submit" onClick={this.props.handleFindApptClick}>
          Find Appointments
        </Button>
      </Form>
    );
  }
}

export default AppointmentInput;
