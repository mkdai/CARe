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
    this.state = {
      dates: [],
      times: []
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Form>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">select</option>
          <option value="other">...</option>
        </FormControl>
      </FormGroup>
      </Form>
    );
  }
}

export default AppointmentInput;