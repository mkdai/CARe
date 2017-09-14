import React, { Component } from "react";
import Appointments from "../../components/shopProfilePage/Appointments.jsx";
import Reviews from "../../components/shopProfilePage/Reviews.jsx";
import Map from "../../components/shopProfilePage/Map.jsx";
import NavigationBar from "../../containers/navBar/NavigationBar.jsx";
import Hours from "../../components/shopProfilePage/Hours.jsx";
import querystring from "querystring";
import axios from "axios";
import { bindActionCreators } from "redux";
import Rating from "react-rating";
import {
  Grid,
  Row,
  Col,
  Tabs,
  Tab,
  Button,
  ButtonGroup
} from "react-bootstrap";
import { connect } from "react-redux";
import _ from "underscore";
import { Redirect } from "react-router";
import { addUser } from "../../actions/currentUserAction.js";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser,
    currentAuth: state.currentAuth.auth
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addUser }, dispatch);
}

class ShopProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      favorited: false,
      supported: false,
      idString: "arglebargle",
      address1: "",
      address2: "",
      address3: "",
      phone: "",
      name: "",
      latitude: "",
      longitude: "",
      reviews: [],
      daysOfService: [],
      dbpk: -1
    };
    this.handleFav = _.debounce(this.handleFav, 500).bind(this);
    this.renderValidPage = this.renderValidPage.bind(this);
    this.getShopData = this.getShopData.bind(this);
    this.handleShopClaim = this.handleShopClaim.bind(this);
  }
  handleShopClaim() {
    let data = {
      name: this.state.name,
      yelp_id: this.state.idString,
      address: this.state.display_address.join("\n"),
      email: this.props.currentUser.email,
      phone: this.state.phone,
      picture: this.state.image,
      userId: this.props.currentUser.id
    };
    axios
      .post("/api/shopProfile/claimShop", data)
      .then(response => {
        console.log(
          "shop has been claimed, user data updated: ",
          response.data
        );
        //sending new user data with shopId to store, triggers getting shop data
        this.props.addUser(response.data);
        // this.getShopData(this.props);
      })
      .catch(err => {
        console.log(err);
      });
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
    //handles browser refresh case when signed in, since async issues with redux
    if (nextProps.currentUser.id) {
      this.getShopData(nextProps);
    }
  }
  componentDidMount() {
    console.log(
      `shopProfilePage mounted for user:`,
      this.props.currentUser,
      this.props.currentAuth
    );
    this.getShopData(this.props);
  }
  getShopData(props) {
    console.log(
      "getShopData request is made",
      props.currentUser.id,
      props.currentAuth
    );
    if (props.currentAuth.auth0) {
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
            address3: res.data.location.display_address[2],
            display_address: res.data.location.display_address,
            image: res.data.image_url,
            phone: res.data.display_phone,
            rating: res.data.rating,
            latitude: res.data.coordinates.latitude,
            longitude: res.data.coordinates.longitude,
            reviews: res.data.reviews,
            dbpk: res.data.dbpk,
            supported: res.data.isSupported,
            calId: res.data.calId,
            tk_token: res.data.tkToken,
            email: res.data.email,
            daysOfService: res.data.daysOfService
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
                  <div>{this.state.address3}</div>
                </div>
                <div>{this.state.phone}</div>
                <div>
                  <Rating
                    readonly
                    initialRate={this.state.rating}
                    empty={<img src="img/wrench-empty.png" className="icon" />}
                    full={<img src="img/wrench-full.png" className="icon" />}
                  />
                </div>
              </Col>
              <Col>
                {this.state.supported && !!this.props.currentUser.id ? this
                  .state.favorited ? (
                  <Button onClick={this.handleFav}> Unfavorite </Button>
                ) : (
                  <Button onClick={this.handleFav}> Favorite </Button>
                ) : null}
              </Col>
              <Col>
                {this.state.daysOfService ? (
                  <Hours daysOfService={this.state.daysOfService} />
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
          {this.state.supported ? (
            <Tabs defaultActiveKey={1} id="shop-dashboard-tab">
              <Tab eventKey={1} title={`Reviews(${this.state.reviews.length})`}>
                <Row>
                  <Reviews
                    getShopData={this.getShopData}
                    profileProps={this.props}
                    reviews={this.state.reviews}
                    dbShopId={this.state.dbpk}
                  />
                </Row>
              </Tab>
              <Tab eventKey={2} title="Appointments">
                <Row>
                  {this.props.currentUser.id ? this.state.calId ? (
                    <Appointments {...this.state} {...this.props} />
                  ) : (
                    <div className="center">
                      Sorry, this shop does not book appointments through our
                      site.
                    </div>
                  ) : this.state.calId ? (
                    <div className="center">
                      <div>Please sign in to make an appointment.</div>
                      <div>
                        <Button onClick={this.props.currentAuth.login}>
                          Sign in
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="center">
                      Sorry, this shop does not book appointments through our
                      site.
                    </div>
                  )}
                </Row>
              </Tab>
            </Tabs>
          ) : (
            <Row>
              <Col className="center bump">
                <div>This shop is not yet supported by the CARe Network.</div>
                {this.props.currentUser.id && !this.props.currentUser.shopId ? (
                  <div>
                    <div>Is this your business?</div>
                    <Button onClick={this.handleShopClaim}>
                      Claim this shop now!
                    </Button>
                  </div>
                ) : !this.props.currentUser.shopId ? (
                  <div>
                    <div> Sign in to claim this business! </div>
                    <Button onClick={this.props.currentAuth.login}>
                      Sign in
                    </Button>
                  </div>
                ) : (
                  <div>
                    You already manage another business, so you cannot claim
                    another one!
                  </div>
                )}
              </Col>
            </Row>
          )}
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
      <Redirect to="/shop-not-found" />
    ) : (
      <div>
        <NavigationBar />
        <div className="center bump">
          <img src="/img/loading.gif" />
          <div>
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    );
    return page;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopProfilePage);
