import React, { Component } from "react";
import AppointmentCalendar from "../../components/shopDashboard/AppointmentCalendar.jsx";
import NavigationBar from "../../containers/navBar/NavigationBar";
import ShopDashboardSettings from "../../components/shopDashboard/ShopDashboardSettings.jsx";
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
      show: false,
      createCal: false,
      calendar: false
    };
    this.handleCalCreation = this.handleCalCreation.bind(this);
  }

  handleCalCreation(e) {
    console.log("cal creation button works");
    this.setState({ calendar: true });
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
              <Row />
              <Row>
                <Modal
                  show={this.state.show}
                  onHide={() =>
                    this.setState({
                      show: false
                    })}
                >
                  <Modal.Header closeButton>
                    <h2>Settings</h2>
                  </Modal.Header>
                  <Modal.Body>
                    <ShopDashboardSettings
                      handleCalCreation={this.handleCalCreation}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleCalCreation}>Click</Button>
                  </Modal.Footer>
                </Modal>
              </Row>

              <Row>
                <Col>
                  {!!this.state.calendar ? (
                    <AppointmentCalendar />
                  ) : (
                    <Button onClick={() => this.setState({ show: true })}>
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
