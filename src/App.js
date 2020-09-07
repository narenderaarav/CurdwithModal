import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Curd from './Curd'
import UserView from './UserView';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Curd}/>
        <Route exact path="/userView/:id" component={UserView}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
