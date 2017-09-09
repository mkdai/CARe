import React, { Component } from "react";
import { Collapse, Well, ListGroupItem } from "react-bootstrap";

export default class UserHistoryEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ListGroupItem>
        <h3 onClick={() => this.setState({ open: !this.state.open })}>
          Maintenance entry on {this.props.history.date.slice(0, 10)} for{" "}
          {this.props.history.service}
        </h3>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <div>Service Description: {this.props.history.description}</div>
              <div>Mileage: {this.props.history.mileage}</div>
              <div>Additional Notes: {this.props.history.notes}</div>
            </Well>
          </div>
        </Collapse>
      </ListGroupItem>
    );
  }
}
