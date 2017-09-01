import React from "react";
import { Modal, Button } from "react-bootstrap";

export default class AddCar extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      vin: 0,
      mileage: 0,
      color: ""
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
            <label>Vin</label>
            <form>
              <input
                name="vin"
                className="edit-profile-input"
                type="text"
                placeholder="Enter your car's vin number"
              />
            </form>
            <label>Mileage</label>
            <form>
              <input
                name="mileage"
                className="edit-profile-input"
                type="text"
                placeholder="Enter your car's current mileage"
              />
            </form>
            <label>Color</label>
            <form>
              <input
                name="color"
                className="edit-profile-input"
                type="text"
                placeholder="Enter the color of your car"
              />
            </form>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
            <Button onClick={this.close}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
