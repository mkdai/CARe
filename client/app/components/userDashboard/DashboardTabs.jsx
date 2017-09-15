import React from "react";
import UserHistory from "../userHistory/UserHistory.jsx";
import Reminder from "./Reminder.jsx";
import UpdateCar from "./UpdateCar.jsx";
import { Tabs, Tab, Row, Col, Nav, NavItem } from "react-bootstrap";

export default class DashboardTabs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Tab.Container id="dashboard-tabs" defaultActiveKey="1">
        <Row className="clearfix">
          <Col xs={12} sm={12} md={12} lg={12}>
            <Nav bsStyle="tabs" justified>
              <NavItem eventKey="1">History</NavItem>
              <NavItem eventKey="2">Reminders</NavItem>
              <NavItem eventKey="3">Update Car</NavItem>
            </Nav>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey="1">
                <UserHistory currentCar={this.props.currentCarId} />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                Select your car above for service reminders.
                <hr />
                <Reminder currentCar={this.props.currentCarId} />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                Select your car to update.
                <hr />
                <UpdateCar
                  getCars={this.props.getCars}
                  currentCar={this.props.currentCarId}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
