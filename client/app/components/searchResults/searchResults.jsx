import React, { Component } from "react";
import axios from "axios";
import NavigationBar from "../../containers/navBar/NavigationBar.jsx";
import querystring from "querystring";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      term: "all",
      shops: [],
      loading: true
    };
  }
  getSearchResults() {
    this.setState({ loading: true });
    let searchQueryString = this.props.location.search;
    let parsed = querystring.parse(searchQueryString.substring(1));
    if (parsed.term !== "") {
      this.setState({ term: parsed.term, location: parsed.location });
    }
    if (!parsed.location) {
      this.setState({ location: "Current Position" });
      navigator.geolocation.getCurrentPosition(
        position => {
          searchQueryString += `&latitude=${position.coords.latitude}`;
          searchQueryString += `&longitude=${position.coords.longitude}`;
          axios
            .get(`/api/search/allshops${searchQueryString}`)
            .then(({ data }) => {
              this.setState({ shops: data.businesses, loading: false });
            });
        },
        err => {
          console.log(
            "location cannot be found: ",
            err,
            "using default location 33.976,-118.387"
          );
          axios
            .get(`/api/search/allshops?latitude=33.976&longitude=-118.387`)
            .then(({ data }) => {
              this.setState({ shops: data.businesses, loading: false }, () =>
                console.log(this.state.shops)
              );
            });
        }
      );
    } else {
      axios.get(`/api/search/allshops${searchQueryString}`).then(({ data }) => {
        this.setState({ shops: data, loading: false }, () =>
          console.log(this.state.shops)
        );
      });
    }
  }
  componentWillReceiveProps() {
    this.getSearchResults();
  }
  componentDidMount() {
    this.getSearchResults();
  }
  render() {
    return (
      <div>
        <NavigationBar />
        {this.state.loading ? (
          <Grid className="search-grid">
            <Row>
              <h1>LOADING</h1>
            </Row>
          </Grid>
        ) : (
          <Grid className="search-grid">
            <Row>
              <Col>
                Searching for "{this.state.term}" near
                {this.state.location !== "" ? (
                  ` "${this.state.location}"`
                ) : (
                  " your location"
                )}.
              </Col>
            </Row>
            {this.state.shops.map(shop => {
              return (
                <Link to={`/shops?idstring=${shop.id}`}>
                  <Row className="search-result-entry test">
                    <Col xs={12} sm={12} md={3} lg={3}>
                      <Image
                        src={shop.image_url}
                        responsive
                        className="shop-profile-pic"
                      />
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={7}>
                      <div className="shop-info">
                        <div>{shop.name}</div>
                        <div>{shop.location.display_address[0]}</div>
                        <div>{shop.location.display_address[1]}</div>
                        <div>{shop.location.display_address[2]}</div>
                        {shop.isSupported ? (
                          <div>
                            <Rating
                              readonly
                              initialRate={shop.rating}
                              empty={
                                <img
                                  src="img/wrench-empty.png"
                                  className="icon"
                                />
                              }
                              full={
                                <img
                                  src="img/wrench-full.png"
                                  className="icon"
                                />
                              }
                            />{" "}
                            ({shop.review_count || 0})
                          </div>
                        ) : null}
                      </div>
                      <div className="distance-info">
                        {Math.floor(shop.distance * 0.00621371) / 10 + "mi"}
                        <div>
                          {shop.isSupported ? " Handled with CARE" : null}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Link>
              );
            })}
          </Grid>
        )}
      </div>
    );
  }
}

export default SearchResults;
