import React, { Component } from "react";
import Appointments from "../../components/shopProfilePage/Appointments.jsx";
import Map from "../../components/shopProfilePage/Map.jsx";
import NavigationBar from "../navBar/NavigationBar.jsx";
import querystring from "querystring";
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap";

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
    this.renderValidPage = this.renderValidPage.bind(this);
  }
  componentDidMount() {
    console.log("mounting");
    let searchQueryString = this.props.location.search;
    let parsed = querystring.parse(searchQueryString.substring(1));
    //TODO: SEE IF some request so see if valid, and set state, other wise, set to undefined
    axios
      .get(`/api/search/getshop?id=${parsed.idstring}`)
      .then(res => {
        console.log("we good");
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
      .catch(response => {
        console.log("jk why", response);
        this.setState({ idString: "DOESNTEXIST" });
      });
  }
  renderValidPage() {
    console.log(this.state.name);
    return (
      <div>
        <NavigationBar />
        <Grid className="bump">
          <Row>
            <Col lg={6} md={6} sm={4}>
              <div>
                <h3>{this.state.name}</h3>
              </div>
              <div>
                <div>{this.state.address1}</div>
                <div>{this.state.address2}</div>
              </div>
              <div>{this.state.phone}</div>
            </Col>
            <Col lg={6} md={6} sm={8}>
              <Map
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                containerElement={<div style={{ height: `200px` }} />}
                mapElement={<div style={{ height: `200px` }} />}
                markers={[
                  {
                    position: {
                      lat: this.state.latitude,
                      lng: this.state.longitude
                    }
                  }
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Appointments />
          </Row>
        </Grid>
      </div>
    );
  }
  render() {
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
        <div className="bump">This Shop Does Not Exist!</div>
      </div>
    ) : (
      <div>
        <NavigationBar />
        {console.log("Loading")}
        <div className="bump">Loading</div>
      </div>
    );
    return page;
  }
}

export default ShopProfilePage;
