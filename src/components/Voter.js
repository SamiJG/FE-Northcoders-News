import React, { Component } from 'react';
import API from '../api';
// import './App.css';

class Voter extends Component {
  state = {
    votes: this.props.votes
  };

  updateVote = (id, type, direction) => {
    API.changeVote(id, type, direction).then(votes =>
      this.setState({
        votes: votes
      })
    );
  };

  render() {
    const { id, type, votes } = this.props;
    return (
      <div className="voter align-self-center d-block">
        <div onClick={() => this.updateVote(id, type, 'up')}>
          <i className="fa fa-thumbs-up text-success" />
        </div>
        {this.state.votes}
        <div
          onClick={() => this.updateVote(id, type, 'down')}
          className="vote-down"
        >
          <i className="fa fa-thumbs-down text-danger" />
        </div>
      </div>
    );
  }
}

export default Voter;
