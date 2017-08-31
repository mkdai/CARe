import React, { Component } from "react";
import Appointments from "../../components/shopProfilePage/Appointments.jsx";
import NavigationBar from "../navBar/NavigationBar.jsx";
import querystring from "querystring";
import axios from "axios";

class ShopProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supported: false,
      idString: "arglebargle",
      address1: "",
      address2: "",
      phone: "",
      name: "",
      latitude: "",
      longitude: ""
    };
  }
  componentDidMount() {
    let searchQueryString = this.props.location.search;
    let parsed = querystring.parse(searchQueryString.substring(1));
    console.log(parsed.idstring);
    //TODO: SEE IF some request so see if valid, and set state, other wise, set to undefined
    axios
      .get(`/api/search/getshop?id=${parsed.idstring}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          idString: parsed.idstring,
          name: res.data.name,
          address1: res.data.location.display_address[0],
          address2: res.data.location.display_address[1],
          phone: res.data.display_phone,
          latitude: res.data.coordinates.latitude,
          longitude: res.data.coordinates.longitude
        });
      })
      .catch(resp => {
        this.setState({ idString: "DOESNTEXIST" });
      });
    this.renderValidPage = this.renderValidPage.bind(this);
  }
  renderValidPage() {
    return (
      <div>
        <NavigationBar />
        <div className="bump">
          <Appointments />
        </div>
      </div>
    );
  }
  render() {
    console.log(this.state.idString);
    //TODO: STYLE INVALID /LOADING PAGES
    let page = !(
      this.state.idString === "arglebargle" ||
      this.state.idString === "DOESNTEXIST"
    ) ? (
      this.renderValidPage()
    ) : this.state.idString === "DOESNTEXIST" ? (
      <div>
        <NavigationBar />
        {console.log("Doesnt exist")}
        <div>This Shop Does Not Exist!</div>
      </div>
    ) : (
      <div>
        <NavigationBar />
        {console.log("Loading")}
        <div>Loading</div>
      </div>
    );
    return page;
  }
}

export default ShopProfilePage;
