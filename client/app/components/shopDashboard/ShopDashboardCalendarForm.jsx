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
  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidMount() {
    console.log("this is the props of the shop cal form", this.props);
  }

<<<<<<< HEAD
  handleSubmitForm() {}
=======
  handleSubmitForm() {
    console.log("submitting form to timekit");
    timekit.configure({
      app: timekitApp,
      inputTimestampFormat: "U",
      outputTimestampFormat: "U"
    });
    // Timestamps coming and going to timekit sdk must be unicode

    timekit
      .auth({
        email: timekitEmail,
        password: timekitPassword
      })
      .then(() => console.log("authenticated"))
      .then(() =>
        timekit.createCalendar({
          name: "Test-Calendar-5",
          description: "testing this calendar"
        })
      )
      //You can create a new calendar for the current user by calling this endpoint.
      // If the user/resource has a connected Google account, then we will save the new calendar to Google.
      // To get the calendar synced you need to use the [PUT] /calendars/:id endpoint to set the provider_sync flag to true.
      .then(res => console.log("created calendar: ", res.data));
  }
>>>>>>> Render button or Appointment Calendar views

  render() {
    return (
      <Well>
        <Form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="this is the the field group"
            placeholder="First Name"
            onChange={this.props.handleUpdateEmail}
          />
          <Button onClick={this.handleSubmitForm}>Submit</Button>
        </Form>
      </Well>
    );
  }
}

export default ShopDashboardCalendarForm;
