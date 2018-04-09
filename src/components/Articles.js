import React, { Component } from 'react';
import API from './api';
import Article from './Article';
// import './App.css';

class Articles extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    API.fetchArticles().then(articles => this.setState({ articles: articles }));
  }

  getTopTenArticles = articles => {
    return (
      <div>
        <h4>Top 10 Most Popular Articles</h4>
        {articles
          .sort((a, b) => b.votes - a.votes)
          .map(
            (article, i) =>
              i < 10 ? <Article article={article} key={article._id} /> : ''
          )}
      </div>
    );
  };

  getArticlesByTopic = (articles, topic) => {
    return (
      <div>
        {articles
          .filter(article => article.topic === topic)
          .map(article => <Article article={article} key={article._id} />)}
      </div>
    );
  };

  render() {
    const { articles } = this.state;
    const { match } = this.props;
    const topic = match.params.topic;
    return (
      <div className="articles col-md-9">
        {match.path === '/' && this.getTopTenArticles(articles)}
        {/^\/topics\//.test(match.path) &&
          this.getArticlesByTopic(articles, topic)}
      </div>
    );
  }
}

export default Articles;
