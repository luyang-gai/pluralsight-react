import React from 'react';
import { Route } from 'react-router-dom';
import Async from 'react-code-splitting';
// import App from './containers/App';

import SummonerPage from './containers/SummonerPage/SummonerPage';

const App = () => <Async load={import('./containers/App')}/>;

export default (
  <div>
    <Route exact path="/" component={App}/>
    <Route path="/summoner/:summonerName" component={SummonerPage}/>
  </div>
);
