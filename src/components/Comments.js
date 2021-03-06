import React, { Component } from 'react';
import API from '../api';
import ArticleWithBody from './ArticleWithBody';
import Comment from './Comment';
// import './App.css';

class Comments extends Component {
  state = {
    article: {},
    comments: []
  };
  componentDidMount() {
    this.fetchArticleAndComments();
  }
  fetchArticleAndComments = () => {
    const { articleId } = this.props.match.params;
    return API.fetchArticleAndComments(articleId).then(data => {
      this.setState({ article: data.article, comments: data.comments });
    });
  };

  render() {
    const { article, comments } = this.state;
    const commentCount = comments.length;
    const { match } = this.props;
    return comments[0] ? (
      <div className="article-and-comments">
        <div className="single-article bg-warning">
          <ArticleWithBody
            article={article}
            commentCount={commentCount}
            refreshComments={this.fetchArticleAndComments}
          />
        </div>
        <h4 className="bg-dark text-light">Comments</h4>
        <div>
          {comments
            .sort((a, b) => b.created_at - a.created_at)
            .map(comment => (
              <Comment
                comment={comment}
                key={comment._id}
                refreshComments={this.fetchArticleAndComments}
              />
            ))}
        </div>
      </div>
    ) : null;
  }
}

export default Comments;
