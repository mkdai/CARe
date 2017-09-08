import React from "react";

export default class ReminderEntry extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("PROPS IN REMINDER ENTRY:", this.props);
    return (
      <div>
        <div>Service: {this.props.reminder.service}</div>
      </div>
    );
  }
}
