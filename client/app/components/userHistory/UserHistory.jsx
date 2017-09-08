import React, { Component } from "react";
import { Grid, ListGroup } from "react-bootstrap";
import UserHistoryEntry from "./UserHistoryEntry.jsx";
import axios from "axios";

export default class UserHistory extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   axios.get('/api/')
  // }

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
