import React from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Col,
  Button,
  Well,
  Row
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class FavoriteEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    axios
      .get(`/api/userProfile/getShop/${this.props.shop.shopId}`)
      .then(data => {
        // console.log("SHOP IN FAVENTRY: ", data.data[0]);
        this.setState({
          picture: data.data[0].picture,
          phone: data.data[0].phone,
          address: data.data[0].address,
          email: data.data[0].email,
          name: data.data[0].name
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("PROPS IN FAVORITEENTRy: ", this.props.shop.shop.yelp_id);
    return (
      <Col lg={12} sm={12}>
        <Link to={`/shops?idstring=${this.props.shop.shop.yelp_id}`}>
          <div className="fav-entry">
            <img className="fav-pic" src={this.state.picture} />
            <div className="fav-info">
              <h4>{this.state.name}</h4>
              <div className="fav-text">
                <div className="fav-address">{this.state.address}</div>
                <div className="fav-phone">Phone: {this.state.phone}</div>
                <div className="fav-email">Email: {this.state.email}</div>
              </div>
            </div>
          </div>
        </Link>
      </Col>
    );
  }
}
