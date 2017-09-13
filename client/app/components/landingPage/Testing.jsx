import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import { Jumbotron } from "react-bootstrap";
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

export default class Testing extends Component {
  render() {
    return (
      <div>
        <Parallax strength={300}>
          <Background>
            <img src="img/garage.jpg" style={{ height: "100vh" }} />
          </Background>
          <div className="parallax">
            {" "}
            <div className="inner">
              <h1>CARe</h1>
              <h3>Car Service Made Easy</h3>
              <hr className="intro-divider" />
            </div>{" "}
          </div>
        </Parallax>
        <div className="parallax-seperator">
          <Row>
            <Col lg={12} className="company-details">
              <div>
                <h2>What We Do</h2>
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="company-details">
              <img
                src="http://www.huntsland-nutrition.com/wp-content/uploads/2015/05/company.jpg"
                id="landing-pic-one"
              />
              <div className="company-details-text">
                <div>
                  <h3 className="company-details-header">
                    Dedicated Professionals
                  </h3>
                </div>
                Our staff at CARe is comprised off leading professionals in the
                auto and software industries. With our experience, you can be
                sure you are getting the best help and everything you need at
                the click of a button. We work around the clock and care more,
                so you don't have to.
              </div>
            </Col>
            <Col lg={4} className="company-details">
              <img
                src="https://cbsnewyork.files.wordpress.com/2012/05/car-maintenance.jpg"
                id="landing-pic-one"
              />
              <div className="company-details-text">
                <div>
                  <h3 className="company-details-header">Quality Service</h3>
                </div>
                We only support the best shops that we know will give you the
                right care your vehicle needs every time. We take care of the
                vetting so you can be sure your car is in good hands. We are
                committed to transparency between mechanic and customer, so you
                know you are getting the best service.
              </div>
            </Col>
            <Col lg={4} className="company-details">
              <img
                src="https://blog.retargeting.biz/wp-content/uploads/2015/11/Be-There.gif"
                id="landing-pic-one"
              />
              <div className="company-details-text">
                <div>
                  <h3 className="company-details-header">
                    100% Customer Satisfaction
                  </h3>
                </div>
                Our primary mission is to leave you, the customer, staisfied
                every time. When using our service, you can be completely
                confident that the job is done right and without stress. If you
                are not happy with your service, we will do everything we can to
                make it right. That is our guarantee.
              </div>
            </Col>
          </Row>
        </div>
        <Parallax strength={300}>
          <Background>
            <img
              src="https://1ifhnhasx0c1wyr6x2cjm7b8-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/Made-in-office-1429_1.jpg"
              style={{ height: "100vh", filter: "blur(3px)" }}
            />
          </Background>
          <div className="parallax">
            {" "}
            <div className="inner">
              <h1>We care more</h1>{" "}
            </div>{" "}
          </div>
        </Parallax>
        <div className="parallax-seperator">
          <h1 className="quotes-header">Customer Testimonials</h1>
          <hr className="landing-hr" />
          <blockquote>
            <h2 className="landing-quotes">
              <em>
                As a small business owner of a company with about 20 employees,
                it made a huge difference from before using this site and after.
                It makes bookings and appointments so much easier both on us and
                the customers. Also unlike other some other sites I've used so
                far like RepairPal, the customer support here is just superb!
              </em>
            </h2>
            <cite className="landing-cite">-Mike Griffen</cite>
          </blockquote>
          <hr className="quote-divider" />
          <blockquote>
            <h2 className="landing-quotes">
              <em>
                I used to think maintaining a car every so often was a pain. And
                to some degree, it still is. However, instead of calling up
                individual car shops or just going to some random garage, now I
                can find all the information I want from here! Plus, the
                maintenance history makes a world of difference when I want to
                check specifics.
              </em>
            </h2>
            <cite className="landing-cite">-Anonymous User</cite>
          </blockquote>
          <hr className="quote-divider" />
          <blockquote>
            <h2 className="landing-quotes">
              <em>
                I like it... this site is clean and simple. It does what it
                advertises to do without all the bloat that's usually associated
                with other sites.
              </em>
            </h2>
            <cite className="landing-cite">-J6K</cite>
          </blockquote>
        </div>
        <Parallax strength={300}>
          <Background>
            <img
              src="https://ashutterbugslife.files.wordpress.com/2014/04/iwt_5264.jpg"
              style={{ height: "100vh" }}
            />
          </Background>
          <div className="parallax">
            {" "}
            <div className="inner">
              <h1>So you can care less</h1>{" "}
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
