import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage.jsx';
<<<<<<< HEAD
import LoadingPage from './loadingPage/LoadingPage.jsx';
import Auth from '../../Auth/Auth.js';
=======
import ShopProfilePage from '../containers/shopProfilePage/ShopProfilePage.jsx';
>>>>>>> Create shop Profile Appointments component

class App extends Component {
    constructor(props){
        super(props);
        this.auth = new Auth();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
<<<<<<< HEAD
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/loadingpage" render={() => <LoadingPage auth={this.auth} />} />
=======
                    <Route exact path="/" component={ShopProfilePage} />
>>>>>>> Create shop Profile Appointments component
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;