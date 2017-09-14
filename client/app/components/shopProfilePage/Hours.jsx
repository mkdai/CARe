import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class Hours extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <Row>Hours</Row>

        {this.props.daysOfService.map(day => {
          return (
            <Row>
              {day.value}: {day.start} - {day.end}
            </Row>
          );
        })}
      </Grid>
    );
  }
}

export default Hours;
