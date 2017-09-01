import React from "react";
import { Modal, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import request from "superagent";
import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = "griffPreset";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/mikegriff3/image/upload";

export default class ProfileHead extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      uploadedFileCloudinaryUrl: "",
      name: "",
      email: "",
      phone: "",
      profilePic: ""
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          uploadedFileCloudinaryUrl: response.body.secure_url,
          profilePic: response.body.secure_url
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
    console.log("Handle Submit is hitting");
    //axios.put(`/api/updateProfile/$`);
  }

  render() {
    return (
      <div>
        <div className="UserPic">
          <img
            src="http://www.hazelearth.com/admin-content/thumbs/nouser.jpg"
            className="img-responsive"
            id="user-pic"
          />
          <div className="profile-info">
            <div>Brandon Tilley</div>
            <div>
              <a href="#" className="reviews-link">
                Reviews
              </a>
            </div>
            <div>
              <a href="#" className="favorites-link">
                Favorites
              </a>
            </div>
            <Button
              className="btn-primary"
              id="edit-profile-button"
              onClick={this.open}
            >
              Edit Profile
            </Button>
          </div>
          <Modal style={{}} show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Name</label>
              <form>
                <input
                  name="name"
                  onChange={this.handleOnChange}
                  className="edit-profile-input"
                  type="text"
                  placeholder="Enter your name"
                />
              </form>
              <label>Email</label>
              <form>
                <input
                  name="email"
                  onChange={this.handleOnChange}
                  className="edit-profile-input"
                  type="text"
                  placeholder="Enter your email"
                />
              </form>
              <label>Phone</label>
              <form>
                <input
                  name="phone"
                  onChange={this.handleOnChange}
                  className="edit-profile-input"
                  type="text"
                  placeholder="E.g. 5553214578"
                />
              </form>
              <hr />
              <label>Profile Picture</label>
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
      </div>
    );
  }
}
