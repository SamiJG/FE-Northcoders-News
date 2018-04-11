import React, { Component } from 'react';
import API from '../api';
import moment from 'moment';
import Voter from './Voter';

class Comment extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    API.fetchUsers().then(users => this.setState({ users: users }));
  }
  deleteComment = commentId => {
    API.deleteComment(commentId).then(data => this.props.refreshComments());
  };

  render() {
    const { created_by, _id, created_at, body, votes } = this.props.comment;
    const { users } = this.state;
    const timeSincePosted = 'sometime';
    return (
      <div
        className="comment text-left border border-warning container-fluid row "
        key={_id}
      >
        <Voter id={_id} type="comment" votes={votes} />

        <div>
          <button
            className="float-right"
            onClick={() => this.deleteComment(_id)}
          >
            &times;
          </button>
          <p>{`${created_by.username} | ${moment(created_at).fromNow()}`}</p>

          <p>{body}</p>
        </div>
      </div>
    );
  }
}

export default Comment;
