import React, { Component } from 'react';
import API from './api';
import ArticleWithBody from './ArticleWithBody';
import Comment from './Comment';
// import './App.css';

class Comments extends Component {
  state = {
    article: {},
    comments: []
  };
  componentDidMount() {
    const { articleId } = this.props.match.params;
    API.fetchArticleAndComments(articleId).then(data => {
      this.setState({
        article: data.article,
        comments: data.comments
      });
    });
  }

  render() {
    const { article, comments } = this.state;
    const commentCount = comments.length;
    const { match } = this.props;
    return comments[0] ? (
      <div className="article-and-comments col-md-9">
        <div className="single-article bg-warning">
          <ArticleWithBody article={article} commentCount={commentCount} />
        </div>
        <h4 className="bg-dark text-light">Comments</h4>
        {comments
          .sort((a, b) => b.created_at - a.created_at)
          .map(comment => <Comment comment={comment} key={comment._id} />)}
      </div>
    ) : null;
  }
}

export default Comments;
