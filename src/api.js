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

  changeVote: (id, type, direction) => {
    return axios
      .put(`${API_ROUTE}/${type}s/${id}?vote=${direction}`)
      .then(updatedVote => updatedVote.data.votes);
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
