import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsContainer from '../../containers/Details/DetailContainer';
import ListContainer from '../../containers/List/ListContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
        exact path='/'
        component={ListContainer}
        />
        <Route
        exact path='/:id'
        component={DetailsContainer}
        />
      </Switch>
    </Router>
  )
}
