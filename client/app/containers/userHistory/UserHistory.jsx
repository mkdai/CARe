import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import UserHistoryEntry from "./UserHistoryEntry.jsx";

export default class UserHistory extends Component {
  render() {
    return (
      <Grid>
        <UserHistoryEntry />
      </Grid>
    );
  }
}
