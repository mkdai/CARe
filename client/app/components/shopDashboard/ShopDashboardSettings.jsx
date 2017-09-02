import React, { Component } from "react";
import {
  Button,
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Well
} from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import FieldGroup from "./FieldGroup.jsx";

class ShopDashboardSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createCal: false
    };
    this.handleBuildCalendar = this.handleBuildCalendar.bind(this);
  }
  handleOpen;

  handleBuildCalendar() {
    console.log("building calendar");
  }
  render() {
    return (
      <Well>
        <Form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="First Name"
            placeholder="First Name"
            help="enter your name here"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Last Name"
            placeholder="Last Name"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Shop Name"
            placeholder="Shop Name"
          />

          <Link to="/shopdashcalform">Create Calendar</Link>

          <p>These are the settings</p>
        </Form>
      </Well>
    );
  }
}

export default ShopDashboardSettings;
