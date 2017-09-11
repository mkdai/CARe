import React, { Component } from "react";
import NavigationBar from "../containers/navBar/NavigationBar";
class FourOhFour extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="bump">
          <h2>404</h2>
          <h4>Page Not Found</h4>
        </div>
      </div>
    );
  }
}
export default FourOhFour;
