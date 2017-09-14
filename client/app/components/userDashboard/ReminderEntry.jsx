import React from "react";
import axios from "axios";
import { Accordion, Panel } from "react-bootstrap";

export default class ReminderEntry extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    axios
      .delete(`/api/userProfile/deleteReminder/${this.props.reminder.id}`)
      .then(data => {
        //console.log("ONDELETE DATA: ", data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Panel header="Service Reminder">
          <span>{this.props.reminder.service}</span>
          <button className="btn-success pull-right" onClick={this.onDelete}>
            Completed
          </button>
          <button
            className="btn-danger pull-right"
            style={{ marginRight: "10px" }}
            onClick={this.onDelete}
          >
            Delete
          </button>
        </Panel>
      </div>
    );
  }
}
