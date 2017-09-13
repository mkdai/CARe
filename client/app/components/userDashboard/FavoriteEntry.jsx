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

export default class FavoriteEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    axios
      .get(`/api/userProfile/getShop/${this.props.shop.shopId}`)
      .then(data => {
        console.log("SHOP IN FAVENTRY: ", data.data[0]);
        this.setState({
          picture: data.data[0].picture,
          phone: data.data[0].phone,
          address: data.data[0].address,
          email: data.data[0].email,
          name: data.data[0].yelp_id
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("PROPS IN FAVORITEENTRy: ", this.props.shop);
    return (
      <Col lg={4}>
        <div className="fav-entry">
          <h4>{this.state.name}</h4>
          <img src={this.state.picture} />
          <div>{this.state.address}</div>
          <div>Phone: {this.state.phone}</div>
          <div>Email: {this.state.email}</div>
        </div>
      </Col>
    );
  }
}
