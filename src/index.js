import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import App from './containers/App';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
