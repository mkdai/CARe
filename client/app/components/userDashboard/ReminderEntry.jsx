import React from "react";
import axios from "axios";

export default class ReminderEntry extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    axios
      .delete(`/api/userProfile/deleteReminder/${this.props.reminder.id}`)
      .then(data => {
        console.log("ONDELETE DATA: ", data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("PROPS IN REMINDER ENTRY:", this.props);
    return (
      <div>
        <span>Service: {this.props.reminder.service}</span>
        <button onClick={this.onDelete}>Delete</button>
        <button onClick={this.onDelete}>Completed</button>
      </div>
    );
  }
}
