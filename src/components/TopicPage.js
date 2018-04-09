import React, { Component } from 'react';
import TopicPageHeader from './TopicPageHeader';
// import FilterBar from './FilterBar';
import Articles from './Articles';
import Login from './Login';

class TopicPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="topic-page">
        <div>
          <TopicPageHeader match={match} />
        </div>
        {/* <FilterBar /> */}
        <div className="container-fluid row">
          <Articles match={match} />
          <Login />
        </div>
      </div>
    );
  }
}

export default TopicPage;
