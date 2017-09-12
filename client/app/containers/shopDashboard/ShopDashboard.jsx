import React, { Component } from "react";
import { connect } from "react-redux";
import CalendarTab from "../../components/shopDashboard/CalendarTab";
import SettingsTab from "../../components/shopDashboard/SettingsTab";
import NavigationBar from "../../containers/navBar/NavigationBar";
import axios from "axios";
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
import MaintenanceJobs from "../../components/shopDashboard/MaintenanceJobs.jsx";

function l(...props) {
  console.log(...props);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  };
}

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
      firstName: "",
      lastName: "",
      showCalModal: false,
      createCal: false,
      hasCalendar: false,
      userId: 1,
      shopId: -1,
      calId: "",
      shopName: "",
      shopEmail: "",
      shopDescription: "",
      hoursOfOperation: {},
      week: ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"],
      daysOfService: []
    };
    this.handleAttributeChange = this.handleAttributeChange.bind(this);
    this.handleDaysOfServiceChange = this.handleDaysOfServiceChange.bind(this);
    this.handleBuildCalendar = this.handleBuildCalendar.bind(this);
  }

  componentDidMount() {
    l("shop dashboard mounted & requesting shopId, PROPS:", this.props);

    this.setState({
      shopEmail: this.props.currentUser.email,
      shopId: this.props.currentUser.shopId
    });

    // axios
    //   .get(`api/shopdashboard/getShopId`, {
    //     params: { userId: this.props.currentUser.id }
    //   })
    //   .then(res => {
    //     l("getShopId response received", res);
    //     let { shopId } = res.data;
    //     this.setState({ shopId });
    //   })
    //   .then(() =>
    axios
      .get(`api/shopdashboard/getCalId`, {
        params: { shopId: this.state.shopId }
      })
      // )
      .then(res => {
        l("getCalId responded", res);
        this.setState({ calId: res.data.calId }, () =>
          l("calendarId has been set", !!this.state.calId)
        );
      })
      .then(() => {
        if (!!this.state.calId) {
          this.setState({ hasCalendar: true });
        }
      })
      .catch(err => l("could not get shopId"));
  }

  handleAttributeChange(e, attribute) {
    e.preventDefault();
    l(this.state[attribute], e.target.value);
    this.setState({ [attribute]: e.target.value });
  }

  handleDaysOfServiceChange(e) {
    let day = e.target.value;
    let dOS = this.state.daysOfService;

    if (dOS.some((x, i) => day === x)) {
      dOS.splice(dOS.indexOf(day), 1);
    } else {
      let { week } = this.state;
      let idx = week.indexOf(day);

      for (let i = 0; i < dOS.length; i++) {
        let curr = dOS[i];
        if (week.indexOf(curr) > idx) {
          dOS.splice(i, 0, day);
          console.log("after splice", dOS);
          this.setState({ daysOfService: dOS });
          return;
        }
      }
      this.setState({ daysOfService: dOS.push(day) });
    }
    this.setState({ daysOfService: dOS }, () =>
      l("these are the days of service", this.state.daysOfService)
    );
  }

  handleBuildCalendar() {
    l("user requests to create calendar");
    let {
      firstName,
      lastName,
      shopId,
      shopName,
      shopDescription,
      shopEmail
    } = this.state;
    l("the email is a ", typeof email);

    axios
      .post(`api/shopdashboard/createCalendar`, {
        id: shopId,
        firstName: firstName,
        lastName: lastName,
        shopName: shopName,
        shopDescription: shopDescription,
        shopEmail: shopEmail,
        hoursOfOperation: { days: [] }
      })
      //You can create a new calendar for the current user by calling this endpoint.
      // If the user/resource has a connected Google account, then we will save the new calendar to Google.
      // To get the calendar synced you need to use the [PUT] /calendars/:id endpoint to set the provider_sync flag to true.
      .then(res => {
        this.setState({
          hasCalendar: true,
          showCalModal: false,
          calId: res.data.calId
        });
      })
      .then(() => l("created tk calendar & stored id in db"))
      .catch(err => l("could not create cal", err.data.errors));
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
              <CalendarTab {...this.props} {...this.state} />
            </Tab>

            <Tab eventKey={2} title="Maintenance Jobs">
              <MaintenanceJobs />
            </Tab>
            <Tab eventKey={3} title="Settings">
              <SettingsTab
                {...this.props}
                {...this.state}
                handleDaysOfServiceChange={this.handleDaysOfServiceChange}
                handleAttributeChange={this.handleAttributeChange}
                handleBuildCalendar={this.handleBuildCalendar}
              />
            </Tab>
          </Tabs>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShopDashboard);
