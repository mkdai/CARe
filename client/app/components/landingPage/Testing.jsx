import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus
          ut felis in vestibulum. Curabitur gravida ante ut diam mollis
          ullamcorper. Nam ipsum metus, egestas eu sodales quis, efficitur et
          lectus. Fusce tristique justo justo, eget dictum mauris imperdiet id.
          Pellentesque ultricies interdum justo, nec malesuada ligula
          condimentum vel. Maecenas tincidunt nunc sit amet elit fringilla
          scelerisque. Vestibulum sagittis, metus tempor malesuada mollis, nunc
          enim pellentesque purus, et placerat sapien velit eleifend augue.
          Praesent pharetra tempus rhoncus. Aenean varius enim at neque
          lobortis, nec ultrices diam sagittis. Vestibulum id urna ut purus
          cursus congue sit amet vitae dui.
          <hr />
          Aliquam id convallis ligula. Sed rutrum quis tortor quis ullamcorper.
          Donec mauris quam, condimentum ac neque id, rutrum luctus augue.
          Aenean in purus odio. Pellentesque ut dui posuere, dignissim urna
          quis, congue felis. Vestibulum ac dolor ac erat porttitor iaculis.
          Quisque tristique vitae libero quis finibus. Donec sodales vehicula
          tristique. Donec elementum tristique lectus, vel tincidunt felis
          volutpat eu. Cras euismod lectus nibh, varius blandit tortor efficitur
          quis. Aenean odio sem, lobortis ut orci vel, vehicula pellentesque
          leo. Aliquam nec orci sed elit tincidunt hendrerit id sit amet leo.
          Integer lacus dui, tempus at hendrerit eget, volutpat sed mi.
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
              <h1>We care</h1>{" "}
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
