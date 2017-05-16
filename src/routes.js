import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components_old/App';

import HomePage from './components_old/home/HomePage';
import SummonerPage from './components_old/summoner/SummonerPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="summoner/:summonerName" component={SummonerPage}/>
  </Route>
);
