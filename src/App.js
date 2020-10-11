import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './LandingPage';
import Login from './Login';
import Profile from './Profile';



function App() {
  //BEM
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Login} />
        <Route exact path="/landingPage" component={LandingPage} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    </div>
  );
}

export default App;
