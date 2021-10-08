import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { WatchList } from './components/WatchList';
import { Watched } from './components/Watched';
import { Add } from './components/Add';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <WatchList />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
