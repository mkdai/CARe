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
    this.state = {}; // Do not delete, needed for FieldGroup Component
  }

  render() {
    return (
      <Well>
        <Form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Shop Name"
            placeholder="Shop Name"
            value={this.props.shopName}
            onChange={e => this.props.handleAttributeChange(e, "shopName")}
          >
            {this.state.value}
          </FieldGroup>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="First Name"
            placeholder="First Name"
            value={this.props.firstName}
            onChange={e => this.props.handleAttributeChange(e, "firstName")}
          >
            {this.state.value}
          </FieldGroup>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Last Name"
            placeholder="Last Name"
            value={this.props.lastName}
            onChange={e => this.props.handleAttributeChange(e, "lastName")}
          >
            {this.state.value}
          </FieldGroup>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Shop Description"
            placeholder="Shop Description"
            onChange={e =>
              this.props.handleAttributeChange(e, "shopDescription")}
          >
            {this.state.value}
          </FieldGroup>

          <Button onClick={this.props.handleBuildCalendar}>Submit</Button>
        </Form>
      </Well>
    );
  }
}

export default ShopDashboardSettings;
