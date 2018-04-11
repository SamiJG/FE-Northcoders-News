import axios from 'axios';
const API_ROUTE = 'https://nc-news-sami.herokuapp.com/api';

const API = {
  fetchTopics: () => {
    return axios.get(`${API_ROUTE}/topics`).then(topics => topics.data.topics);
  },
  fetchArticlesForTopic: topic => {
    return axios
      .get(`${API_ROUTE}/topics/${topic}/articles`)
      .then(response => response.data);
  },
  fetchArticles: () => {
    return axios
      .get(`${API_ROUTE}/articles`)
      .then(articles => articles.data.articles);
  },
  fetchArticleAndComments: articleId => {
    return axios
      .get(`${API_ROUTE}/articles/${articleId}/comments`)
      .then(response => response.data);
  },
  addArticle: () => {},

  voteArticleUp: articleId => {
    return axios
      .put(`${API_ROUTE}/articles/${articleId}?vote=up`)
      .then(updatedArticle => updatedArticle.data.votes);
  },

  voteArticleDown: articleId => {
    return axios
      .put(`${API_ROUTE}/articles/${articleId}?vote=down`)
      .then(updatedArticle => updatedArticle.data.votes);
  },
  voteCommentUp: commentId => {
    return axios
      .put(`${API_ROUTE}/comments/${commentId}?vote=up`)
      .then(updatedComment => updatedComment.data.votes);
  },
  voteCommentDown: commentId => {
    return axios
      .put(`${API_ROUTE}/comments/${commentId}?vote=down`)
      .then(updatedComment => updatedComment.data.votes);
  },
  deleteComment: () => {},
  fetchUsers: () => {
    return axios.get(`${API_ROUTE}/users`).then(users => users.data.users);
  },
  fetchUserAndArticles: username => {
    return axios
      .get(`${API_ROUTE}/users/${username}/articles`)
      .then(response => response.data);
  }
};

export default API;
