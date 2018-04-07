import React, { Component } from 'react';
import Header from './Header';
// import FilterBar from './FilterBar';
import Articles from './Articles';
import Login from './Login';

class Homepage extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="homepage">
        <Header />
        {/* <FilterBar /> */}
        <div className="container-fluid row">
          <Articles location={location} />
          <Login />
        </div>
      </div>
    );
  }
}

export default Homepage;
