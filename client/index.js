import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import About from './components/About/About';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import { Provider } from 'react-redux'
import configureStore from './Redux/store';

ReactDOM.render(
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path='/about' component={About}/>
        </Switch>
      </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();

