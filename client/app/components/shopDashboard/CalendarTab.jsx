import React, { Component } from "react";
import AppointmentCalendar from "../../components/shopDashboard/AppointmentCalendar";
import ShopDashboardSettings from "../../components/shopDashboard/ShopDashboardSettings";
import { Row, Col, Modal, Button, Jumbotron } from "react-bootstrap";

const l = console.log;

class CalendarTab extends Component {
  constructor(props) {
    super(props);
    l("CalendarTab: these are the props", this.props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            {!!this.props.hasCalendar ? (
              <AppointmentCalendar {...this.props} />
            ) : (
              <Jumbotron>
                <p>
                  No calendar has been created. Navigate to the Settings Tab to
                  create a calendar.
                </p>
              </Jumbotron>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CalendarTab;
