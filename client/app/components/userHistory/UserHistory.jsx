import React, { Component } from "react";
import { Grid, ListGroup } from "react-bootstrap";
import UserHistoryEntry from "./UserHistoryEntry.jsx";

export default class UserHistory extends Component {
  render() {
    return (
      <Grid>
        <ListGroup>
          <UserHistoryEntry />
          <UserHistoryEntry />
          <UserHistoryEntry />
          <UserHistoryEntry />
        </ListGroup>
      </Grid>
    );
  }
}
