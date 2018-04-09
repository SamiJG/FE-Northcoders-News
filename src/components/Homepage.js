import React, { Component } from 'react';
import HomepageHeader from './HomepageHeader';
// import FilterBar from './FilterBar';
import Articles from './Articles';
import Login from './Login';

class Homepage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="homepage">
        <HomepageHeader />
        {/* <FilterBar /> */}
        <div className="container-fluid row">
          <Articles match={match} />
          <Login />
        </div>
      </div>
    );
  }
}

export default Homepage;
