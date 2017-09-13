import React from "react";
import axios from "axios";
import ReminderEntry from "./ReminderEntry.jsx";
import { Accordion, Panel } from "react-bootstrap";

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: []
    };
  }

  componentWillReceiveProps(nextProps) {
    axios
      .get(`/api/userProfile/getUserReminders/${nextProps.currentCar}`)
      .then(data => {
        this.setState({ reminders: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Accordion>
          {this.state.reminders.map((reminder, i) => (
            <ReminderEntry reminder={reminder} key={i} />
          ))}
        </Accordion>
      </div>
    );
  }
}
