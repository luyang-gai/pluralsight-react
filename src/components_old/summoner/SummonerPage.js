import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as currentMatchActions from '../../actions/currentMatchActions';
import CardWrapper from './CardWrapper';
import SummonerInfoCard from './SummonerInfoCard';
import CardContainer from './CardContainer';
import Spinner from '../common/Spinner';
import Loader from '../HOC/Loader';

class SummonerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentMatch: {},
      errors: {}
    };

    this.getCurrentMatch = this.getCurrentMatch.bind(this);
    this.getCurrentMatch(props.routeParams.summonerName);
  }

  getCurrentMatch() {
    this.props.actions.mockGetCurrentGame(this.state.summonerName)
      .then((data) => {
        console.log('test');
      })
      .catch(error => {
        console.log(`error received :( ${error}`);
      });
  }

  render() {
    if (this.props.currentMatch.participants) {
      return (
        <CardContainer>
          {this.props.currentMatch.participants.map(participant =>
            <CardWrapper>
              <SummonerInfoCard participant={participant}/>
            </CardWrapper>
          )}
        </CardContainer>
      );
    } else {
      return (
        <Spinner/>
      );
    }
  }
}

// return (
//   <CardContainer>
//     {
//       this.props.currentMatch.participants.map(participant =>
//         <CardWrapper>
//           <SummonerInfoCard participant={participant}/>
//         </CardWrapper>
//       )}
//   </CardContainer>
// )

// {this.props.currentMatch.participants.map(keyValue =>
//   <StatBox stat={keyValue} value={this.props.currentMatch.participants[keyValue]['championId']}/>
// )}

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
