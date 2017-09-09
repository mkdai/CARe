import React, { Component } from "react";
import Appointments from "../../components/shopProfilePage/Appointments.jsx";
import Reviews from "../../components/shopProfilePage/Reviews.jsx";
import Map from "../../components/shopProfilePage/Map.jsx";
import NavigationBar from "../../containers/navBar/NavigationBar.jsx";
import querystring from "querystring";
import axios from "axios";
import { Grid, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import { connect } from "react-redux";
import _ from "underscore";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  };
}

class ShopProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
      supported: false,
      idString: "arglebargle",
      address1: "",
      address2: "",
      phone: "",
      name: "",
      latitude: "",
      longitude: "",
      reviews: [],
      dbpk: -1
    };
    this.handleFav = _.debounce(this.handleFav, 500).bind(this);
    this.renderValidPage = this.renderValidPage.bind(this);
    this.getShopData = this.getShopData.bind(this);
  }
  handleFav() {
    if (this.state.favorited) {
      axios
        .delete(
          `/api/shopProfile/favorite?userId=${this.props.currentUser
            .id}&shopId=${this.state.dbpk}`
        )
        .then(() => {
          this.setState({ favorited: false });
        });
    } else {
      axios
        .post(
          `/api/shopProfile/favorite?userId=${this.props.currentUser
            .id}&shopId=${this.state.dbpk}`
        )
        .then(() => {
          this.setState({ favorited: true });
        });
    }
  }
  componentWillReceiveProps(nextProps) {
    //handles browser refresh case, since async issues with redux
    this.getShopData(nextProps);
  }
  componentDidMount() {
    console.log(`shopProfilePage mounted for user:`, this.props.currentUser);
    this.getShopData(this.props);
  }
  getShopData(props) {
    console.log("getShopData request is made");
    let searchQueryString = this.props.location.search;
    let parsed = querystring.parse(searchQueryString.substring(1));
    axios
      .get(
        `/api/search/getshop?id=${parsed.idstring}&userId=${props.currentUser
          .id}`
      )
      .then(res => {
        console.log("shop info received: ", res.data);
        this.setState({
          idString: parsed.idstring,
          name: res.data.name,
          address1: res.data.location.display_address[0],
          address2: res.data.location.display_address[1],
          phone: res.data.display_phone,
          latitude: res.data.coordinates.latitude,
          longitude: res.data.coordinates.longitude,
          reviews: res.data.reviews,
          dbpk: res.data.dbpk,
          supported: res.data.isSupported,
          calId: res.data.calId
        });
        if (!this.state.favorited)
          this.setState({
            favorited: res.data.favorited
          });
      })
      .catch(response => {
        console.log("could not get shop data", response);
        this.setState({ idString: "DOESNTEXIST" });
      });
  }
  renderValidPage() {
    return (
      <div>
        <NavigationBar />
        <Grid className="bump">
          <Row>
            <Col lg={6} md={6} sm={4}>
              <Col>
                <div>
                  <h3>{this.state.name}</h3>
                </div>
                <div>
                  <div>{this.state.address1}</div>
                  <div>{this.state.address2}</div>
                </div>
                <div>{this.state.phone}</div>
              </Col>
              <Col>
                {this.state.supported && !!this.props.currentUser.id ? this
                  .state.favorited ? (
                  <Button onClick={this.handleFav}> Unfavorite </Button>
                ) : (
                  <Button onClick={this.handleFav}> Favorite </Button>
                ) : null}
              </Col>
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
          <Tabs defaultActiveKey={1} id="shop-dashboard-tab">
            <Tab eventKey={1} title={`Reviews(${this.state.reviews.length})`}>
              <Row>
                <Reviews
                  reviews={this.state.reviews}
                  dbShopId={this.state.dbpk}
                />
              </Row>
            </Tab>
            <Tab eventKey={2} title="Appointments">
              <Row>
                <Appointments {...this.state} {...this.props} />
              </Row>
            </Tab>
          </Tabs>
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

export default connect(mapStateToProps)(ShopProfilePage);
