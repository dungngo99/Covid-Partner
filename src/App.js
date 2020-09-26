import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Routes from './containers/routes'
import Navigation from './containers/Navigation/index'

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes></Routes>
    </Router>
  );
}

export default App;
