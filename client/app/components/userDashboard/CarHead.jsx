import React from "react";

export default class CarHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS IN CARHEAD", this.props);
    return (
      <div>
        <div className="CarPic">
          <img
            src={this.props.car.picture}
            className="img-responsive"
            id="car-pic"
          />
          <div className="car-info">
            <div>
              <span className="span-spacer">{this.props.car.year}</span>
              <span className="span-spacer">{this.props.car.make}</span>
              <span className="span-spacer">{this.props.car.model}</span>
            </div>
            <div>Next Service Date: Nov 2017</div>
          </div>
        </div>
      </div>
    );
  }
}
