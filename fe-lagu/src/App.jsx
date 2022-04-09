import './App.css';
import React from 'react';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = () => (
  <div className="App">
    <Router>
      <section>
      <Home/>
      </section>
    </Router>
  </div>
);

