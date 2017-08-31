import React from "react";

export default class CarHead extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="CarPic">
          <img
            src="http://lotusep.com/wp-content/uploads/2016/09/perfect-burgundy-front-door-about-cheap-article.jpg"
            className="img-responsive"
            id="car-pic"
          />
          <div className="car-info">
            <div>2013 Ford Mustang</div>
            <div>Next Service Date: Nov 2017</div>
          </div>
        </div>
      </div>
    );
  }
}
