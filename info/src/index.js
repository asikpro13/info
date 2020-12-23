import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Header';
import LK from './LK/auth'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route  path='/lk' component={LK}/>
        </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
