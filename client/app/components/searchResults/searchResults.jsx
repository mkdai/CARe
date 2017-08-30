import React, { Component } from "react";
import axios from "axios";
import NavBar from "../../containers/navBar/NavBar.jsx";
import querystring from "querystring";
import { Grid, Row, Col, Image } from "react-bootstrap";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: []
    };
  }
  componentDidMount() {
    let searchQueryString = this.props.location.search;
    console.log(searchQueryString);
    let parsed = querystring.parse(searchQueryString.substring(1));
    if (!parsed.location) {
      console.log("no location found");
      navigator.geolocation.getCurrentPosition(
        position => {
          searchQueryString += `&latitude=${position.coords.latitude}`;
          searchQueryString += `&longitude=${position.coords.longitude}`;
          axios
            .get(`/api/search/allshops${searchQueryString}`)
            .then(({ data }) => {
              this.setState({ shops: data.businesses });
              console.log(data);
            });
        },
        err => console.log(err)
      );
    } else {
      axios.get(`/api/search/allshops${searchQueryString}`).then(({ data }) => {
        this.setState({ shops: data.businesses }, () =>
          console.log(this.state.shops)
        );
        console.log(this.state.shops);
      });
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <Grid className="search-grid">
          {this.state.shops.map(shop => {
            return (
              <Row className="search-result-entry">
                <Col xs={12} sm={12} md={3} lg={3} className="test">
                  <Image
                    src={shop.image_url}
                    responsive
                    className="shop-profile-pic"
                  />
                </Col>
                <Col xs={12} sm={12} md={7} lg={7} className="test">
                  <div className="shop-info">
                    <div>{shop.name}</div>
                    <div>{shop.location.display_address[0]}</div>
                    <div>{shop.location.display_address[1]}</div>
                  </div>
                  <div className="distance-info">
                    {Math.floor(shop.distance * 0.00621371) / 10 + "mi"}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default SearchResults;
