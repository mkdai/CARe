import React from "react";
import axios from "axios";
import ReminderEntry from "./ReminderEntry.jsx";
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

export default class UpdateCar extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.updateMileage = this.updateMileage.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("COMPONENT RECIEVED PROPS", nextProps.currentCar);
  }

  handleOnChange(event) {
    console.log("handleOnChange is hitting");
    let temp = event.target.name;
    this.setState({
      [temp]: event.target.value
    });
  }

  updateMileage() {
    axios
      .put(
        `/api/userProfile/updateMileage/${this.props.currentCar}`,
        this.state
      )
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onDelete() {
    axios
      .delete(`/api/userProfile/deleteCar/${this.props.currentCar}`)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    //console.log("UPDATE CAR PROPS:", this.props.currentCar);
    return (
      <div>
        <Well>
          <div className="update-mileage">
            <label>Mileage</label>
            <Form>
              <input
                name="mileage"
                onChange={this.handleOnChange}
                className="update-mileage-input"
                type="text"
                placeholder="Enter the mileage of your car"
              />
              <button onClick={this.updateMileage}>Update</button>
            </Form>
          </div>
          <hr />
          <div className="delete-car-button">
            <button className="btn-danger" onClick={this.onDelete}>
              Delete Car
            </button>
          </div>
        </Well>
      </div>
    );
  }
}
