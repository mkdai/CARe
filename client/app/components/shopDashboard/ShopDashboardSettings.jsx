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
      createCal: false,
      firstName: "",
      lastName: "",
      shopEmail: "",
      shopPassword: "",
      shopTimeZone: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdateFirstName = this.handleUpdateFirstName.bind(this);
    this.handleUpdateLastName = this.handleUpdateLastName.bind(this);
    this.handleUpdateEmail = this.handleUpdateEmail.bind(this);
    this.handleBuildCalendar = this.handleBuildCalendar.bind(this);
  }

  handleClick() {
    console.log(this.state);
  }

  handleUpdateFirstName(e) {
    e.preventDefault();
    this.setState({ firstName: e.target.value });
  }

  handleUpdateLastName(e) {
    e.preventDefault();
    this.setState({ lastName: e.target.value });
  }

  handleUpdateEmail(e) {
    e.preventDefault();
    this.setState({ shopEmail: e.target.value });
  }

  handleUpdatePassword(e) {
    e.preventDefault();
    this.setState({ shopPassword: e.target.value });
  }

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
            value={this.state.firstName}
            onChange={this.handleUpdateFirstName}
          >
            {this.state.value}
          </FieldGroup>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Last Name"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleUpdateLastName}
          >
            {this.state.value}
          </FieldGroup>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Shop Name"
            placeholder="Shop Name"
          />
          <Button onClick={this.handleClick}>Click</Button>

          <Link to="/shopdashcalform" {...this.props}>
            Create Calendar
          </Link>

          <p>These are the settings</p>
        </Form>
      </Well>
    );
  }
}

export default ShopDashboardSettings;
