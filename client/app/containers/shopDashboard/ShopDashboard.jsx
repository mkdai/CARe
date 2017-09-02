import React, { Component } from "react";
import AppointmentCalendar from "../../components/shopDashboard/AppointmentCalendar.jsx";
import NavigationBar from "../../containers/navBar/NavigationBar";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

class ShopDashboard extends Component {
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

          <Row>
            <Col>
              {"   "}
              <AppointmentCalendar />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ShopDashboard;
