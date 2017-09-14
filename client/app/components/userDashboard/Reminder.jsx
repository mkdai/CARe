import React from "react";
import axios from "axios";
import ReminderEntry from "./ReminderEntry.jsx";
import { Accordion, Panel } from "react-bootstrap";

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: [],
      currentCarMake: null,
      currentCarYear: null,
      currentCarModel: null
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
    axios
      .get(`/api/userProfile/getSingleCar/${nextProps.currentCar}`)
      .then(data => {
        console.log("CAR DATA: ", data.data[0]);
        this.setState({
          currentCarYear: data.data[0].year,
          currentCarMake: data.data[0].make,
          currentCarModel: data.data[0].model
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("PROPS IN REMINDER: ", this.props);
    return (
      <div>
        <div id="car-selected">
          Current Car Selected: {this.state.currentCarYear}{" "}
          {this.state.currentCarMake} {this.state.currentCarModel}
        </div>
        <Accordion>
          {this.state.reminders.map((reminder, i) => (
            <ReminderEntry reminder={reminder} key={i} />
          ))}
        </Accordion>
      </div>
    );
  }
}
