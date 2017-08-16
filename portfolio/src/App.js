import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Header';
import Projects from './components/Projects';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
