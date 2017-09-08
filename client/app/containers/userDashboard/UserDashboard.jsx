import React from "react";
import NavigationBar from "../navBar/NavigationBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ProfileHead from "../../components/userDashboard/ProfileHead.jsx";
import CarHead from "../../components/userDashboard/CarHead.jsx";
import AddCar from "../../components/userDashboard/AddCar.jsx";
import DashboardTabs from "../../components/userDashboard/DashboardTabs.jsx";
import { connect } from "react-redux";
import axios from "axios";

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  };
}

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      currentCarId: null
    };
    this.selectCar = this.selectCar.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/userProfile/getAllUserCars/${this.props.currentUser.id}`)
      .then(data => {
        //console.log("THIS IS USER CARS DATA", data);
        this.setState(
          {
            cars: data.data
          },
          () => {
            console.log("ALL USER CARS", this.state.cars);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  selectCar(id) {
    this.setState(
      {
        currentCarId: id
      },
      () => {
        console.log("STATE", this.state);
      }
    );
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xs-12 col-sm-12">
              <h3 className="section-heading-dashboard">User Dashboard</h3>
              <hr
                className="section-heading-spacer"
                id="custom-section-spacer"
              />
            </div>
            <div className="col-lg-4 col-xs-12 col-sm-12">
              <ProfileHead user={this.props} />
              <button onClick={() => console.log(this.props.currentUser)}>
                Test current user
              </button>
            </div>
            <div className="car-container col-lg-4 col-xs-12 col-sm-12">
              {this.state.cars.map((car, i) => (
                <CarHead selectCar={this.selectCar} car={car} key={i} />
              ))}
            </div>
            <div className="col-lg-4 col-xs-12 col-sm-12">
              <AddCar
                user={this.props}
                currentCarId={this.state.currentCarId}
              />
            </div>
            <div className="col-lg-12 col-xs-12 col-sm-12">
              <hr
                className="section-heading-spacer"
                id="custom-section-spacer"
              />
            </div>
          </div>
          <div className="row">
            <DashboardTabs currentCarId={this.state.currentCarId} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserDashboard);
