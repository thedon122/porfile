import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './components/HomePage'
>>>>>>> 76f5f0a08ce578e24b68d5efdcec3c181e3420a2
import './App.css';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
=======
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
>>>>>>> 76f5f0a08ce578e24b68d5efdcec3c181e3420a2
    );
  }
}

export default App;
