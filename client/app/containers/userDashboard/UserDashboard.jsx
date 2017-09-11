import React from "react";
import NavigationBar from "../navBar/NavigationBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ProfileHead from "../../components/userDashboard/ProfileHead.jsx";
import CarHead from "../../components/userDashboard/CarHead.jsx";
import AddCar from "../../components/userDashboard/AddCar.jsx";
import DashboardTabs from "../../components/userDashboard/DashboardTabs.jsx";
import { connect } from "react-redux";
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap";

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
    this.handleAddCar = this.handleAddCar.bind(this);
  }

  handleAddCar(car) {
    this.setState({ cars: [...this.state.cars, car] });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.id) {
      axios
        .get(`/api/userProfile/getAllUserCars/${nextProps.currentUser.id}`)
        .then(data => {
          console.log("got cars");
          this.setState({ cars: data.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  componentDidMount() {
    if (this.props.currentUser.id) {
      axios
        .get(`/api/userProfile/getAllUserCars/${this.props.currentUser.id}`)
        .then(data => {
          console.log("got cars");
          this.setState({ cars: data.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  selectCar(id) {
    this.setState({ currentCarId: id });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <h3 className="section-heading-dashboard">User Dashboard</h3>
              <hr
                className="section-heading-spacer"
                id="custom-section-spacer"
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={4}>
              <ProfileHead user={this.props} />
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} className="car-container">
              {this.state.cars.map((car, i) => (
                <CarHead selectCar={this.selectCar} car={car} key={i} />
              ))}
            </Col>
            <Col xs={12} sm={12} md={12} lg={4}>
              <AddCar
                user={this.props}
                currentCarId={this.state.currentCarId}
                handleAddCar={this.handleAddCar}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <hr
                className="section-heading-spacer"
                id="custom-section-spacer"
              />
            </Col>
          </Row>
          <Row>
            <DashboardTabs currentCarId={this.state.currentCarId} />
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserDashboard);
