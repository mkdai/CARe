import React from 'react';

export default class NavBar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <nav className="navbar navbar-default navbar-expand-lg fixed-top">
                <div className="container">
                <a className="navbar-brand" href="#">CARe</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">Menu</span>
                </button>
                <div className="collapse navbar-collapse navbar-default" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}