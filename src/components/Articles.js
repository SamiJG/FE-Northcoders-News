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
              i < 10 ? <Article article={article} key={i} /> : ''
          )}
      </div>
    );
  };

  getArticlesByTopic = (articles, location) => {
    const topic = location.pathname.split('/').reverse()[0];
    console.log(articles);
    return (
      <div>
        <h4>{topic}</h4>
        {articles.filter()}
      </div>
    );
  };

  render() {
    const { articles } = this.state;
    const { location } = this.props;

    return (
      <div className="Articles col-md-9">
        {location.pathname === '/' && this.getTopTenArticles(articles)}
        {/^\/topics\//.test(location.pathname) &&
          this.getArticlesByTopic(articles, location)}
      </div>
    );
  }
}

export default Articles;
