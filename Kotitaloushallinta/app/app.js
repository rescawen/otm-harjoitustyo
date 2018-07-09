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

// initial mock state
// const initialState = { 
//   home: {
//       tasks: [
//         {
//           title: 'Changing bedsheets',
//           days: '7',
//           startingTime: "1529863189000"
//         },
//         {
//           title: 'Vacuuming',
//           days: '5',
//           startingTime: "1529776789000"
//         },
//         {
//           title: 'Stocking refrigerator',
//           days: '4',
//           startingTime: "1530122615000"
//         }
//       ]
//   }
// 

const initialState = {

}


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
