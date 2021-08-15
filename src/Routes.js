import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import Petdetailsdogs from './Petdetailsdogs';
import Petdetailscats from './Petdetailscats';
import Doglist from './Doglist';
import Catlist from './Catlist';
import Home from './Home';
import Adopt from './Adopt';
import Contact from './Contact';


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact path="/"
                    render={() => <Home dogs={this.props.dogs} cats={this.props.cats} />} />
                <Route
                    exact path="/Dogs"
                    render={() => <Doglist dogs={this.props.dogs} />} />
                <Route
                    exact path="/Dogs/:name"
                    render={(routeProps) => <Petdetailsdogs {...routeProps} pets={this.props.dogs} />} />
                <Route
                    exact path="/Cats"
                    render={() => <Catlist cats={this.props.cats} />} />
                <Route
                    exact path="/Cats/:name"
                    render={(routeProps) => <Petdetailscats {...routeProps} pets={this.props.cats} />} />
                <Route
                    exact path="/Adopt"
                    render={() => <Adopt />} />
                <Route
                    exact path="/Contact"
                    render={() => <Contact />} />
                <Redirect to="/" />

            </Switch>
        );
    }
}

export default Routes;
