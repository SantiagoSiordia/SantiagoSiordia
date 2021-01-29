import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Author, Home, Banner } from './components';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Banner />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Author' exact component={Author} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;