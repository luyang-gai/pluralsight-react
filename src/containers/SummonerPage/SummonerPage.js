import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import SummonerInfoCard from '../../components/SummonerInfoCard/index';
import CardContainer from '../../components_old/summoner/CardContainer';
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
    this.props.loadCurrentGame(this.props.routeParams.summonerName);
  }

  render() {
    return (
      <Loader loaded={!!this.props.currentMatch.participants}>
        <CardContainer>
          {
            this.props.currentMatch.participants &&
            this.props.currentMatch.participants.map(participant =>
              <SummonerInfoCard key={participant.summonerId} participant={participant}/>
            )
          }
        </CardContainer>
      </Loader>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentMatch: state.currentMatch
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCurrentGame: (name) => dispatch(loadCurrentGame(name))
  };
}

SummonerPage.propTypes = {
  routeParams: PropTypes.object.isRequired,
  currentMatch: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SummonerPage);
