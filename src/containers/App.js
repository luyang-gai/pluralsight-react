import React, {PropTypes} from 'react';
import Header from '../components/Header/index';
import {connect} from 'react-redux';

import SummonerPage from '../containers/SummonerPage/SummonerPage';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <div>
          {/*<Route path="/" component={HomePage}/>*/}
          <Route path="/summoner/:summonerName" component={SummonerPage}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
