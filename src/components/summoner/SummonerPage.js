import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as summonerActions from '../../actions/summonerActions';

class SummonerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      summoner: {},
      errors: {}
    };

  }

  render() {
    debugger;
    console.log(`this.props.summoner: ${this.props.summoner}`);
    return (
      <div className="jumbotron">
        <div>Summoner information: {this.props.summoner.summonerLevel}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    summoner: state.summoner
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(summonerActions, dispatch)
  };
}

SummonerPage.propTypes = {
  summonerName: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SummonerPage);
