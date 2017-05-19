import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as currentMatchActions from '../../actions/currentMatchActions';
import SummonerInfoCard from '../../components/SummonerInfoCard/index';
import CardContainer from '../../components_old/summoner/CardContainer';
import Loader from '../../components/Loader/index';

class SummonerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentMatch: {}
    };

    this.getCurrentMatch = this.getCurrentMatch.bind(this);
    this.getCurrentMatch(props.routeParams.summonerName);
  }

  getCurrentMatch() {
    this.props.actions.mockGetCurrentGame(this.state.summonerName)
      .then((data) => {

      })
      .catch(error => {
        console.log(`error received :( ${error}`);
      });
  }

  render() {
    return (
      <Loader loaded={this.props.currentMatch.participants}>
        <CardContainer>
          {
            this.props.currentMatch.participants &&
            this.props.currentMatch.participants.map(participant =>
              <SummonerInfoCard participant={participant}/>
            )
          }
        </CardContainer>
      </Loader>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentMatch: state.currentMatch
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(currentMatchActions, dispatch)
  };
}

SummonerPage.propTypes = {
  actions: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  currentMatch: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SummonerPage);
