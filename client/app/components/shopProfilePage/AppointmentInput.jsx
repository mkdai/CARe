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
      <Form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
          <option value="select">select</option>
          { this.props.times.map((hour, i) => <option value={hour} key={i}>{hour}</option>) }
          </FormControl>
        </FormGroup>
      </Form>
    );
  }
}

export default AppointmentInput;