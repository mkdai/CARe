import React from "react";
import FavoriteEntry from "./FavoriteEntry.jsx";
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

export default class FavoriteEntries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shops: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ shops: nextProps.shops }, () => {
      console.log("NEXTPROPS: ", nextProps);
      console.log("STATE OF SHOPS: ", this.state);
    });
  }

  render() {
    console.log("PROPS IN FAVORITEENTRies: ", this.props.shops.data);
    return (
      <div>
        <Row>
          {this.props.shops.map((shop, i) => (
            <FavoriteEntry shop={shop} key={i} />
          ))}
        </Row>
      </div>
    );
  }
}
