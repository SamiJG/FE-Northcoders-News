import React, { Component } from 'react';
import API from './api';
// import './App.css';

class Voter extends Component {
  state = {
    votes: this.props.votes
  };

  voteUp = (id, type) => {
    if (type === 'article')
      API.voteArticleUp(id).then(votes =>
        this.setState({
          votes: votes
        })
      );
    if (type === 'comment')
      API.voteCommentUp(id).then(votes =>
        this.setState({
          votes: votes
        })
      );
  };

  voteDown = (id, type) => {
    if (type === 'article')
      API.voteArticleDown(id).then(votes =>
        this.setState({
          votes: votes
        })
      );
    if (type === 'comment')
      API.voteCommentDown(id).then(votes =>
        this.setState({
          votes: votes
        })
      );
  };

  render() {
    const { id, type, votes } = this.props;
    return (
      <div className="voter align-self-center d-block">
        <div onClick={() => this.voteUp(id, type)}>
          <i className="fa fa-thumbs-up text-success" />
        </div>
        {this.state.votes}
        <div onClick={() => this.voteDown(id, type)} className="vote-down">
          <i className="fa fa-thumbs-down text-danger" />
        </div>
      </div>
    );
  }
}

export default Voter;
