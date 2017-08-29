import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage.jsx';
import LoadingPage from './loadingPage/LoadingPage.jsx';
import Auth from '../../Auth/Auth.js';

class App extends Component {
    constructor(props){
        super(props);
        this.auth = new Auth();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/loadingpage" render={() => <LoadingPage auth={this.auth} />} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;