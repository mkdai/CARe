import React, { Component } from "react";
import AppointmentCalendar from "../../components/shopDashboard/AppointmentCalendar.jsx";
import NavigationBar from "../../containers/navBar/NavigationBar";
import ShopDashboardSettings from "../../components/shopDashboard/ShopDashboardSettings.jsx";
import axios from "axios";
// import timekit from "timekit-sdk";
// import {
//   timekitApp,
//   timekitEmail,
//   timekitPassword
// } from "../../../../env/config";
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Modal,
  Button,
  Tab,
  Tabs
} from "react-bootstrap";
import MaintenanceJobs from "./MaintenanceJobs.jsx";

class ShopDashboard extends Component {
  /*
 * should have a button to configure a booking calendar
 *   should have the ability to set hours, and days that the shop is open
 *   should have a button that creates the calendar
 * when the calendar is created, should render a full-calendar that displays all the bookings
 */

  constructor(props) {
    super(props);
    this.state = {
      showCalendarModal: false,
      createCal: false,
      calendar: false,
      calendar_id: ""
    };
    this.handleBuildCalendar = this.handleBuildCalendar.bind(this);
  }

  handleBuildCalendar() {
    console.log("user request to create calendar");
    axios
      .post(
        `api/shopdashboard/createCalendar/:id`,
        {
          // all the dependencies for a calendar
        }
      )
      //You can create a new calendar for the current user by calling this endpoint.
      // If the user/resource has a connected Google account, then we will save the new calendar to Google.
      // To get the calendar synced you need to use the [PUT] /calendars/:id endpoint to set the provider_sync flag to true.
      .then(
        res => console.log("receiving response from axios createCalendar", res),
        this.setState({ calendar: true, showCalendarModal: false })
      )
      .catch(err => console.log("could not create cal", err));
  }

  render() {
    return (
      <div className="container">
        <NavigationBar />
        <Grid fluid={true}>
          <Row>
            <h1 />{" "}
          </Row>
          <Row>
            <h1 />{" "}
          </Row>
          <Row>
            <h1 />{" "}
          </Row>
          <Row>
            <Col>
              <h1>I am the shopdashboard</h1>
            </Col>
          </Row>
          <Tabs defaultActiveKey={1} id="shop-dashboard-tab">
            <Tab eventKey={1} title="Calander">
              <Row>
                <Modal
                  show={this.state.showCalendarModal}
                  onHide={() =>
                    this.setState({
                      showCalendarModal: false
                    })}
                >
                  <Modal.Header closeButton>
                    <h2>Settings</h2>
                  </Modal.Header>
                  <Modal.Body>
                    <ShopDashboardSettings
                      handleCalCreation={this.handleCalCreation}
                      handleBuildCalendar={this.handleBuildCalendar}
                    />
                  </Modal.Body>
                </Modal>
              </Row>

              <Row>
                <Col>
                  {!!this.state.calendar ? (
                    <AppointmentCalendar {...this.props} />
                  ) : (
                    <Button
                      onClick={() => this.setState({ showCalendarModal: true })}
                    >
                      Create Booking Calendar
                    </Button>
                  )}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey={2} title="Maintenance Jobs">
              <MaintenanceJobs />
            </Tab>
          </Tabs>
        </Grid>
      </div>
    );
  }
}

export default ShopDashboard;
