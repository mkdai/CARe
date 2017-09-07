import React, { Component } from "react";
import AppointmentCalendar from "../../components/shopDashboard/AppointmentCalendar.jsx";
import NavigationBar from "../../containers/navBar/NavigationBar";
import ShopDashboardSettings from "../../components/shopDashboard/ShopDashboardSettings.jsx";
<<<<<<< HEAD
<<<<<<< HEAD
import axios from "axios";
=======
import timekit from "timekit-sdk";
import {
  timekitApp,
  timekitEmail,
  timekitPassword
} from "../../../../env/config";
>>>>>>> Clean ShopDashboardSettings
=======
import axios from "axios";
<<<<<<< HEAD
// import timekit from "timekit-sdk";
// import {
//   timekitApp,
//   timekitEmail,
//   timekitPassword
// } from "../../../../env/config";
>>>>>>> Render timekit logic on server side
=======
>>>>>>> Clean front end dashboard components of timekit
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
<<<<<<< HEAD
<<<<<<< HEAD
      showCalModal: false,
      createCal: false,
      calendar: false,
      userId: 1,
      shopId: -1,
      calId: ""
    };
    this.handleBuildCalendar = this.handleBuildCalendar.bind(this);
  }

  componentDidMount() {
    console.log("dash has been mounted, requesting shopId");
    axios
      .get(`api/shopdashboard/getShopId`, {
        params: { userId: this.state.userId }
      })
      .then(res => {
        this.setState({ shopId: res.data.shopId }, () =>
          console.log(
            "shopId has been set, calendar has been created: ",
            !!this.props.calendar
          )
        );
      })
      .catch(err => console.log("could not get shopId", err));
  }

  handleBuildCalendar() {
    console.log("user requests to create calendar");
    axios
      .post(`api/shopdashboard/createCalendar`, {
        id: this.state.shopId
      })
      //You can create a new calendar for the current user by calling this endpoint.
      // If the user/resource has a connected Google account, then we will save the new calendar to Google.
      // To get the calendar synced you need to use the [PUT] /calendars/:id endpoint to set the provider_sync flag to true.
      .then(cal => {
        this.setState(
          {
            calendar: true,
            showCalModal: false,
            calId: cal.data.calId
          },
          () => console.log("received calId from back-end, and updated state")
        );
      })
      .then(res => {
        console.log(
          "received response from axios createCalendar, stored id in database and created timekit calendar"
        );
      })
      .catch(err => console.log("could not create cal", err));
=======
      show: false,
=======
      showCalendarModal: false,
>>>>>>> Render timekit logic on server side
      createCal: false,
      calendar: false,
      userId: 1,
      shopId: -1
    };
    this.handleBuildCalendar = this.handleBuildCalendar.bind(this);
  }

<<<<<<< HEAD
<<<<<<< HEAD
  handleCalCreation(e) {
    console.log("cal creation button works");
    this.setState({ calendar: true });
>>>>>>> Render button or Appointment Calendar views
=======
=======
  componentDidMount() {
    console.log("dash has been mounted", this.state);
    axios
      .get(`api/shopdashboard/getShopId`, {
        params: { userId: this.state.userId }
      })
      .then(res => {
        console.log("received shop from database id", res);
        this.setState({ shopId: res.data.shopId }, () =>
          console.log("setting shopId", this.state)
        );
      })
      .catch(err => console.log("could not get shopId", err));
  }

>>>>>>> Allow, and assign shopId's to Users
  handleBuildCalendar() {
    console.log("user requests to create calendar", this.state);
    axios
      .post(`api/shopdashboard/createCalendar`, {
        shopId: this.state.shopId
      })
      //You can create a new calendar for the current user by calling this endpoint.
      // If the user/resource has a connected Google account, then we will save the new calendar to Google.
      // To get the calendar synced you need to use the [PUT] /calendars/:id endpoint to set the provider_sync flag to true.
<<<<<<< HEAD
<<<<<<< HEAD
      .then(res => {
        this.setState({ calendar_id: res.data.id, calendar: true }, () =>
          console.log("created calendar: ", res.data.id, this.state)
        );
      });
>>>>>>> Clean ShopDashboardSettings
=======
      .then(
        res => console.log("receiving response from axios createCalendar", res),
        this.setState({ calendar: true, showCalendarModal: false })
      )
=======
      .then(res => {
        console.log(
          "receiving response from axios createCalendar, stored id in database and created timekit calendar"
        );
      })
      .then(() => this.setState({ calendar: true, showCalendarModal: false }))
>>>>>>> Allow, and assign shopId's to Users
      .catch(err => console.log("could not create cal", err));
>>>>>>> Render timekit logic on server side
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
<<<<<<< HEAD
<<<<<<< HEAD
              <Row>
                <Modal
                  show={this.state.showCalModal}
                  onHide={() =>
                    this.setState({
                      showCalModal: false
=======
              <Row />
=======
>>>>>>> Clean ShopDashboardSettings
              <Row>
                <Modal
                  show={this.state.showCalendarModal}
                  onHide={() =>
                    this.setState({
<<<<<<< HEAD
                      show: false
>>>>>>> Render button or Appointment Calendar views
=======
                      showCalendarModal: false
>>>>>>> Render timekit logic on server side
                    })}
                >
                  <Modal.Header closeButton>
                    <h2>Settings</h2>
                  </Modal.Header>
                  <Modal.Body>
                    <ShopDashboardSettings
                      handleCalCreation={this.handleCalCreation}
<<<<<<< HEAD
<<<<<<< HEAD
                      handleBuildCalendar={this.handleBuildCalendar}
                    />
                  </Modal.Body>
=======
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleCalCreation}>Click</Button>
                  </Modal.Footer>
>>>>>>> Render button or Appointment Calendar views
=======
                      handleBuildCalendar={this.handleBuildCalendar}
                    />
                  </Modal.Body>
>>>>>>> Clean ShopDashboardSettings
                </Modal>
              </Row>

              <Row>
                <Col>
                  {!!this.state.calendar ? (
<<<<<<< HEAD
<<<<<<< HEAD
                    <AppointmentCalendar {...this.props} {...this.state} />
                  ) : (
                    <Button
                      onClick={() => this.setState({ showCalModal: true })}
                    >
=======
                    <AppointmentCalendar />
=======
                    <AppointmentCalendar {...this.props} />
>>>>>>> Clean ShopDashboardSettings
                  ) : (
<<<<<<< HEAD
                    <Button onClick={() => this.setState({ show: true })}>
>>>>>>> Render button or Appointment Calendar views
=======
                    <Button
                      onClick={() => this.setState({ showCalendarModal: true })}
                    >
>>>>>>> Render timekit logic on server side
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
