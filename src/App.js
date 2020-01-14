import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Games from './components/Games';
import GameStreams from './components/GameStreams';
import Stream from './components/Streams';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
     
      <Route exact path = '/' component={Games}/>
      <Route exact path = '/top-streams' component={Stream}/>
      <Route exact path = '/game/:id' component={GameStreams}/>
    </Router>
  );
}

export default App;
