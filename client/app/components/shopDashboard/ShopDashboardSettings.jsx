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
  Col
} from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import FieldGroup from "./FieldGroup.jsx";
import HoursOfDay from "../../components/shopDashboard/HoursOfDay.jsx";

const l = console.log;

class ShopDashboardSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // Do not delete, needed for FieldGroup Component
  }

  componentDidMount() {
    l("Settings mounted", this.props);
  }

  render() {
    return (
      <div>
        <Form>
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
          {/* <FieldGroup
            id="formControlsText"
            type="text"
            label="Email"
            placeholder="Email"
            value={this.props.shopEmail}
            onChange={e => this.props.handleAttributeChange(e, "shopEmail")}
          > 
            {this.state.value}
          </FieldGroup>*/}
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

          <FormGroup>
            <Col componentClass={ControlLabel} xs={3}>
              Days of Operation
            </Col>
            <Col xs={9}>
              <Well>
                {this.props.week.map((day, i) => (
                  <Checkbox
                    inline
                    key={i}
                    value={day}
                    onChange={e => this.props.handleDaysOfServiceChange(e)}
                  >
                    {day}
                  </Checkbox>
                ))}
              </Well>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} xs={3}>
              Hours Of Operation
            </Col>
            <Col xs={9}>
              {this.props.daysOfService.map(day => <HoursOfDay day={day} />)}
            </Col>
          </FormGroup>
          <Button onClick={this.props.handleBuildCalendar}>Save</Button>
        </Form>
      </div>
    );
  }
}

export default ShopDashboardSettings;
