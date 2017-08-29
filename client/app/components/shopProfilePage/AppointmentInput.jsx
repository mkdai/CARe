import React, { Component } from 'react';
import {
  Form, 
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

class AppointmentInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form inline>
        <FormGroup controlId="service">
          <ControlLabel>Service</ControlLabel>
          {'  '}
          <FormControl componentClass="select" placeholder="date">
          { this.props.services.map((service, i) => <option value={service} key={i}>{service}</option>) }
          </FormControl>
        </FormGroup>

        <FormGroup controlId="time">
          <ControlLabel>Time</ControlLabel>
          {'  '}
          <FormControl componentClass="select" placeholder="time">
          { this.props.times.map((hour, i) => <option value={hour} key={i}>{hour}</option>) }
          </FormControl>
        </FormGroup>

        <FormGroup controlId="date">
        <ControlLabel>Date</ControlLabel>
        {'  '}
        <FormControl componentClass="select" placeholder="date">
        { this.props.dates.map((date, i) => <option value={date} key={i}>{date}</option>) }
        </FormControl>
      </FormGroup>

      </Form>
    );
  }
}

export default AppointmentInput;