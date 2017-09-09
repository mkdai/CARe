import React from "react";
import UserHistory from "../userHistory/UserHistory.jsx";
import Reminder from "./Reminder.jsx";
import UpdateCar from "./UpdateCar.jsx";
import { Tabs, Tab } from "react-bootstrap";

export default class DashboardTabs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Tabs defaultActiveKey={1} id="dashboard-tabs" classID="dashboard-tabs">
        <Tab eventKey={1} title="History" classID="history-tab">
          <UserHistory currentCar={this.props.currentCarId} />
        </Tab>
        <Tab eventKey={2} title="Reminders" classID="reminders-tab">
          Select your car for service reminders.
          <hr />
          <Reminder currentCar={this.props.currentCarId} />
        </Tab>
        <Tab eventKey={3} title="Appointments" classID="appointments-tab">
          Select your car to see appointments.
        </Tab>
        <Tab eventKey={4} title="Update Car" classID="carUpdate-tab">
          Select your car to update.
          <hr />
          <UpdateCar currentCar={this.props.currentCarId} />
        </Tab>
      </Tabs>
    );
  }
}
