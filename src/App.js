import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider} from 'styled-components';
import './App.css';
import Routes from './containers/routes'
import Navigation from './containers/Navigation/index'
import AlertMsg from './containers/Alert/index'
import './bootstrap-override.css';

const theme = {
  peach: '#fbe8a6',
  brick: '#f4976c',
  darkblue: '#303c6c',
  blue: '#b4dfe5',
  lightblue: '#d2fdff'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation></Navigation>
        <AlertMsg></AlertMsg>
        <Routes></Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
