import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
