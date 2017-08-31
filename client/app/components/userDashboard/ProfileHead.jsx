import React from "react";
import { Modal, Button } from "react-bootstrap";

export default class ProfileHead extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ showModal: true }, () => {
      console.log("2: THIS IS STATE of the modal", this.state.showModal);
    });
  }

  close() {
    this.setState({ showModal: false }, console.log("close is being run"));
  }

  render() {
    console.log("1: STATE show modal", this.state.showModal);
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
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>

              <hr />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
