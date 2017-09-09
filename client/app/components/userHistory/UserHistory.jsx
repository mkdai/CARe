import React, { Component } from "react";
import { Grid, ListGroup } from "react-bootstrap";
import UserHistoryEntry from "./UserHistoryEntry.jsx";
import axios from "axios";

export default class UserHistory extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    axios
      .get(`/api/userProfile/getMaintenanceHistory/${nextProps.currentCar}`)
      .then(({ data }) => this.setState({ histories: data }))
      .catch(err => console.log(`Error getting car history! ${err}`));
  }

  render() {
    return (
      <Grid>
        <ListGroup>
          {this.state.histories ? (
            this.state.histories.map(history => (
              <div key={history.id}>
                <UserHistoryEntry history={history} />
              </div>
            ))
          ) : (
            <div>Please select a car to view it's history.</div>
          )}
        </ListGroup>
      </Grid>
    );
  }
}
