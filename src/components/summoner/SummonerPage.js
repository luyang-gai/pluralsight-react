import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as currentMatchActions from '../../actions/currentMatchActions';
import CardWrapper from './CardWrapper';
import SummonerInfoCard from './SummonerInfoCard';
import CardContainer from './CardContainer';

class SummonerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentMatch: {},
      errors: {}
    };
  }

  render() {
    return (
      <CardContainer>
        {this.props.currentMatch.participants.map(participant =>
          <CardWrapper>
            <SummonerInfoCard participant={participant}/>
          </CardWrapper>
        )}
      </CardContainer>
    );
  }
}

// {this.props.currentMatch.participants.map(keyValue =>
//   <StatBox stat={keyValue} value={this.props.currentMatch.participants[keyValue]['championId']}/>
// )}

function mapStateToProps(state, ownProps) {
  debugger;
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
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SummonerPage);
