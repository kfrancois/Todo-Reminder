import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import * as reducers from './../reducers';

export const history = createHistory();

export default function configureStore(initialState = {}) {
    const reducer = combineReducers({
        ...reducers,
        routing: routerReducer,
    });

    // tslint:disable-next-line:no-string-literal
    const devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;

    const middleware = applyMiddleware(thunk, routerMiddleware(history));

    const store = middleware(devtools(createStore))(reducer);

    return store;
}