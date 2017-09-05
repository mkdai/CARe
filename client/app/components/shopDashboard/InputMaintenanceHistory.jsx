import React, { Component } from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Col,
  Button,
  Well,
  Row
} from "react-bootstrap";

export default class InputMaintenanceHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <Well>
        <Row>
          <Form>
            <Col lg={3} lgOffset={1}>
              <FormGroup>
                <ControlLabel>Service</ControlLabel>
                {/* Maybe change service to dropdown selection */}
                <FormControl
                  id="formServiceName"
                  type="text"
                  placeholder="Enter name of service"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col lg={6} lgOffset={1} sm={12}>
              <FormGroup>
                <ControlLabel>Service Description</ControlLabel>
                <FormControl
                  id="formServiceDescription"
                  type="text"
                  placeholder="Enter description of service"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col lg={10} lgOffset={1} sm={12}>
              <FormGroup>
                <ControlLabel>Additional Notes</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  id="formAdditionalNotes"
                  type="text"
                  placeholder="Enter any additional notes here"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col lg={10} lgOffset={1} sm={12}>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Col>
          </Form>
        </Row>
      </Well>
    );
  }
}
