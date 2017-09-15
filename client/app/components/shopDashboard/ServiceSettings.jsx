import React, { Component } from "react";
import { FormGroup, Checkbox, Button } from "react-bootstrap";
import axios from "axios";

export default class ServiceSettings extends Component {
  constructor() {
    super();
    this.state = {
      services: [
        "Tires",
        "Batteries",
        "AC Services",
        "Transmission",
        "Steering",
        "Suspension",
        "Radiator",
        "Smog Check",
        "Detailing",
        "Cleaning",
        "Custom"
      ]
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle(e) {
    this.setState({ [e.currentTarget.dataset.tag]: e.currentTarget.checked });
  }

  handleSubmit() {
    const services = [];
    for (let item in this.state) {
      if (this.state[item] === true) {
        services.push(item);
      }
    }
    console.log(services);

    axios
      .put(`/api/shopdashboard/setServices/${this.props.shopId}/${services}`)
      .then(res => {
        alert("Successfully set services!");
        console.log(res);
      })
      .catch(err => {
        alert("There was a problem setting services!");
        console.log(`Error editing services! ${err}`);
      });
  }

  render() {
    return (
      <form>
        <FormGroup>
          {this.state.services.map((service, i) => {
            return (
              <Checkbox
                inline
                onClick={this.handleToggle}
                data-tag={service}
                key={i}
              >
                {service}
              </Checkbox>
            );
          })}
          <Button onClick={this.handleSubmit}>Save</Button>
        </FormGroup>
      </form>
    );
  }
}
