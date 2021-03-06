import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Authorization } from '../Authorization/Authorization';
import { Error } from '../Error/Error';
import { currentPath } from './currentPath';

export const Direction = () => {
    return (
        <Router>
            <Switch>
                <Route 
                    exact path="/" 
                    render={currentPath}
                />
                <Route 
                    path="/authorization" 
                    component={Authorization} 
                />
                <Route 
                    path="/search" 
                    render={currentPath}
                />
                <Route component={Error} />
            </Switch> 
        </Router>
    );
}