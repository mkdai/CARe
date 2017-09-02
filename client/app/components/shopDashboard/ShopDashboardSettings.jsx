import React, { Component } from "react";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
};

class ShopDashboardSettings extends Component {
  render() {
    return (
      <Form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="First Name"
          placeholder="First Name"
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
        //make a calendar
        <p>These are the settings</p>
      </Form>
    );
  }
}

export default ShopDashboardSettings;
