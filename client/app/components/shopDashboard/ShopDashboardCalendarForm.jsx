import React, { Component } from "react";
import {
  Button,
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Well
} from "react-bootstrap";
import FieldGroup from "./FieldGroup.jsx";

class ShopDashboardCalendarForm extends Component {
  render() {
    return (
      <Well>
        <Form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="this is the the field group"
            placeholder="First Name"
          />
        </Form>
      </Well>
    );
  }
}

export default ShopDashboardCalendarForm;
