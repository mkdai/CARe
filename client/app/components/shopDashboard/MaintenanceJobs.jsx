import React, { Component } from "react";
import { Accordion, Panel } from "react-bootstrap";
import InputMaintenanceHistory from "./InputMaintenanceHistory.jsx";

export default class MaintenenceJobs extends Component {
  render() {
    return (
      <div>
        {/* Need to make this dynamic based on jobs each shop has */}
        <h1>Maintenance Jobs</h1>
        <Accordion>
          <Panel
            header="Oil change for red subaru accepted on xx/yy/zz"
            eventKey="1"
          >
            w/e info here
            <InputMaintenanceHistory shopId={this.props.shopId} />
          </Panel>
          <Panel
            header="Tire change for black honda accepted on xx/yy/zz"
            eventKey="2"
          >
            w/e info here
            <InputMaintenanceHistory />
          </Panel>
          <Panel
            header="Paint job for white lexus accepted on xx/yy/zz"
            eventKey="3"
          >
            w/e info here
            <InputMaintenanceHistory />
          </Panel>
          <Panel
            header="Interior cleaning for black toyota accepted on xx/yy/zz"
            eventKey="4"
          >
            w/e info here
            <InputMaintenanceHistory />
          </Panel>
          <Panel header="I don't even know" eventKey="5">
            w/e info here
            <InputMaintenanceHistory />
          </Panel>
        </Accordion>
      </div>
    );
  }
}
