import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import {throttle} from 'lodash';

import { loadState, saveState } from './localStorage';
import reducers from './reducers/index';


const configureStore = () => {
  const persistedState = loadState();

  const middlewares = [promise];
  // if (process.env.NODE_ENV !== 'production') {
  //    middlewares.push(createLogger());
  // };

  const store = createStore(reducers, persistedState, applyMiddleware(...middlewares));

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;
