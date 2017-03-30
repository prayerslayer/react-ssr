import React from "react";
import { connect } from "react-redux";

const RepoList = ({ repos }) => {
  return repos && repos.length
    ? <ul>
        {repos.map(repo => (
          <li key={repo.id}><a href={repo.html_url}>{repo.full_name}</a></li>
        ))}
      </ul>
    : <div>No repos 🤔</div>;
};

const mapStateToProps = state => ({
  repos: state.repos
});

export default connect(mapStateToProps)(RepoList);
