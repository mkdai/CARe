import React, { Component } from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import { Form, Grid, Row, Col, Well, Checkbox, Button } from "react-bootstrap";
import HoursOfDay from "../../components/shopDashboard/HoursOfDay.jsx";

const l = console.log;

class HoursSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleShowHoursClick = this.handleShowHoursClick.bind(this);
  }

  componentDidMount() {
    l("Hours Settings. PROPS: ", this.props);
  }

  handleShowHoursClick() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Form>
        <Grid>
          <Row>
            <FormGroup>
              <Col componentClass={ControlLabel} xs={3}>
                Days of Operation
              </Col>
              <br />
              <Col xs={7}>
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
              <br />
              <Col xs={2}>
                <Button onClick={this.handleShowHoursClick}>Set Days</Button>
              </Col>
            </FormGroup>
          </Row>
          {this.state.show ? (
            <Row>
              <FormGroup>
                <Col componentClass={ControlLabel} xs={3}>
                  Hours Of Operation
                </Col>
                <Col xs={9}>
                  {this.props.daysOfService.map((day, i) => (
                    <HoursOfDay
                      key={i}
                      day={day.value}
                      handleHoursOfOpChange={this.props.handleHoursOfOpChange}
                    />
                  ))}
                </Col>
                <Button onClick={this.props.handleSetHours}>Set Hours</Button>
              </FormGroup>
            </Row>
          ) : null}
        </Grid>
      </Form>
    );
  }
}

export default HoursSettings;
