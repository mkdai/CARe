import React, { Component } from "react";
import { Accordion, Panel } from "react-bootstrap";
import InputMaintenanceHistory from "./InputMaintenanceHistory.jsx";

export default class MaintenenceJobs extends Component {
  render() {
    return (
      <div>
        <h1>Maintenance Jobs</h1>
        <Accordion>
          {this.props.currentAppointments ? (
            this.props.currentAppointments.map((appointment, i) => {
              return (
                <Panel header={appointment.title} eventKey={i} key={i}>
                  <InputMaintenanceHistory bookingId={appointment.id} />
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
