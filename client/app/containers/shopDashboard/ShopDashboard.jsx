import React, { Component } from "react";
import AppointmentCalendar from "../../components/shopDashboard/AppointmentCalendar.jsx";
import NavigationBar from "../../containers/navBar/NavigationBar";
import { Jumbotron, Grid, Row, Col, Modal, Button } from "react-bootstrap";

class ShopDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    console.log("click is heard for modal");
    this.setState({ show: true });
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
          <Row>
            <Button onClick={this.handleOpenModal}>Click</Button>
          </Row>
          <Row>
            <Modal
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <h1>This is the modal body</h1>
              </Modal.Body>
            </Modal>
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
