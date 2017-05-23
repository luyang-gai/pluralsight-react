import React, {PropTypes} from 'react';

import SearchBar from '../../components/SearchBar/index';
import Button from '../../components/Button/index';
import Wrapper from './Wrapper';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as summonerActions from '../../actions/summonerActions';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      summonerName: ""
    };

    this.updateSummonerName = this.updateSummonerName.bind(this);
    this.navigateToSummonerPage = this.navigateToSummonerPage.bind(this);
  }

  updateSummonerName(event) {
    return this.setState({summonerName: event.target.value});
  }

  navigateToSummonerPage() {
    this.context.router.push(`/summoner/${this.state.summonerName}`);
  }

  render() {
    return (
      <Wrapper>
        <Button onClick=""></Button>
        <SearchBar onSubmit={this.navigateToSummonerPage} onChange={this.updateSummonerName}/>
      </Wrapper>
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

Header.propTypes = {
  actions: PropTypes.object.isRequired
};

Header.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
