import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './containers/App';

import SummonerPage from './containers/SummonerPage/SummonerPage';

export default (
  <div>
    <Route exact path="/" component={App}/>
    <Route path="/summoner/:summonerName" component={SummonerPage}/>
  </div>
);
