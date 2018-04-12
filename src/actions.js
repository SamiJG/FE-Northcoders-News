/*
 * action types
 */

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const CHANGE_VOTE = 'CHANGE_VOTE';
export const POPULATE_TOPICS = 'POPULATE_TOPICS';
export const POPULATE_ARTICLES = 'POPULATE_ARTICLES';
export const POPULATE_COMMENTS = 'POPULATE_COMMENTS';
export const POPULATE_USERS = 'POPULATE_USERS';
// export const POPULATE_TARGET_ARTICLE = 'POPULATE_TARGET_ARTICLE';

/*
 * other constants
 */

/*
 * action creators
 */

export function addComment(articleId, comment) {
  return { type: ADD_COMMENT, articleId, comment };
}
export function deleteComment(commentId) {
  return { type: DELETE_COMMENT, commentId };
}
export function changeVote(id, content, direction) {
  return { type: CHANGE_VOTE, id, content, direction };
}
export function populateTopics() {
  return { type: POPULATE_TOPICS };
}
export function populateArticles() {
  return { type: POPULATE_ARTICLES };
}
export function populateComments() {
  return { type: POPULATE_COMMENTS };
}
export function populateUsers() {
  return { type: POPULATE_USERS };
}
// export function populateTargetArticle(articleId) {
//          return { type: POPULATE_TARGET_ARTICLE, articleId };
//        }
