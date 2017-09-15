import React, { Component } from "react";
import { Accordion, Panel } from "react-bootstrap";
import InputMaintenanceHistory from "./InputMaintenanceHistory.jsx";
import axios from "axios";

export default class MaintenenceJobs extends Component {
  constructor(props) {
    super(props);
    this.state = { services: [] };
  }

  componentDidMount() {
    axios
      .get(`/api/shopdashboard/getServices/${this.props.currentUser.shopId}`)
      .then(({ data }) => this.setState({ services: data }))
      .catch(err => console.log(`Error getting shop services! ${err}`));
  }

  render() {
    return (
      <div>
        <h1>Maintenance Jobs</h1>
        <Accordion>
          {this.props.currentAppointments ? (
            this.props.currentAppointments.map((appointment, i) => {
              return (
                <Panel header={appointment.title} eventKey={i} key={i}>
                  <InputMaintenanceHistory
                    bookingId={appointment.id}
                    shopId={this.props.shopId}
                    currentUser={this.props.currentUser}
                    services={this.state.services}
                  />
                </Panel>
              );
            })
          ) : (
            <div>You have no maintenance jobs!</div>
          )}
        </Accordion>
      </div>
    );
  }
}
