import React from "react";
import axios from "axios";
import ReminderEntry from "./ReminderEntry.jsx";

export default class DashboardTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("COMPONENT RECIEVED PROPS", nextProps.currentCar);
    axios
      .get(`/api/userProfile/getUserReminders/${nextProps.currentCar}`)
      .then(data => {
        console.log("REMINDER RESPONSE:", data);
        this.setState({
          reminders: data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("REMINDER PROPS:", this.props.currentCar);
    return (
      <div>
        {this.state.reminders.map((reminder, i) => (
          <ReminderEntry reminder={reminder} key={i} />
        ))}
      </div>
    );
  }
}
