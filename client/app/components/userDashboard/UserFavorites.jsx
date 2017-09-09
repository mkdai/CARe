import React from "react";
import NavigationBar from "../../containers/navBar/NavigationBar.jsx";
import { connect } from "react-redux";
import axios from "axios";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  };
}

class UserFavorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(`/api/userProfile/getUserFavorites/${this.props.currentUser.id}`)
      .then(data => {
        console.log("THIS IS FAVS DATA: ", data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xs-12 col-sm-12">
              <h2>My Favorites Shops</h2>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserFavorites);
