import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';

import HomePage from './containers/home/HomePage';
import SummonerPage from './containers/SummonerPage/SummonerPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="summoner/:summonerName" component={SummonerPage}/>
  </Route>
);
