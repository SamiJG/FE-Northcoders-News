/*
STATE
topics: [{}, {}],
articles: [{}, {}],
comments: [{}, {}],
users: [{}, {}]
*/

import { combineReducers } from 'redux';
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_VOTE,
  POPULATE_TOPICS,
  POPULATE_ARTICLES,
  POPULATE_COMMENTS,
  POPULATE_USERS
} from './actions';

function topics(state = [], action) {
  switch (action.type) {
    case POPULATE_TOPICS:
      return [...state /*, ...ALL THE TOPICS*/];
    default:
      return state;
  }
}

function articles(state = [], action) {
  switch (action.type) {
    case POPULATE_ARTICLES:
      return [...state /*, ...ALL THE ARTICLES*/];
    case CHANGE_VOTE:
      return state.map(article => {
        if (article._id === action.id) {
          return Object.assign({}, article, {
            votes: action.direction === up ? votes + 1 : votes - 1
          });
        }
        return action;
      });
    default:
      return state;
  }
}
function comments(state = [], action) {
  switch (action.type) {
    case POPULATE_COMMENTS:
      return [...state /*, ...ALL THE COMMENTS*/];
    case CHANGE_VOTE:
      return state.map(comment => {
        if (comment._id === action.id) {
          return Object.assign({}, comment, {
            votes: action.direction === up ? votes + 1 : votes - 1
          });
        }
        return action;
      });
    case ADD_COMMENT:
      return [
        ...state,
        { comment: action.comment, belongs_to: action.articleId }
      ];
    case DELETE_COMMENT:
      return state.filter(comment => comment._id !== action.commentId);
    default:
      return state;
  }
}
function users(state = [], action) {
  switch (action.type) {
    case POPULATE_USERS:
      return [...state /*, ...ALL THE S*/];
    default:
      return state;
  }
}

const NCNewsApp = combineReducers({
  topics,
  articles,
  comments,
  users
});
export default NCNewsApp;
