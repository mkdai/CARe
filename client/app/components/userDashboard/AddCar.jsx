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
      mileage: 0,
      make: "",
      model: "",
      year: 0,
      uploadedFileCloudinaryUrl: "",
      wiperService: 9000,
      batteryService: 60000,
      brakeService: 60000,
      airfilterService: 25000,
      tireService: 50000,
      oilService: 4000
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.serviceCheck = this.serviceCheck.bind(this);
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
    this.setState(
      {
        [temp]: event.target.value
      },
      () => {
        console.log("STATE IS", this.state);
      }
    );
  }

  handleSubmit() {
    this.close();
    this.serviceCheck();
    axios
      .post(
        `/api/userProfile/addCar/${this.props.user.currentUser.id}`,
        this.state
      )
      .then(data => {
        console.log("DATA", data.data[0]);
        this.setState({
          license: data.data[0].license,
          mileage: data.data[0].mileage,
          make: data.data[0].make,
          model: data.data[0].model,
          year: data.data[0].year
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  serviceCheck() {
    console.log("serviceCheck is hitting");
  }

  render() {
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
