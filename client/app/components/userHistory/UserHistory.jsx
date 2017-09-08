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
    console.log("updating", nextProps);
    axios
      .get(`/api/userProfile/getMaintenanceHistory/${nextProps.currentCar}`)
      .then(({ data }) => this.setState({ histories: data }))
      .catch(err => console.log(`Error getting car history! ${err}`));
  }

  render() {
    return (
      <Grid>
        <ListGroup>
          <button onClick={() => console.log(this.state)}>click</button>
          {this.state.histories ? (
            this.state.histories.map(history => (
              <div>
                {console.log("here  FIREEEEEEEEEE", this.props.history)}
                <UserHistoryEntry history={history} />
              </div>
            ))
          ) : (
            <div>This car doesn't have any history yet!</div>
          )}
        </ListGroup>
      </Grid>
    );
  }
}
