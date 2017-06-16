import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SummonerInfoCard from '../../components/SummonerInfoCard/index';
import CardContainer from '../../components/CardContainer';
import Loader from '../../components/Loader/index';
import {loadCurrentGame} from '../../actions/currentMatchActions';

class SummonerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentMatch: {}
    };
  }

  componentDidMount() {
    this.props.loadCurrentGame(this.props.match.params.summonerName);
  }

  render() {
    return (
      <div>
        <Loader loaded={!this.props.loading}>
          <CardContainer>
            {
              this.props.currentMatch.participants &&
              this.props.currentMatch.participants.map(participant =>
                <SummonerInfoCard key={participant.summonerId} participant={participant}/>
              )
            }
          </CardContainer>
        </Loader>
        {
          !this.props.loading && !this.props.currentMatch.participants &&
          <div>That summoner is not currently in a game that has started</div>
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentMatch: state.currentMatch,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCurrentGame: (name) => dispatch(loadCurrentGame(name))
  };
}

SummonerPage.propTypes = {
  routeParams: PropTypes.object.isRequired,
  currentMatch: PropTypes.object.isRequired,
  loadCurrentGame: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SummonerPage);
