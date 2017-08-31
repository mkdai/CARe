import React, { Component } from "react";
import Appointments from "../../components/shopProfilePage/Appointments.jsx";
import NavigationBar from "../navBar/NavigationBar.jsx";

class ShopProfilePage extends Component {
  render() {
    console.log(this.props.params);
    return (
      <div>
        <NavigationBar />
        <Appointments />
      </div>
    );
  }
}

export default ShopProfilePage;
