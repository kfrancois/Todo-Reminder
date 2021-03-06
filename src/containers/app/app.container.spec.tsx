import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { history } from '../../store/configureStore';
import AppContainer from './app.container';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
