import { ADD_REPOS, CHANGE_QUERY } from "./actions";

const INITAL_STATE = { repos: [], query: "react" };

export default function(state = INITAL_STATE, action) {
  if (action.type === ADD_REPOS) {
    state = Object.assign({}, state, {
      repos: action.repos
    });
  } else if (action.type === CHANGE_QUERY) {
    state = Object.assign({}, state, { query: action.query });
  }
  return state;
}
