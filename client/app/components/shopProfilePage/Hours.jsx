import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Day from "../../components/shopProfilePage/Day.jsx";

class Hours extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    for (let day of this.props.daysOfService) {
      let { start, end, value } = day;
      console.log("this is the start of day", value, start);
    }
  }

  componentWillReceiveProps(nextProps) {
    for (let day of this.props.daysOfService) {
      let { start, end, value } = day;
      console.log("this is the start of day", value, start);
    }
  }

  render() {
    return (
      <Grid>
        <Row>Hours</Row>

        {this.props.daysOfService.map(day => {
          return (
            <Row>
              <Day value={day.value} start={day.start} end={day.end} />
            </Row>
          );
        })}
      </Grid>
    );
  }
}

export default Hours;
