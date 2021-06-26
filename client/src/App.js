import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navigation';
import News from './Pages/News/News'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/news" component={News}/>
      </Switch>
    </div>
  );
}

export default App;
