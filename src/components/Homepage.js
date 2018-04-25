import React, { Component } from 'react';
import HomepageHeader from './HomepageHeader';
// import FilterBar from './FilterBar';
import Articles from './Articles';

class Homepage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="homepage">
        <HomepageHeader />
        {/* <FilterBar /> */}
        <div className="container-fluid">
          <Articles match={match} />
        </div>
      </div>
    );
  }
}

export default Homepage;
