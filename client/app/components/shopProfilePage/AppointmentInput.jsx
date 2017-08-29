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
    this.setState({times: ['1:00', '2:00', '3:00', '4:00', '5:00']})
  }

  render() {
    console.log(this.state.times)
    return (
      <Form>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        {
           this.state.times.map(hour => 
             <option value={hour}>{hour}</option>
          )
        }
          <option value="other">...</option>
        </FormControl>
      </FormGroup>
      </Form>
    );
  }
}

export default AppointmentInput;