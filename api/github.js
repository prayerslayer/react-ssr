import fetch from "isomorphic-fetch";

export function fetchRepos(query = "") {
  return fetch(`https://api.github.com/search/repositories?q=${query}`, {
    headers: {
      authorization: `token ${process.env.GH_TOKEN}`
    }
  })
    .then(resp => resp.json())
    .then(({ items }) => items);
}
