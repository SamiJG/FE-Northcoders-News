import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import API from '../api';
import Voter from './Voter';

class Article extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    API.fetchUsers().then(users => this.setState({ users: users }));
  }

  render() {
    const {
      title,
      _id,
      created_by,
      comments,
      created_at,
      votes
    } = this.props.article;
    const { users } = this.state;
    const timeSincePosted = 'sometime';
    const userImage =
      users[0] && users.find(user => user.username === created_by).avatar_url;
    return (
      <div
        className="article text-left border border-warning container-fluid row "
        key={_id}
      >
        <Voter id={_id} type="article" votes={votes} />
        <img
          className="user-avatar-thumbnail align-self-center m-2"
          src={userImage}
          alt="user avatar"
          onError={e => {
            e.target.src = 'https://keypointintelligence.com/img/anonymous.png';
          }}
        />
        <div>
          <p>
            <NavLink to={`/articles/${_id}`}>{title}</NavLink>
          </p>
          <p>{`Submitted ${moment(created_at).fromNow()} by ${created_by}`}</p>
          <p>{`${comments} comments`}</p>
        </div>
      </div>
    );
  }
}

export default Article;
