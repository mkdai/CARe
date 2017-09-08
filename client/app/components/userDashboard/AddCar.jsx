import React from "react";
import { Modal, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import request from "superagent";
import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = "griffPreset";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/mikegriff3/image/upload";

export default class AddCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      license: 0,
      mileage: 20000,
      make: "",
      model: "",
      year: 0,
      uploadedFileCloudinaryUrl: "",
      wiperService: 9000,
      batteryService: 60000,
      brakeService: 60000,
      airfilterService: 25000,
      tireService: 50000,
      oilService: 4000,
      currentCar: null
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.wiperCheck = this.wiperCheck.bind(this);
    this.batteryCheck = this.batteryCheck.bind(this);
    this.brakeCheck = this.brakeCheck.bind(this);
    this.airfilterCheck = this.airfilterCheck.bind(this);
    this.tireCheck = this.tireCheck.bind(this);
    this.oilCheck = this.oilCheck.bind(this);
    this.sendReminder = this.sendReminder.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleOnChange(event) {
    let temp = event.target.name;
    this.setState({
      [temp]: event.target.value
    });
  }

  handleSubmit() {
    this.close();
    axios
      .post(
        `/api/userProfile/addCar/${this.props.user.currentUser.id}`,
        this.state
      )
      .then(data => {
        console.log("DATA", data.data[0]);
        this.setState(
          {
            license: data.data[0].license,
            mileage: data.data[0].mileage,
            make: data.data[0].make,
            model: data.data[0].model,
            year: data.data[0].year,
            currentCar: data.data[0].id
          },
          () => {
            console.log("THIS IS STATE AFTER CAR ADDED", this.state.currentCar);
            this.wiperCheck();
            this.batteryCheck();
            this.brakeCheck();
            this.airfilterCheck();
            this.tireCheck();
            this.oilCheck();
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  wiperCheck() {
    var time =
      (this.state.wiperService - this.state.mileage % this.state.wiperService) /
      1000;
    console.log("THIS IS TIME FOR WIPER SERVICE:", time);
    if (time <= 1) {
      this.sendReminder("Windshield Wiper Replacement");
    }
  }

  batteryCheck() {
    var time =
      (this.state.batteryService -
        this.state.mileage % this.state.batteryService) /
      1000;
    console.log("THIS IS TIME FOR BATTERY SERVICE:", time);
    if (time <= 1) {
      this.sendReminder("Change Battery");
    }
  }

  brakeCheck() {
    var time =
      (this.state.brakeService - this.state.mileage % this.state.brakeService) /
      1000;
    console.log("THIS IS TIME FOR BRAKE SERVICE:", time);
    if (time <= 1) {
      this.sendReminder("Check Brake Pads");
    }
  }

  airfilterCheck() {
    var time =
      (this.state.airfilterService -
        this.state.mileage % this.state.airfilterService) /
      1000;
    console.log("THIS IS TIME FOR AIR-FILTER SERVICE:", time);
    if (time <= 1) {
      this.sendReminder("Air Filter Replacement");
    }
  }

  tireCheck() {
    var time =
      (this.state.tireService - this.state.mileage % this.state.tireService) /
      1000;
    console.log("THIS IS TIME FOR TIRE SERVICE:", time);
    if (time <= 1) {
      this.sendReminder("Check Your Tires");
    }
  }

  oilCheck() {
    var time =
      (this.state.oilService - this.state.mileage % this.state.oilService) /
      1000;
    console.log("THIS IS TIME FOR OIL SERVICE:", time);
    if (time <= 1) {
      this.sendReminder("Oil Service");
    }
  }

  sendReminder(input) {
    console.log("sending a reminder", input);
    axios
      .post(`/api/userProfile/createReminder/${this.state.currentCar}`, {
        input: input,
        userId: this.props.user.currentUser.id
      })
      .then(data => {
        console.log("SEND REMINDER RESP:", data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("PROPS IN ADDCAR", this.props);
    return (
      <div>
        <div className="CarPic" onClick={this.open}>
          <img
            src="http://downloadicons.net/sites/default/files/plus-icon-64937.png"
            className="img-responsive"
            id="add-car-pic"
          />
          <div className="car-info">
            <div>Add Car</div>
          </div>
        </div>
        <Modal style={{}} show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Make</label>
            <form>
              <input
                name="make"
                onChange={this.handleOnChange}
                className="edit-profile-input"
                type="text"
                placeholder="Enter the make of your car"
              />
            </form>
            <label>Model</label>
            <form>
              <input
                name="model"
                onChange={this.handleOnChange}
                className="edit-profile-input"
                type="text"
                placeholder="Enter the model of your car"
              />
            </form>
            <label>Year</label>
            <form>
              <input
                name="year"
                onChange={this.handleOnChange}
                className="edit-profile-input"
                type="text"
                placeholder="Enter the year of your car"
              />
            </form>
            <label>Mileage</label>
            <form>
              <input
                name="mileage"
                onChange={this.handleOnChange}
                className="edit-profile-input"
                type="text"
                placeholder="Enter the mileage of your car"
              />
            </form>
            <label>License Plate Number</label>
            <form>
              <input
                name="license"
                onChange={this.handleOnChange}
                className="edit-profile-input"
                type="text"
                placeholder="Enter the license plate number of your car"
              />
            </form>
            <hr />
            <label>Car Picture</label>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}
            >
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            <div className="FileUpload">...</div>

            <div>
              {this.state.uploadedFileCloudinaryUrl === "" ? null : (
                <div>
                  <p>{this.state.uploadedFile.name}</p>
                  <img src={this.state.uploadedFileCloudinaryUrl} />
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
