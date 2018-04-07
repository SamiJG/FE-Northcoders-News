import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import API from './api';
// import './App.css';

class Navbar extends Component {
  state = {
    topics: []
  };
  componentDidMount() {
    API.fetchTopics().then(topics => this.setState({ topics: topics }));
  }
  render() {
    const { topics } = this.state;
    return (
      <div className="topic-bar fixed-top">
        <Topics topics={topics} />
      </div>
    );
  }
}

const Topics = ({ topics, match }) => {
  return (
    <ul className="topics navbar navbar-nav navbar-expand-lg mr-auto">
      <li className="nav-item active pr-3 pl-1">
        <NavLink to={`/`}>Home</NavLink>
      </li>
      {topics.map((topic, i) => (
        <li className="nav-item pr-3" key={i}>
          <NavLink to={`/topics/${topic.slug}`}>{topic.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
