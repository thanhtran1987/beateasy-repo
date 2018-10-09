import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import { createBrowserHistory } from 'history';

import configureStore from './store/configureStore';
import { initialState } from './store/initialState';
import Home from './Container/Home';

export const history = createBrowserHistory();

injectGlobal`
  body {
    margin: 0;
    background: #fff;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    @media only screen and (min-width: 321px) {
      margin: 0 1.5em;
    }
    @media only screen and (min-width: 769px) {
      margin: 0 3em;
    }
    #app {
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

render(
  <Provider store={configureStore(initialState)}>
    <Home />
  </Provider>,
  document.getElementById('app'),
);
