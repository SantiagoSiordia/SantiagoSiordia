import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Author, Home } from './components';
import ParticlesBg from 'particles-bg';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
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