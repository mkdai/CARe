import React, { Component } from "react";
import axios from "axios";
import NavBar from "../../containers/navBar/NavBar.jsx";
import querystring from "querystring";

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
        <Grid>
          {this.state.shops.map(shop => {
            return (
              <div className="row search-result-entry">
                <div className="col-lg-3 col-xs-3 col-sm-3 col-md-3">
                  <img
                    className="shop-profile-pic img-rounded"
                    src={shop.image_url}
                  />
                </div>
                <div className="col-lg-7 col-xs-7 col-sm-7 col-md-7">
                  <div>{shop.name}</div>
                  <div>{shop.location.display_address[0]}</div>
                  <div>{shop.location.display_address[1]}</div>
                </div>
                <div className="col-lg-2 col-xs-2 col-sm-2 col-md-2">
                  {Math.floor(shop.distance * 0.00621371) / 10 + "mi"}
                </div>
              </div>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default SearchResults;
