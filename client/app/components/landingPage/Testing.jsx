import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import { Jumbotron } from "react-bootstrap";

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
          Ut malesuada cursus eros, eget viverra ex semper sit amet. Phasellus
          laoreet imperdiet urna, ac accumsan urna fringilla eget. Nulla tempus
          est ante, sit amet rutrum nulla ullamcorper a. Phasellus commodo
          sagittis dolor eu varius. Duis eu lacus ut lectus maximus elementum.
          Curabitur bibendum porttitor magna non lacinia. Integer pharetra urna
          lacus, ut convallis libero ultrices id. Maecenas at metus non massa
          luctus laoreet. Aenean condimentum augue non neque varius, at
          sollicitudin diam fringilla. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nulla feugiat ligula
          enim, vitae mattis dui vestibulum eu. Integer pulvinar luctus odio at
          tempor.
          <hr />
          Praesent neque neque, convallis vitae imperdiet sit amet, gravida in
          risus. Ut elementum pharetra lobortis. In vel semper lacus. Cras
          dictum sem enim. Nam a interdum nunc, quis semper velit. Pellentesque
          vehicula cursus felis. Proin at mi eget sapien mollis ullamcorper non
          a felis. Nulla at mauris condimentum, ultrices tortor eu, tincidunt
          augue. Vivamus eget tellus nisl. Morbi facilisis, diam id molestie
          pulvinar, neque mi maximus quam, non venenatis libero lectus et dolor.
          Duis volutpat massa ac purus tempus ornare.
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
