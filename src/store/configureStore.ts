import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { route } from '../reducers/route';
import * as reducers from './../reducers';

export const history = createHistory({ basename: process.env.PUBLIC_URL });

export default function configureStore(initialState = {}) {
  const reducer = combineReducers({
    ...reducers,
    route
  });

  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(thunk, routerMiddleware(history));

  const store = createStore(
    connectRouter(history)(reducer),
    composeEnhancer(middleware)
  );

  return store;
}
