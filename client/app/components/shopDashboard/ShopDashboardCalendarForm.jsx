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
import timekit from "timekit-sdk";
import { timekitEmail, timekitPassword } from "../../../../env/config";

class ShopDashboardCalendarForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm() {
    console.log("submitting form to timekit");
    timekit.configure({
      app: "hack-reactor-124",
      inputTimestampFormat: "U",
      outputTimestampFormat: "U"
    });
    // Timestamps coming and going to timekit sdk must be unicod

    timekit
      .auth({
        email: timekitEmail,
        password: timekitPassword
      })
      .then(() => console.log("authenticated"));
  }

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
          <Button onClick={this.handleSubmitForm}>Submit</Button>
        </Form>
      </Well>
    );
  }
}

export default ShopDashboardCalendarForm;
