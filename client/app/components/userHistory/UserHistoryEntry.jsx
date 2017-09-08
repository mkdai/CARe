import React, { Component } from "react";
import { Collapse, Well, ListGroupItem } from "react-bootstrap";
import MaintenanceEntry from "./MaintenanceEntry";

export default class UserHistoryEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ListGroupItem>
        <h3 onClick={() => this.setState({ open: !this.state.open })}>
          Maintenance on xx/xx/xx for XYZ
        </h3>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <button onClick={() => console.log(this.props.history)}>
                history
              </button>
              <MaintenanceEntry />
            </Well>
          </div>
        </Collapse>
      </ListGroupItem>
    );
  }
}
