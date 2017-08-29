import React from 'react';
import NavBar from '../navBar/NavBar.jsx';
import Footer from '../footer/Footer.jsx';
import $ from 'jquery';
import TimekitBooking from 'timekit-booking';

export default class LandingPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <NavBar />
        <header className="intro-header" >
        <div className="container">
          <div className="intro-message">
            <h1>CARe</h1>
            <h3>A Template by Start Bootstrap</h3>
            <hr className="intro-divider" />
            <ul className="list-inline intro-social-buttons">
              <li className="list-inline-item">
                <a href="#" className="btn btn-secondary btn-lg">
                  <i className="fa fa-twitter fa-fw"></i>
                  <span className="network-name">Twitter</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-secondary btn-lg">
                  <i className="fa fa-github fa-fw"></i>
                  <span className="network-name">Github</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn btn-secondary btn-lg">
                  <i className="fa fa-linkedin fa-fw"></i>
                  <span className="network-name">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        </header>
        
        <section className="content-section-a">
        
        <div className="container">
        
          <div className="row">
            <div className="col-lg-5 ml-auto">
              <hr className="section-heading-spacer"/>
              <div className="clearfix"></div>
              <h2 className="section-heading">Google Web Fonts and<br/>Font Awesome Icons</h2>
              <p className="lead">This template features the 'Lato' font, part of the
                <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as
                <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.</p>
            </div>
            <div className="col-lg-5 mr-auto ">
              <img className="img-fluid" src="img/phones.png" alt=""/>
            </div>
          </div>
        
        </div>
        </section>
        <Footer />
      </div>
    );
  }
}

