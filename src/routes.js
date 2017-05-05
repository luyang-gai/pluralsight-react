import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import SummonerSearchPage from './components/summoner/SummonerSearchPage';
import SummonerPage from './components/summoner/SummonerPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="summonerSearch" component={SummonerSearchPage}/>
    <Route path="summoner" component={SummonerPage}/>
  </Route>
);
