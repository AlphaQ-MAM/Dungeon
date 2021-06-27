import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navigation';
import News from './Pages/News/News'
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';
import './App.css';
import Merchandise from './Pages/Merchandise/Merchandise';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/leader" component={LeaderBoard} />
        <Route exact path="/merch" component={Merchandise} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
