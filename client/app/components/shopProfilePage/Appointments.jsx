import React, { Component } from 'react';
import AppointmentInput from './AppointmentInput';
import AppointmentsList from './AppointmentsList';

class Appointments extends Component {
  render() {
    return (
      <div>
        <AppointmentInput />
        <AppointmentsList />
      </div>
    );
  }
}

export default Appointments;