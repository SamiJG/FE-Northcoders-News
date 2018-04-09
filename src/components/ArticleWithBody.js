import React, { Component } from 'react';
import API from './api';
import Voter from './Voter';

class ArticleWithBody extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    API.fetchUsers().then(users => this.setState({ users: users }));
  }

  render() {
    const { title, _id, created_by, body } = this.props.article;
    const commentCount = this.props.commentCount;
    const { users } = this.state;
    const timeSincePosted = 'sometime';
    const userImage =
      users[0] &&
      users.find(user => user.username === created_by.username).avatar_url;
    return (
      <div
        className="article text-left border border-warning container-fluid row "
        key={_id}
      >
        <Voter articleWithBodyId={_id} />
        <img
          className="user-avatar-thumbnail align-self-center m-2"
          src={userImage}
          alt="user avatar"
          onError={e => {
            e.target.src = 'https://keypointintelligence.com/img/anonymous.png';
          }}
        />
        <div>
          <p>{title}</p>
          <p>{body}</p>
          <p>
            {`${commentCount} comments`} |{' '}
            {`Submitted ${timeSincePosted} ago by ${created_by.username}`}
          </p>
        </div>
      </div>
    );
  }
}

export default ArticleWithBody;
