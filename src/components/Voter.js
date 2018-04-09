import React, { Component } from 'react';
import API from './api';
// import './App.css';

class Voter extends Component {
  state = {
    votes: 0
  };

  handleClick = e => {
    const voteUpOrDown = e.target.parentElement.parentElement.className.split(
      '-'
    )[1];
    // if (voteUpOrDown === 'up') voteUp(id);
    // if (voteUpOrDown === 'down') voteUpOrDown(id);
  };

  render() {
    return (
      <div className="voter align-self-center d-block">
        <div>
          <i onClick={this.handleClick} className="vote-up " />
          <i className="fa fa-thumbs-up" />
        </div>
        {this.state.votes}
        <div onClick={this.handleClick} className="vote-down">
          <i className="fa fa-thumbs-down" />
        </div>
      </div>
    );
  }
}

export default Voter;

function voteUp(id) {
  API.voteArticleUp(id).then(votes =>
    this.setState({
      votes: votes
    })
  );
}

function voteUp(id) {
  API.voteArticleUp(id).then(votes =>
    this.setState({
      votes: votes
    })
  );
}
