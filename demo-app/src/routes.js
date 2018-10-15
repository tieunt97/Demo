import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from './App';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/signin" component={SignIn} />
        </Route>
    </Router>
);