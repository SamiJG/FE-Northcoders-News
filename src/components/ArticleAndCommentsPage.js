import React, { Component } from 'react';
import HomepageHeader from './HomepageHeader';
// import FilterBar from './FilterBar';
import Comments from './Comments';
import Login from './Login';

class ArticleAndCommentPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="article-and-comments-page">
        <div>
          <HomepageHeader />
        </div>
        {/* <FilterBar /> */}
        <div className="container-fluid row">
          <Comments match={match} />
          <Login />
        </div>
      </div>
    );
  }
}

export default ArticleAndCommentPage;
