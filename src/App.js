import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, Author, Home } from './components';
import ParticlesBg from 'particles-bg';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Author' exact component={Author} />
        </Switch>
      </Router>
      <ParticlesBg type="cobweb" color='#062625' bg={true} />
    </div>
  );
};

export default App;