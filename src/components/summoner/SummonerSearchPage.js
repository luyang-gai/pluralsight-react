import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as summonerActions from '../../actions/summonerActions';
import SearchBar from '../common/SearchBar';

class SummonerSearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      summonerName: "",
      errors: {}
    };

    this.updateSummonerName = this.updateSummonerName.bind(this);
    this.search = this.search.bind(this);
  }

  updateSummonerName(event) {
    return this.setState({summonerName: event.target.value});
  }

  search(event) {
    event.preventDefault();

    this.props.actions.mockGetRankedStats(this.state.summonerName)
      .then((data) => {
        this.redirect();
      })
      .catch(error => {x
        console.log(`error received :( ${error}`);
      });
  }

  redirect() {
    this.context.router.push('/summoner');
  }

  render() {
    return (
      <div className="jumbotron">
        <SearchBar
          summoner={this.props.summonerName}
          onSubmit={this.search}
          onChange={this.updateSummonerName}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    summonerName: state.summonerName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(summonerActions, dispatch)
  };
}

SummonerSearchPage.propTypes = {
  summonerName: PropTypes.string.isRequired
};

SummonerSearchPage.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(SummonerSearchPage);
