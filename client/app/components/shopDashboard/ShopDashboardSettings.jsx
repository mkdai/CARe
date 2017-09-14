import React, { Component } from "react";
import {
  Button,
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Well,
  ToggleButtonGroup,
  ToggleButton,
  Checkbox,
  Col,
  Row,
  Grid
} from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import FieldGroup from "./FieldGroup.jsx";

const l = console.log;

class ShopDashboardSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    l("Settings mounted", this.props);
  }

  render() {
    return (
      <Form>
        <Grid>
          <Row>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="First Name"
              placeholder="First Name"
              value={this.props.firstName}
              onChange={e => this.props.handleAttributeChange(e, "firstName")}
            >
              {this.state.value}
            </FieldGroup>
          </Row>

          <Row>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              value={this.props.lastName}
              onChange={e => this.props.handleAttributeChange(e, "lastName")}
            >
              {this.state.value}
            </FieldGroup>
          </Row>

          <Row>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Shop Name"
              placeholder="Shop Name"
              value={this.props.shopName}
              onChange={e => this.props.handleAttributeChange(e, "shopName")}
            >
              {this.state.value}
            </FieldGroup>
          </Row>

          <Row>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Shop Description"
              placeholder="Shop Description"
              onChange={e =>
                this.props.handleAttributeChange(e, "shopDescription")}
            >
              {this.state.value}
            </FieldGroup>
          </Row>

          <Button onClick={this.props.handleBuildCalendar}>Save</Button>
        </Grid>
      </Form>
    );
  }
}

export default ShopDashboardSettings;
