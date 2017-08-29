import React, { Component } from 'react';
import AppointmentInput from './AppointmentInput';
import AppointmentsList from './AppointmentsList';

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      dates: [],
      times:[],
    }
  }

  componentDidMount() {
    let today = new Date(2017, 7, 28).toString();
    let tmrw = new Date(2017, 7,29).toString();


    this.setState({ 
      services : ['Oil Change', 'Detailing', 'Diagnostic'],    
      times: ["1", '2', '3', '4'],
      dates: [today, tmrw] 
    })
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