import React, { Component } from 'react';
import AppointmentInput from './AppointmentInput';
import AppointmentsList from './AppointmentsList';

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      times:[],
    }
  }

  componentDidMount() {
    this.setState({ times: ["1", '2', '3', '4'] })
  }

  render() {
    return (
      <div>
        <AppointmentInput {...this.state}/>
        <AppointmentsList />
      </div>
    );
  }
}

export default Appointments;