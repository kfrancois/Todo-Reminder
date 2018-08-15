import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './../reducers';

export const history = createHistory({ basename: process.env.PUBLIC_URL });

export default function configureStore() {
  const rootReducer = combineReducers(reducers);

  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(thunk, routerMiddleware(history));

  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(middleware)
  );

  return store;
}
