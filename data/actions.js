import * as github from "../api/github";

export const ADD_REPOS = Symbol("ADD_REPOS");
export const CHANGE_QUERY = Symbol("CHANGE_QUERY");

function _addRepos(repos = []) {
  return {
    type: ADD_REPOS,
    repos
  };
}

function _changeQuery(query) {
  return {
    type: CHANGE_QUERY,
    query
  };
}

export function changeQuery(q) {
  return function(dispatch) {
    return dispatch(_changeQuery(q));
  };
}

export function requestRepos(query = "react") {
  return function(dispatch) {
    github.fetchRepos(query).then(repos => dispatch(_addRepos(repos)));
  };
}
