import React from "react";
import { connect } from "react-redux";
import { requestRepos, changeQuery } from "../../data/actions";


// lol
function onEnterDo(fn, history) {
  return function(e) {
    if (e.charCode === 13) {
      fn(e.target.value)
      history.push(`/${e.target.value}`);
    }
  };
}

class Search extends React.Component {
  componentDidMount() {
    if (this.props.query) {
      this.props.onSearch(this.props.query);
    }
  }

  componentWillReceiveProps(props) {
    if (props.onSearch) {
      // the original plan was to use this lifecycle hook
      // for fetching data on the server side
      // didn't work out tho
      props.onSearch(props.query);
    }
  }

  render() {
    const { onUpdate, history, query } = this.props;
    return <input type="search" defaultValue={query} onKeyPress={onEnterDo(onUpdate, history)} />;
  }
}

const mapStateToProps = ({ query }) => ({
  query
});

const mapDispatchToProps = dispatch => ({
  onSearch: query => dispatch(requestRepos(query)),
  onUpdate: q => dispatch(changeQuery(q))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
