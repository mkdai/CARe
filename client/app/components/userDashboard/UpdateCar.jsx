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

    this.state = {
      currentCarMake: null,
      currentCarYear: null,
      currentCarModel: null
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.updateMileage = this.updateMileage.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.getCarInfo = this.getCarInfo.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.getCarInfo(nextProps);
  }
  getCarInfo(props) {
    console.log("COMPONENT RECIEVED PROPS", props.currentCar);
    axios
      .get(`/api/userProfile/getSingleCar/${props.currentCar}`)
      .then(data => {
        console.log("CAR DATA: ", data.data[0]);
        this.setState({
          currentCarYear: data.data[0].year,
          currentCarMake: data.data[0].make,
          currentCarModel: data.data[0].model
        });
      })
      .catch(err => {
        console.log(err);
      });
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
        this.getCarInfo(this.props);
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
        this.getCars();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    //console.log("UPDATE CAR PROPS:", this.props.currentCar);
    return (
      <div>
        <div id="car-selected">
          Current Car Selected: {this.state.currentCarYear}{" "}
          {this.state.currentCarMake} {this.state.currentCarModel}
        </div>
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
