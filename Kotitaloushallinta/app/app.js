import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createMemoryHistory } from 'history';
import routes from './routes';
import configureStore from './store';

const syncHistoryWithStore = (store, history) => {
  const { routing } = store.getState();
  if(routing && routing.location) {
    history.replace(routing.location);
  }
};

const initialState = {
  home: {
      tasks: [
        {
          title: 'Changing bedsheets',
          days: '7',
          timeAtCreation: "1529863189000"
        },
        {
          title: 'Vacuuming',
          days: '5',
          timeAtCreation: "1529776789000"
        },
        {
          title: 'Stocking refrigerator',
          days: '4',
          timeAtCreation: "1530122615000"
        },
        {
          title: 'Cleaning toilet',
          days: '6',
          timeAtCreation: "1529690615000"
        }
      ]
  }
};
const routerHistory = createMemoryHistory();
const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={routerHistory}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  rootElement
);
