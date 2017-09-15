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
      week: ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"],
      daysOfService: [],
      currentAppointments: []
    };

    this.handleHoursOfOpChange = this.handleHoursOfOpChange.bind(this);
    this.handleAttributeChange = this.handleAttributeChange.bind(this);
    this.handleDaysOfServiceChange = this.handleDaysOfServiceChange.bind(this);
    this.handleSetHours = this.handleSetHours.bind(this);
    this.handleBuildCalendar = this.handleBuildCalendar.bind(this);
    this.handleGetCarInfo = this.handleGetCarInfo.bind(this);
    this.grabCalendarInfo = this.grabCalendarInfo.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    l(
      "shop dashboard mounted & requesting calId with recieved PROPS:",
      nextprops
    );
    if (nextprops.currentUser.id) {
      this.setState(
        {
          shopEmail: nextprops.currentUser.email,
          shopId: nextprops.currentUser.shopId,
          shopName: this.props.currentUser.shop.name
        },
        () => this.grabCalendarInfo(nextprops)
      );
    }
  }
  componentDidMount() {
    l("shop dashboard mounted & requesting calId PROPS:", this.props);
    if (this.props.currentUser.id) {
      this.setState(
        {
          shopEmail: this.props.currentUser.email,
          shopId: this.props.currentUser.shopId,
          shopName: this.props.currentUser.shop.name
        },
        () => this.grabCalendarInfo(this.props)
      );
    }
  }
  grabCalendarInfo(props) {
    axios
      .get(`api/shopdashboard/getCalId`, {
        params: { shopId: props.currentUser.shopId }
      })
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

  handleGetCarInfo(appointments) {
    this.setState({ currentAppointments: appointments }, () => {
      console.log("WIOEGHWOIHGWIOEHGIWGH", this.state);
    });
  }

  handleHoursOfOpChange(day, start, end) {
    let { daysOfService } = this.state;

    for (let i = 0; i < daysOfService.length; i++) {
      if (day === daysOfService[i].value) {
        daysOfService[i].start = start;
        daysOfService[i].end = end;
      }
    }

    this.setState({ daysOfService: daysOfService });
  }

  handleSetHours() {
    l("handling setting hours");
    axios
      .put("api/shopdashboard/updateHours", {
        id: this.props.currentUser.shopId,
        daysOfService: this.state.daysOfService
      })
      .then(() => alert("hours have been set"))
      .catch(err => alert("could not set hours"));
  }

  handleAttributeChange(e, attribute) {
    e.preventDefault();

    this.setState({ [attribute]: e.target.value });
  }

  handleDaysOfServiceChange(e) {
    const day = { start: 32400, end: 64800 }; //basic 9 to 6 work day
    day.value = e.target.value;

    let dOS = this.state.daysOfService;

    if (dOS.some((x, i) => day.value === x)) {
      dOS.splice(dOS.indexOf(day), 1);
    } else {
      let { week } = this.state;
      let idx = week.indexOf(day);

      for (let i = 0; i < dOS.length; i++) {
        let curr = dOS[i];
        if (week.indexOf(curr) > idx) {
          dOS.splice(i, 0, day);
          console.log("after splice", dOS);
          this.setState({ daysOfService: dOS }, () =>
            l("this is the state of daysOfService, ", this.state.daysOfService)
          );
          return;
        }
      }
      this.setState({ daysOfService: dOS.push(day) }, () =>
        l("this is the state of daysOfService, ", this.state.daysOfService)
      );
    }
    this.setState({ daysOfService: dOS }, () =>
      l("this is the state of daysOfService, ", this.state.daysOfService)
    );
  }

  handleBuildCalendar() {
    l("user requests to create calendar. STATE:", this.state);
    let {
      firstName,
      lastName,
      shopId,
      shopName,
      shopDescription,
      calId
    } = this.state;

    axios
      .post(`api/shopdashboard/createCalendar`, {
        id: shopId,
        firstName: firstName,
        lastName: lastName,
        shopName: shopName,
        shopDescription: shopDescription,
        shopEmail: this.props.currentUser.email,
        calId: calId
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
        <Grid fluid={true} className="bump">
          <Row>
            <Col>
              <h1>{this.state.shopName} Dashboard</h1>
            </Col>
          </Row>
          <Tabs defaultActiveKey={1} id="shop-dashboard-tab">
            <Tab eventKey={1} title="Calendar">
              <CalendarTab
                {...this.props}
                {...this.state}
                handleGetCarInfo={this.handleGetCarInfo}
              />
            </Tab>

            <Tab eventKey={2} title="Maintenance Jobs">
              <MaintenanceJobs
                shopId={this.props.currentUser.shopId}
                currentAppointments={this.state.currentAppointments}
                currentUser={this.props.currentUser}
              />
            </Tab>
            <Tab eventKey={3} title="Settings">
              <SettingsTab
                {...this.props}
                {...this.state}
                handleDaysOfServiceChange={this.handleDaysOfServiceChange}
                handleAttributeChange={this.handleAttributeChange}
                handleBuildCalendar={this.handleBuildCalendar}
                handleHoursOfOpChange={this.handleHoursOfOpChange}
                handleSetHours={this.handleSetHours}
              />
            </Tab>
          </Tabs>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShopDashboard);
