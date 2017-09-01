import React, { Component } from "react";
import { Row, Col, Button, Collapse, Well } from "react-bootstrap";

export default class UserHistoryEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        {/* <Button onClick={() => this.setState({ open: !this.state.open })}>
          {" "}
          Here{" "}
        </Button> */}
        <h3 onClick={() => this.setState({ open: !this.state.open })}>
          Maintenance on xx/xx/xx
        </h3>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Col lg={4}>HERE</Col>
              <Col lg={4}>WE</Col>
              <Col lg={4}>Go</Col>
            </Well>
          </div>
        </Collapse>
      </Row>
    );
  }
}
