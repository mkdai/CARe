import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage.jsx';

class App extends Component {
    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;