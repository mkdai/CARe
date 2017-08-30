import React from "react";

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer className="my-footer">
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#" className="footer-link">
                Home
              </a>
            </li>
            <li className="footer-menu-divider list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="#about" className="footer-link">
                About
              </a>
            </li>
            <li className="footer-menu-divider list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="#services" className="footer-link">
                Services
              </a>
            </li>
            <li className="footer-menu-divider list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
          <p className="copyright text-muted small">
            Copyright &copy; Your Company 2017. All Rights Reserved
          </p>
        </div>
      </footer>
    );
  }
}
