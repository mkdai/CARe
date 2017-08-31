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
    this.state = {
      service: "",
      date: "",
      time: ""
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log(
      document.getElementById("datepicker").getAttribute("data-formattedvalue")
    );
  }

  handleDateChange(date, formattedDate) {
    console.log(
      "ApptInput: this is the date",
      date,
      "and it is a",
      typeof date
    );
    let { service, time } = this.state;
    this.setState({
      time,
      service,
      date,
      formattedDate
    });
  }

  render() {
    console.log("ApptInput: these are the props of appt input", this.props);
    return (
      <Form inline>
        <FormGroup controlId="service">
          {"  "}
          <FormControl componentClass="select" placeholder="date">
            {this.props.services.map((service, i) => (
              <option value={service} key={i}>
                {service}
              </option>
            ))}
          </FormControl>
        </FormGroup>

        <FormGroup controlId="time">
          {"  "}
          <FormControl componentClass="select" placeholder="time">
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
            value={this.state.date}
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
