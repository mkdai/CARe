import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const markers = this.props.markers || [];

    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: this.props.latitude,
          lng: this.props.longitude
        }}
      >
        {markers.map((marker, index) => <Marker {...marker} />)}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
