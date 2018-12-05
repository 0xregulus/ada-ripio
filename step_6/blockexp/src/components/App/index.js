import React, { Component } from 'react';
import logo from './logos.png';
import './style.css';
import Block from './../Block';
import Home from './../Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo2" alt="logo" />
          <h2>Block Explorer</h2>
        </div>
        <div className="App-nav">
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/block/:blockHash" component={Block}/>
            </div>
        </Router>
        </div>
      </div>
    );
  }
}
export default App;
