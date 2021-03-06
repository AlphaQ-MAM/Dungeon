import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navigation';
import News from './Pages/News/News'
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';
import './App.css';
import Merchandise from './Pages/Merchandise/Merchandise';
import Tournament from './Pages/Tournments';
import Error from './Pages/404';


import CompleteAgentPage from './Pages/Agents/CompleteAgentPage';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/leader" component={LeaderBoard} />
        <Route exact path="/merch" component={Merchandise} />
        <Route exact path="/agents" component={CompleteAgentPage}/>
        <Route exact path="/tournaments" component={Tournament} />
        <Route component={Error}/>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
