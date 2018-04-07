import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import TopicPage from './components/TopicPage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/topics/:topic" component={TopicPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
