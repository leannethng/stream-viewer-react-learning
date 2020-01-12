import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Games from './components/Games';
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
    </Router>
  );
}

export default App;
