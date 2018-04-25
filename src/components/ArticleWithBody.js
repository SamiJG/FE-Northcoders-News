import React, { Component } from 'react';
import moment from 'moment';
import API from '../api';
import Voter from './Voter';

class ArticleWithBody extends Component {
  state = {
    users: [],
    newComment: ''
  };

  componentDidMount() {
    API.fetchUsers().then(users => this.setState({ users: users }));
  }

  handleChange = e => {
    this.setState({ newComment: e.target.value });
  };
  addComment = id => {
    const commentBody = {
      body: this.state.newComment
    };
    API.addComment(id, commentBody)
      .then(data =>
        this.setState({
          newComment: ''
        })
      )
      .then(data => this.props.refreshComments());
  };
  render() {
    const {
      title,
      _id,
      created_at,
      created_by,
      body,
      votes
    } = this.props.article;
    const commentCount = this.props.commentCount;
    const { users, newComment } = this.state;
    const userImage =
      users[0] &&
      users.find(user => user.username === created_by.username).avatar_url;
    return (
      <div
        className="article text-left border border-warning container-fluid my-1"
        key={_id}
      >
        <div className="row align-items-center mx-1">
          <Voter id={_id} type="article" votes={votes} />
          <img
            className="user-avatar-thumbnail align-self-center mx-4"
            src={userImage}
            alt="user avatar"
            onError={e => {
              e.target.src =
                'https://keypointintelligence.com/img/anonymous.png';
            }}
          />
          <div>
            <p>{title}</p>
          </div>
          <p>{body}</p>
          <p>
            {`${commentCount} comments`} |{' '}
            {`Submitted ${moment(created_at).fromNow()} ago by ${
              created_by.username
            }`}
          </p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              onChange={this.handleChange}
              className="form-control"
              rows="4"
              id="add-comment"
              placeholder="What are your thoughts?"
              value={this.state.newComment}
            />
          </div>
          <button
            onClick={() => this.addComment(_id)}
            type="button"
            className="btn btn-info my-1"
          >
            Add Comment
          </button>
        </form>
      </div>
    );
  }
}

export default ArticleWithBody;
