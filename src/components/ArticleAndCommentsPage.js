import React, { Component } from 'react';
import HomepageHeader from './HomepageHeader';
// import FilterBar from './FilterBar';
import Comments from './Comments';

class ArticleAndCommentPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="article-and-comments-page">
        <div>
          <HomepageHeader />
        </div>
        {/* <FilterBar /> */}
        <div className="container-fluid">
          <Comments match={match} />
        </div>
      </div>
    );
  }
}

export default ArticleAndCommentPage;
