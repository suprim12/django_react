import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePasge}></Route>
        <Route path="/about" component={AboutPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
