import React from "react";
import UserHistory from "../userHistory/UserHistory.jsx";
import Reminder from "./Reminder.jsx";

export default class DashboardTabs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-lg-12" id="dashboard-tabs">
        <ul className="nav nav-tabs nav-justified" role="tablist">
          <li id="history-tab" role="presentation" className="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
              History
            </a>
          </li>
          <li id="reminders-tab" role="presentation">
            <a
              href="#profile"
              aria-controls="profile"
              role="tab"
              data-toggle="tab"
            >
              Reminders
            </a>
          </li>
          <li id="appointments-tab" role="presentation">
            <a
              href="#messages"
              aria-controls="messages"
              role="tab"
              data-toggle="tab"
            >
              Appointments
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">
            <UserHistory />
          </div>
          <div role="tabpanel" className="tab-pane" id="profile">
            Select your car for service reminders.
            <hr />
            <Reminder currentCar={this.props.currentCarId} />
          </div>
          <div role="tabpanel" className="tab-pane" id="messages">
            Select your car to see appointments.
          </div>
        </div>
      </div>
    );
  }
}
