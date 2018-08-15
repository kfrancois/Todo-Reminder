import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/app/app.container';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';
import './styles/index.less';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer history={history} />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );
};

render();
registerServiceWorker();
